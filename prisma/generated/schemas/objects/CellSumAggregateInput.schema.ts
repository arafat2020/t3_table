import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  colIndex: z.literal(true).optional()
}).strict();
export const CellSumAggregateInputObjectSchema: z.ZodType<Prisma.CellSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CellSumAggregateInputType>;
export const CellSumAggregateInputObjectZodSchema = makeSchema();
