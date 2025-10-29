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
export const ProjectUncheckedCreateWithoutSheetsInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutSheetsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUncheckedCreateWithoutSheetsInput>;
export const ProjectUncheckedCreateWithoutSheetsInputObjectZodSchema = makeSchema();
