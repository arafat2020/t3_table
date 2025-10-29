import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RowCountOrderByAggregateInputObjectSchema as RowCountOrderByAggregateInputObjectSchema } from './RowCountOrderByAggregateInput.schema';
import { RowAvgOrderByAggregateInputObjectSchema as RowAvgOrderByAggregateInputObjectSchema } from './RowAvgOrderByAggregateInput.schema';
import { RowMaxOrderByAggregateInputObjectSchema as RowMaxOrderByAggregateInputObjectSchema } from './RowMaxOrderByAggregateInput.schema';
import { RowMinOrderByAggregateInputObjectSchema as RowMinOrderByAggregateInputObjectSchema } from './RowMinOrderByAggregateInput.schema';
import { RowSumOrderByAggregateInputObjectSchema as RowSumOrderByAggregateInputObjectSchema } from './RowSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sheetId: SortOrderSchema.optional(),
  index: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => RowCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => RowAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => RowMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => RowMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => RowSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const RowOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.RowOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.RowOrderByWithAggregationInput>;
export const RowOrderByWithAggregationInputObjectZodSchema = makeSchema();
