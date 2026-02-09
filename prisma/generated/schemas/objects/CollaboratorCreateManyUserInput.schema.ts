import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  sheetId: z.string(),
  role: z.string().optional()
}).strict();
export const CollaboratorCreateManyUserInputObjectSchema: z.ZodType<Prisma.CollaboratorCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorCreateManyUserInput>;
export const CollaboratorCreateManyUserInputObjectZodSchema = makeSchema();
