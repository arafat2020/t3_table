import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  index: SortOrderSchema.optional()
}).strict();
export const RowAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RowAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RowAvgOrderByAggregateInput>;
export const RowAvgOrderByAggregateInputObjectZodSchema = makeSchema();
