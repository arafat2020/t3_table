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
    const data =  ProjectFindFirstSchema.parse(rawData);    
    try {
        const project = await this.dbService.project.findFirst({
      ...data,
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
  
}

const commonService = new CommonService();
export default commonService;
