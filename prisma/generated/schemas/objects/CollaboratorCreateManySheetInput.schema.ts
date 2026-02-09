import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  role: z.string().optional()
}).strict();
export const CollaboratorCreateManySheetInputObjectSchema: z.ZodType<Prisma.CollaboratorCreateManySheetInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorCreateManySheetInput>;
export const CollaboratorCreateManySheetInputObjectZodSchema = makeSchema();
