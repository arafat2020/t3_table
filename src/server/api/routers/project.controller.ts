import { z } from "zod";
import { ProjectFindFirstSchema, ProjectInputSchema } from "prisma/generated/schemas";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import createProjectService from "~/server/main/project/createProject.service";
import commonService from "~/server/main/project/common.service";


export const projectRouter = createTRPCRouter({

    create: protectedProcedure.input(z.object({
        name: z.string().min(1),
        description: z.string().optional()
    })).mutation(async ({ input, ctx }) => {
        const project = createProjectService.createProject({
            ...input,
            userId: ctx.session.user.id,
        });
        return project;
    }),

    findFirst: protectedProcedure.input(ProjectFindFirstSchema).query(async ({ input }) => {
        const project = await commonService.getFirstProject(input);
        return project;
    }),

    getById: protectedProcedure.input(ProjectFindFirstSchema).query(async ({ input }) => {
        return await commonService.getFirstProject(input);
    }),

    getAll: protectedProcedure.query(async ({ ctx }) => {
        return await commonService.getAllProjects(ctx.session.user.id);
    })
})