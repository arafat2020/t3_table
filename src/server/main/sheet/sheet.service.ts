import type { PrismaClient } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import {
    SheetCreateOneSchema,
    SheetFindUniqueSchema,
    CellUpdateOneSchema,
    RowCreateOneSchema,
    ColumnCreateOneSchema
} from "prisma/generated/schemas";
import { db } from "~/server/db";

export class SheetService {
    private db: PrismaClient;

    constructor() {
        this.db = db;
    }

    private async checkPermission(sheetId: string, userId: string, requiredRole: "owner" | "editor" | "viewer" = "editor") {
        const sheet = await this.db.sheet.findUnique({
            where: { id: sheetId },
            include: { collaborators: true }
        });

        if (!sheet) {
            throw new TRPCError({
                code: "NOT_FOUND",
                message: "Sheet not found",
            });
        }

        if (sheet.ownerId === userId) return true;

        const collaborator = sheet.collaborators.find(c => c.userId === userId);
        if (!collaborator) {
            throw new TRPCError({
                code: "FORBIDDEN",
                message: "You do not have access to this sheet",
            });
        }

        if (requiredRole === "editor" && collaborator.role !== "editor") {
            throw new TRPCError({
                code: "FORBIDDEN",
                message: "You do not have permission to edit this sheet",
            });
        }

        return true;
    }

    public async createSheet(input: { name: string; ownerId: string; projectId: string }) {
        try {
            return await this.db.sheet.create({
                data: {
                    name: input.name,
                    ownerId: input.ownerId,
                    Project: { connect: { id: input.projectId } }
                }
            });
        } catch (error) {
            throw new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: "Failed to create sheet",
                cause: String(error),
            });
        }
    }

    public async getSheet(rawData: unknown, userId: string) {
        const where = SheetFindUniqueSchema.parse(rawData);
        try {
            const sheet = await this.db.sheet.findUnique({
                where: where.where,
                include: {
                    rows: {
                        orderBy: { index: 'asc' },
                        include: {
                            cells: {
                                orderBy: { colIndex: 'asc' }
                            }
                        }
                    },
                    Column: {
                        orderBy: { index: 'asc' }
                    },
                    collaborators: {
                        include: {
                            user: {
                                select: {
                                    id: true,
                                    name: true,
                                    email: true
                                }
                            }
                        }
                    }
                }
            });

            if (!sheet) return null;

            // Check access: must be owner or a collaborator
            const collaborator = sheet.collaborators.find(c => c.userId === userId);
            if (sheet.ownerId !== userId && !collaborator) {
                throw new TRPCError({
                    code: "FORBIDDEN",
                    message: "You do not have access to this sheet",
                });
            }

            const role = sheet.ownerId === userId ? "owner" : collaborator?.role || "viewer";

            return {
                ...sheet,
                role
            };
        } catch (error) {
            if (error instanceof TRPCError) throw error;
            throw new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: "Failed to fetch sheet",
                cause: String(error),
            });
        }
    }

    public async updateSheet(input: { id: string; name?: string }, userId: string) {
        try {
            await this.checkPermission(input.id, userId, "editor");
            return await this.db.sheet.update({
                where: { id: input.id },
                data: {
                    ...(input.name && { name: input.name })
                }
            });
        } catch (error) {
            if (error instanceof TRPCError) throw error;
            throw new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: "Failed to update sheet",
                cause: String(error),
            });
        }
    }

    public async deleteSheet(id: string, userId: string) {
        try {
            await this.checkPermission(id, userId, "owner");
            return await this.db.sheet.delete({
                where: { id }
            });
        } catch (error) {
            if (error instanceof TRPCError) throw error;
            throw new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: "Failed to delete sheet",
                cause: String(error),
            });
        }
    }

    public async updateRowHeight(input: { sheetId: string; rowIndex: number; height: number }, userId: string) {
        try {
            await this.checkPermission(input.sheetId, userId, "editor");
            const row = await this.db.row.findFirst({
                where: {
                    sheetId: input.sheetId,
                    index: input.rowIndex
                }
            });

            if (row) {
                return await this.db.row.update({
                    where: { id: row.id },
                    data: { height: input.height }
                });
            } else {
                return await this.db.row.create({
                    data: {
                        sheetId: input.sheetId,
                        index: input.rowIndex,
                        height: input.height
                    }
                });
            }
        } catch (error) {
            if (error instanceof TRPCError) throw error;
            throw new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: "Failed to update row height",
                cause: String(error),
            });
        }
    }

    public async updateColumnWidth(input: { sheetId: string; colIndex: number; width: number }, userId: string) {
        try {
            await this.checkPermission(input.sheetId, userId, "editor");
            const column = await this.db.column.findFirst({
                where: {
                    sheetId: input.sheetId,
                    index: input.colIndex
                }
            });

            if (column) {
                return await this.db.column.update({
                    where: { id: column.id },
                    data: { width: input.width }
                });
            } else {
                return await this.db.column.create({
                    data: {
                        sheetId: input.sheetId,
                        index: input.colIndex,
                        width: input.width
                    }
                });
            }
        } catch (error) {
            if (error instanceof TRPCError) throw error;
            throw new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: "Failed to update column width",
                cause: String(error),
            });
        }
    }

    public async updateCell(rawData: unknown, userId: string) {
        // Validation should happen before this or here with a Custom Schema
        const { sheetId, rowIndex, colIndex, value, align } = rawData as { sheetId: string, rowIndex: number, colIndex: number, value: string, align?: string };

        try {
            await this.checkPermission(sheetId, userId, "editor");
            // 1. Find or create Row
            let row = await this.db.row.findFirst({
                where: {
                    sheetId: sheetId,
                    index: rowIndex
                }
            });

            if (!row) {
                row = await this.db.row.create({
                    data: {
                        sheetId,
                        index: rowIndex
                    }
                });
            }

            // 2. Find or create Cell
            const cell = await this.db.cell.findFirst({
                where: {
                    rowId: row.id,
                    colIndex: colIndex
                }
            });

            if (cell) {
                return await this.db.cell.update({
                    where: { id: cell.id },
                    data: {
                        ...(value !== undefined && { value }),
                        ...(align !== undefined && { align })
                    }
                });
            } else {
                return await this.db.cell.create({
                    data: {
                        rowId: row.id,
                        colIndex: colIndex,
                        value: value ?? "",
                        align: align ?? "left"
                    }
                });
            }
        } catch (error) {
            throw new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: "Failed to update cell",
                cause: String(error),
            });
        }
    }

    public async shareSheet(input: { sheetId: string; email: string; role: string }) {
        try {
            // 1. Find the user by email
            const userToShareWith = await this.db.user.findUnique({
                where: { email: input.email }
            });

            if (!userToShareWith) {
                throw new TRPCError({
                    code: "NOT_FOUND",
                    message: "User not found with this email",
                });
            }

            // 2. Check if the sheet exists
            const sheet = await this.db.sheet.findUnique({
                where: { id: input.sheetId }
            });

            if (!sheet) {
                throw new TRPCError({
                    code: "NOT_FOUND",
                    message: "Sheet not found",
                });
            }

            // 3. Check if sharing with owner
            if (sheet.ownerId === userToShareWith.id) {
                throw new TRPCError({
                    code: "BAD_REQUEST",
                    message: "You cannot share a sheet with its owner",
                });
            }

            // 4. Create or update collaborator record
            return await this.db.collaborator.upsert({
                where: {
                    sheetId_userId: {
                        sheetId: input.sheetId,
                        userId: userToShareWith.id
                    }
                },
                update: {
                    role: input.role
                },
                create: {
                    sheetId: input.sheetId,
                    userId: userToShareWith.id,
                    role: input.role
                }
            });
        } catch (error) {
            if (error instanceof TRPCError) throw error;
            throw new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: "Failed to share sheet",
                cause: String(error),
            });
        }
    }

    public async getSharedSheets(userId: string) {
        try {
            return await this.db.sheet.findMany({
                where: {
                    collaborators: {
                        some: {
                            userId: userId
                        }
                    }
                },
                include: {
                    collaborators: {
                        where: { userId }
                    }
                },
                orderBy: { updatedAt: 'desc' }
            });
        } catch (error) {
            throw new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: "Failed to fetch shared sheets",
                cause: String(error),
            });
        }
    }
}

const sheetService = new SheetService();
export default sheetService;
