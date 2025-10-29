import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  rowId: z.literal(true).optional(),
  colIndex: z.literal(true).optional(),
  value: z.literal(true).optional(),
  type: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const CellCountAggregateInputObjectSchema: z.ZodType<Prisma.CellCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CellCountAggregateInputType>;
export const CellCountAggregateInputObjectZodSchema = makeSchema();
