import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  index: SortOrderSchema.optional()
}).strict();
export const ColumnAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ColumnAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ColumnAvgOrderByAggregateInput>;
export const ColumnAvgOrderByAggregateInputObjectZodSchema = makeSchema();
