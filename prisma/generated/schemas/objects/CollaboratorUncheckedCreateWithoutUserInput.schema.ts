import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  sheetId: z.string(),
  role: z.string().optional()
}).strict();
export const CollaboratorUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.CollaboratorUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorUncheckedCreateWithoutUserInput>;
export const CollaboratorUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
