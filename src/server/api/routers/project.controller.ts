import { ProjectInputSchema } from "prisma/generated/schemas";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import createProjectService from "~/server/main/project/createProject.service";

export const postRouter = createTRPCRouter({
    create: protectedProcedure.input(ProjectInputSchema).mutation(async ({ input, ctx }) => {
        const { userId, User: _, ...parsedData } = input;
        const project = createProjectService.createProject({
            ...parsedData,
            userId: ctx.session.user.id,
        });
        return project;
    }),
})