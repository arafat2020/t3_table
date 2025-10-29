import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  sheetId: z.literal(true).optional(),
  index: z.literal(true).optional(),
  name: z.literal(true).optional(),
  type: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ColumnCountAggregateInputObjectSchema: z.ZodType<Prisma.ColumnCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ColumnCountAggregateInputType>;
export const ColumnCountAggregateInputObjectZodSchema = makeSchema();
