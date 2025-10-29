import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sheetId: SortOrderSchema.optional(),
  index: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional()
}).strict();
export const ColumnMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ColumnMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ColumnMaxOrderByAggregateInput>;
export const ColumnMaxOrderByAggregateInputObjectZodSchema = makeSchema();
