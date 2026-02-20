import { SheetCreateOneSchema, SheetFindUniqueSchema, CellUpdateOneSchema } from "prisma/generated/schemas";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import sheetService from "~/server/main/sheet/sheet.service";
import { cursorEmitter, type CursorEvent, type CellUpdateEvent } from "~/server/main/sheet/cursorEmitter";
import { z } from "zod";

export const sheetRouter = createTRPCRouter({
    create: protectedProcedure.input(z.object({
        name: z.string(),
        projectId: z.string(),
    })).mutation(async ({ input, ctx }) => {
        const sheet = await sheetService.createSheet({
            name: input.name,
            projectId: input.projectId,
            ownerId: ctx.session.user.id
        });
        return sheet;
    }),

    get: protectedProcedure.input(SheetFindUniqueSchema).query(async ({ input, ctx }) => {
        const sheet = await sheetService.getSheet(input, ctx.session.user.id);
        return sheet;
    }),

    getShared: protectedProcedure.query(async ({ ctx }) => {
        return await sheetService.getSharedSheets(ctx.session.user.id);
    }),

    share: protectedProcedure.input(z.object({
        sheetId: z.string(),
        email: z.string().email(),
        role: z.enum(["viewer", "editor"]).default("viewer")
    })).mutation(async ({ input }) => {
        return await sheetService.shareSheet(input);
    }),

    update: protectedProcedure.input(z.object({
        id: z.string(),
        name: z.string().optional(),
    })).mutation(async ({ input, ctx }) => {
        return await sheetService.updateSheet(input, ctx.session.user.id);
    }),

    delete: protectedProcedure.input(z.object({
        id: z.string(),
    })).mutation(async ({ input, ctx }) => {
        return await sheetService.deleteSheet(input.id, ctx.session.user.id);
    }),


    updateCell: protectedProcedure.input(z.object({
        sheetId: z.string(),
        rowIndex: z.number(),
        colIndex: z.number(),
        value: z.string().optional(),
        align: z.string().optional()
    })).mutation(async ({ input, ctx }) => {
        const result = await sheetService.updateCell(input, ctx.session.user.id);

        // Broadcast cell update to other subscribers
        cursorEmitter.emitCellUpdate(
            input.sheetId,
            ctx.session.user.id,
            input.rowIndex,
            input.colIndex,
            input.value,
            input.align
        );

        return result;
    }),

    updateRowHeight: protectedProcedure.input(z.object({
        sheetId: z.string(),
        rowIndex: z.number(),
        height: z.number()
    })).mutation(async ({ input, ctx }) => {
        return await sheetService.updateRowHeight(input, ctx.session.user.id);
    }),

    updateColumnWidth: protectedProcedure.input(z.object({
        sheetId: z.string(),
        colIndex: z.number(),
        width: z.number()
    })).mutation(async ({ input, ctx }) => {
        return await sheetService.updateColumnWidth(input, ctx.session.user.id);
    }),

    // --- Live Cursor Endpoints ---

    /**
     * Mutation: broadcast the current user's cursor position to all subscribers of the sheet.
     */
    cursorMove: protectedProcedure.input(z.object({
        sheetId: z.string(),
        row: z.number(),
        col: z.number(),
    })).mutation(({ input, ctx }) => {
        cursorEmitter.emitCursor(
            input.sheetId,
            ctx.session.user.id,
            ctx.session.user.name ?? "Anonymous",
            input.row,
            input.col
        );
        return { ok: true };
    }),

    /**
     * Subscription (SSE): stream cursor positions from other users on the same sheet.
     * Uses an async generator that listens to the in-memory EventEmitter.
     */
    onCursorMove: protectedProcedure.input(z.object({
        sheetId: z.string(),
    })).subscription(async function* ({ input, ctx, signal }) {
        const userId = ctx.session.user.id;
        const sheetId = input.sheetId;

        // Create a queue to bridge EventEmitter callbacks → async generator yields
        const queue: CursorEvent[] = [];
        let resolve: (() => void) | null = null;

        const onEvent = (event: CursorEvent) => {
            // Don't send back the user's own cursor
            if (event.userId === userId) return;
            queue.push(event);
            if (resolve) {
                resolve();
                resolve = null;
            }
        };

        cursorEmitter.onCursor(sheetId, onEvent);

        try {
            while (!signal?.aborted) {
                // Wait for events if queue is empty
                if (queue.length === 0) {
                    await new Promise<void>((r) => {
                        resolve = r;
                        // Also resolve on abort so we can exit the loop
                        signal?.addEventListener("abort", () => r(), { once: true });
                    });
                }

                // Yield all queued events
                while (queue.length > 0) {
                    yield queue.shift()!;
                }
            }
        } finally {
            cursorEmitter.offCursor(sheetId, onEvent);
        }
    }),

    /**
     * Subscription (SSE): stream cell updates from other users on the same sheet.
     */
    onCellUpdate: protectedProcedure.input(z.object({
        sheetId: z.string(),
    })).subscription(async function* ({ input, ctx, signal }) {
        const userId = ctx.session.user.id;
        const sheetId = input.sheetId;

        const queue: CellUpdateEvent[] = [];
        let resolve: (() => void) | null = null;

        const onEvent = (event: CellUpdateEvent) => {
            if (event.userId === userId) return;
            queue.push(event);
            if (resolve) {
                resolve();
                resolve = null;
            }
        };

        cursorEmitter.onCellUpdate(sheetId, onEvent);

        try {
            while (!signal?.aborted) {
                if (queue.length === 0) {
                    await new Promise<void>((r) => {
                        resolve = r;
                        signal?.addEventListener("abort", () => r(), { once: true });
                    });
                }

                while (queue.length > 0) {
                    yield queue.shift()!;
                }
            }
        } finally {
            cursorEmitter.offCellUpdate(sheetId, onEvent);
        }
    }),
})
