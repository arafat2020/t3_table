import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string().optional().nullable()
}).strict();
export const ProjectCreateManyInputObjectSchema: z.ZodType<Prisma.ProjectCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateManyInput>;
export const ProjectCreateManyInputObjectZodSchema = makeSchema();
