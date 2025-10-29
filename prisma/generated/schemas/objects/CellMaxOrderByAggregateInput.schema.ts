import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  rowId: SortOrderSchema.optional(),
  colIndex: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const CellMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CellMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CellMaxOrderByAggregateInput>;
export const CellMaxOrderByAggregateInputObjectZodSchema = makeSchema();
