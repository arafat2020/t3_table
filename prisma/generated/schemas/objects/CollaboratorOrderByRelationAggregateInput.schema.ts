import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CollaboratorOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CollaboratorOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorOrderByRelationAggregateInput>;
export const CollaboratorOrderByRelationAggregateInputObjectZodSchema = makeSchema();
