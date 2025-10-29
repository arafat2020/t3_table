import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  colIndex: SortOrderSchema.optional()
}).strict();
export const CellSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CellSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CellSumOrderByAggregateInput>;
export const CellSumOrderByAggregateInputObjectZodSchema = makeSchema();
