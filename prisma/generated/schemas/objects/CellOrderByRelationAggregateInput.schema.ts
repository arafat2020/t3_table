import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CellOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CellOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CellOrderByRelationAggregateInput>;
export const CellOrderByRelationAggregateInputObjectZodSchema = makeSchema();
