import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  colIndex: z.literal(true).optional()
}).strict();
export const CellAvgAggregateInputObjectSchema: z.ZodType<Prisma.CellAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CellAvgAggregateInputType>;
export const CellAvgAggregateInputObjectZodSchema = makeSchema();
