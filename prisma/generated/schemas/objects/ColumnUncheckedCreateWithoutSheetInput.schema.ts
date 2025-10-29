import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  index: z.number().int(),
  name: z.string().optional().nullable(),
  type: z.string().optional().nullable()
}).strict();
export const ColumnUncheckedCreateWithoutSheetInputObjectSchema: z.ZodType<Prisma.ColumnUncheckedCreateWithoutSheetInput> = makeSchema() as unknown as z.ZodType<Prisma.ColumnUncheckedCreateWithoutSheetInput>;
export const ColumnUncheckedCreateWithoutSheetInputObjectZodSchema = makeSchema();
