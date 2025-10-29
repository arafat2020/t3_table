import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  index: z.literal(true).optional()
}).strict();
export const ColumnAvgAggregateInputObjectSchema: z.ZodType<Prisma.ColumnAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ColumnAvgAggregateInputType>;
export const ColumnAvgAggregateInputObjectZodSchema = makeSchema();
