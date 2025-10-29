import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  index: z.number().int(),
  name: z.string().optional().nullable(),
  type: z.string().optional().nullable()
}).strict();
export const ColumnCreateWithoutSheetInputObjectSchema: z.ZodType<Prisma.ColumnCreateWithoutSheetInput> = makeSchema() as unknown as z.ZodType<Prisma.ColumnCreateWithoutSheetInput>;
export const ColumnCreateWithoutSheetInputObjectZodSchema = makeSchema();
