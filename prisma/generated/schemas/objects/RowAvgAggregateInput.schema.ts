import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  index: z.literal(true).optional()
}).strict();
export const RowAvgAggregateInputObjectSchema: z.ZodType<Prisma.RowAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RowAvgAggregateInputType>;
export const RowAvgAggregateInputObjectZodSchema = makeSchema();
