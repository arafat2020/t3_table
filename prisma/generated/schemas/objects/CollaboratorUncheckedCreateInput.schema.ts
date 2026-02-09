import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  sheetId: z.string(),
  userId: z.string(),
  role: z.string().optional()
}).strict();
export const CollaboratorUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CollaboratorUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorUncheckedCreateInput>;
export const CollaboratorUncheckedCreateInputObjectZodSchema = makeSchema();
