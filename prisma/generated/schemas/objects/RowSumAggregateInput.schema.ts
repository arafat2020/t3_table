import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  index: z.literal(true).optional()
}).strict();
export const RowSumAggregateInputObjectSchema: z.ZodType<Prisma.RowSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RowSumAggregateInputType>;
export const RowSumAggregateInputObjectZodSchema = makeSchema();
