import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ProjectCreateManyUserInputObjectSchema: z.ZodType<Prisma.ProjectCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateManyUserInput>;
export const ProjectCreateManyUserInputObjectZodSchema = makeSchema();
