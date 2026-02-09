import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  role: z.string().optional()
}).strict();
export const CollaboratorUncheckedCreateWithoutSheetInputObjectSchema: z.ZodType<Prisma.CollaboratorUncheckedCreateWithoutSheetInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorUncheckedCreateWithoutSheetInput>;
export const CollaboratorUncheckedCreateWithoutSheetInputObjectZodSchema = makeSchema();
