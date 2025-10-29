import { TRPCError } from "@trpc/server";
import { ProjectInputSchema } from "prisma/generated/schemas";
import { db } from "~/server/db";

export class CreateProjectService {
  private db = db;

  public async createProject(rawData: unknown) {
    const {
      userId,
      User: _,
      ...parsedData
    } = ProjectInputSchema.parse(rawData);
    if (!userId) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "User ID is required to create a project",
      });
    }
    try {
      const project = await this.db.project.create({
        data: {
          ...parsedData,
          ...(userId ? { User: { connect: { id: userId } } } : {}),
        },
      });
      return project;
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to create project",
        cause: String(error),
      });
    }
  }
}

const createProjectService = new CreateProjectService();
export default createProjectService;
