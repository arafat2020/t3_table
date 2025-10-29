import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  index: z.literal(true).optional()
}).strict();
export const ColumnSumAggregateInputObjectSchema: z.ZodType<Prisma.ColumnSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ColumnSumAggregateInputType>;
export const ColumnSumAggregateInputObjectZodSchema = makeSchema();
