import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  index: SortOrderSchema.optional()
}).strict();
export const RowSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RowSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RowSumOrderByAggregateInput>;
export const RowSumOrderByAggregateInputObjectZodSchema = makeSchema();
