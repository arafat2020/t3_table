import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CollaboratorCountOrderByAggregateInputObjectSchema as CollaboratorCountOrderByAggregateInputObjectSchema } from './CollaboratorCountOrderByAggregateInput.schema';
import { CollaboratorMaxOrderByAggregateInputObjectSchema as CollaboratorMaxOrderByAggregateInputObjectSchema } from './CollaboratorMaxOrderByAggregateInput.schema';
import { CollaboratorMinOrderByAggregateInputObjectSchema as CollaboratorMinOrderByAggregateInputObjectSchema } from './CollaboratorMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sheetId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  _count: z.lazy(() => CollaboratorCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CollaboratorMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CollaboratorMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CollaboratorOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CollaboratorOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorOrderByWithAggregationInput>;
export const CollaboratorOrderByWithAggregationInputObjectZodSchema = makeSchema();
