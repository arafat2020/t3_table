import { ProjectFindFirstSchema, ProjectInputSchema } from "prisma/generated/schemas";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import createProjectService from "~/server/main/project/createProject.service";
import commonService from "~/server/main/project/common.service";


export const projectRouter = createTRPCRouter({
    create: protectedProcedure.input(ProjectInputSchema).mutation(async ({ input, ctx }) => {
        const { userId, User: _, ...parsedData } = input;
        const project = createProjectService.createProject({
            ...parsedData,
            userId: ctx.session.user.id,
        });
        return project;
    }),

    findFirst: protectedProcedure.input(ProjectFindFirstSchema).query(async ({ input }) => {
        const project = await commonService.getFirstProject(input);
        return project;
    })
})