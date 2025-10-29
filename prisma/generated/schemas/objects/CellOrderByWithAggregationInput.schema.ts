import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CellCountOrderByAggregateInputObjectSchema as CellCountOrderByAggregateInputObjectSchema } from './CellCountOrderByAggregateInput.schema';
import { CellAvgOrderByAggregateInputObjectSchema as CellAvgOrderByAggregateInputObjectSchema } from './CellAvgOrderByAggregateInput.schema';
import { CellMaxOrderByAggregateInputObjectSchema as CellMaxOrderByAggregateInputObjectSchema } from './CellMaxOrderByAggregateInput.schema';
import { CellMinOrderByAggregateInputObjectSchema as CellMinOrderByAggregateInputObjectSchema } from './CellMinOrderByAggregateInput.schema';
import { CellSumOrderByAggregateInputObjectSchema as CellSumOrderByAggregateInputObjectSchema } from './CellSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  rowId: SortOrderSchema.optional(),
  colIndex: SortOrderSchema.optional(),
  value: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => CellCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CellAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CellMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CellMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CellSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CellOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CellOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CellOrderByWithAggregationInput>;
export const CellOrderByWithAggregationInputObjectZodSchema = makeSchema();
