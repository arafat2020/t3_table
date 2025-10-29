import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  sheetId: z.literal(true).optional(),
  index: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const RowMaxAggregateInputObjectSchema: z.ZodType<Prisma.RowMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RowMaxAggregateInputType>;
export const RowMaxAggregateInputObjectZodSchema = makeSchema();
