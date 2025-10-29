import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sheetId: SortOrderSchema.optional(),
  index: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const RowMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RowMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RowMinOrderByAggregateInput>;
export const RowMinOrderByAggregateInputObjectZodSchema = makeSchema();
