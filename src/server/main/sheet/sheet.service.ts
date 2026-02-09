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

    public async getSheet(rawData: unknown) {
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
                    }
                }
            });
            return sheet;
        } catch (error) {
            throw new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: "Failed to fetch sheet",
                cause: String(error),
            });
        }
    }

    public async updateSheet(input: { id: string; name?: string }) {
        try {
            return await this.db.sheet.update({
                where: { id: input.id },
                data: {
                    ...(input.name && { name: input.name })
                }
            });
        } catch (error) {
            throw new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: "Failed to update sheet",
                cause: String(error),
            });
        }
    }

    public async deleteSheet(id: string) {
        try {
            return await this.db.sheet.delete({
                where: { id }
            });
        } catch (error) {
            throw new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: "Failed to delete sheet",
                cause: String(error),
            });
        }
    }

    public async updateRowHeight(input: { sheetId: string; rowIndex: number; height: number }) {
        try {
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
            throw new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: "Failed to update row height",
                cause: String(error),
            });
        }
    }

    public async updateColumnWidth(input: { sheetId: string; colIndex: number; width: number }) {
        try {
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
            throw new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: "Failed to update column width",
                cause: String(error),
            });
        }
    }

    public async updateCell(rawData: unknown) {
        // Validation should happen before this or here with a Custom Schema
        const { sheetId, rowIndex, colIndex, value, align } = rawData as { sheetId: string, rowIndex: number, colIndex: number, value: string, align?: string };

        try {
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

            return cell;

        } catch (error) {
            throw new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: "Failed to update cell",
                cause: String(error),
            });
        }
    }
}

const sheetService = new SheetService();
export default sheetService;
