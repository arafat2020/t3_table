import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  colIndex: SortOrderSchema.optional()
}).strict();
export const CellAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CellAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CellAvgOrderByAggregateInput>;
export const CellAvgOrderByAggregateInputObjectZodSchema = makeSchema();
