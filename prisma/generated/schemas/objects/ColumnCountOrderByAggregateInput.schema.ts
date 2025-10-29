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
export const ColumnCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ColumnCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ColumnCountOrderByAggregateInput>;
export const ColumnCountOrderByAggregateInputObjectZodSchema = makeSchema();
