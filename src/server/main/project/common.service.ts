import type { PrismaClient } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { ProjectFindFirstSchema } from "prisma/generated/schemas";
import { db } from "~/server/db";

export class CommonService {
  private dbService: PrismaClient;

  constructor() {
    this.dbService = db;
  }

  public async getFirstProject(rawData: unknown) {
    const data = ProjectFindFirstSchema.parse(rawData);
    try {
      const project = await this.dbService.project.findFirst({
        ...data,
        include: {
          sheets: true
        }
      });
      return project;
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch project",
        cause: String(error),
      });
    }
  }

  public async getAllProjects(userId: string) {
    try {
      const projects = await this.dbService.project.findMany({
        where: { userId },
        include: {
          sheets: true
        },
        orderBy: {
          updatedAt: 'desc'
        }
      });
      return projects;
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch projects",
        cause: String(error),
      });
    }
  }

  public async deleteProject(id: string) {
    try {
      return await this.dbService.project.delete({
        where: { id }
      });
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to delete project",
        cause: String(error),
      });
    }
  }

}

const commonService = new CommonService();
export default commonService;
