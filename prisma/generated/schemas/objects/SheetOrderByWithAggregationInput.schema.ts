import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SheetCountOrderByAggregateInputObjectSchema as SheetCountOrderByAggregateInputObjectSchema } from './SheetCountOrderByAggregateInput.schema';
import { SheetMaxOrderByAggregateInputObjectSchema as SheetMaxOrderByAggregateInputObjectSchema } from './SheetMaxOrderByAggregateInput.schema';
import { SheetMinOrderByAggregateInputObjectSchema as SheetMinOrderByAggregateInputObjectSchema } from './SheetMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  ownerId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  projectId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => SheetCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SheetMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SheetMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SheetOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SheetOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetOrderByWithAggregationInput>;
export const SheetOrderByWithAggregationInputObjectZodSchema = makeSchema();
