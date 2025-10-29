import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RowCreateNestedOneWithoutCellsInputObjectSchema as RowCreateNestedOneWithoutCellsInputObjectSchema } from './RowCreateNestedOneWithoutCellsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  colIndex: z.number().int(),
  value: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  row: z.lazy(() => RowCreateNestedOneWithoutCellsInputObjectSchema)
}).strict();
export const CellCreateInputObjectSchema: z.ZodType<Prisma.CellCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CellCreateInput>;
export const CellCreateInputObjectZodSchema = makeSchema();
