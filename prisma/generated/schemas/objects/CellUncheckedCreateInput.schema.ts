import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  rowId: z.string(),
  colIndex: z.number().int(),
  value: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const CellUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CellUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CellUncheckedCreateInput>;
export const CellUncheckedCreateInputObjectZodSchema = makeSchema();
