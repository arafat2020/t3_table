import { SheetCreateOneSchema, SheetFindUniqueSchema, CellUpdateOneSchema } from "prisma/generated/schemas";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import sheetService from "~/server/main/sheet/sheet.service";
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
        return await sheetService.updateCell(input, ctx.session.user.id);
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
    })
})
