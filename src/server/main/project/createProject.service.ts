import type { PrismaClient } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { ProjectInputSchema } from "prisma/generated/schemas";
import { db } from "~/server/db";

export class CreateProjectService {
  private db: PrismaClient;
  constructor() {
    this.db = db;
  }

  public async createProject(rawData: { name: string; description?: string; userId: string }) {
    const { userId, ...projectData } = rawData;

    if (!userId) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "User ID is required to create a project",
        cause: "Missing userId",
      });
    }
    try {
      const project = await this.db.project.create({
        data: {
          ...projectData,
          User: { connect: { id: userId } },
          sheets: {
            create: {
              name: "Sheet 1",
              ownerId: userId
            }
          }
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
