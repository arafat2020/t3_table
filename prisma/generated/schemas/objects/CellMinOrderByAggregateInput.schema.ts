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
export const CellMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CellMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CellMinOrderByAggregateInput>;
export const CellMinOrderByAggregateInputObjectZodSchema = makeSchema();
