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

    get: protectedProcedure.input(SheetFindUniqueSchema).query(async ({ input }) => {
        const sheet = await sheetService.getSheet(input);
        return sheet;
    }),

    // ...

    updateCell: protectedProcedure.input(z.object({
        sheetId: z.string(),
        rowIndex: z.number(),
        colIndex: z.number(),
        value: z.string()
    })).mutation(async ({ input }) => {
        return await sheetService.updateCell(input);
    })
})
