import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  ownerId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  projectId: SortOrderSchema.optional()
}).strict();
export const SheetMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SheetMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetMinOrderByAggregateInput>;
export const SheetMinOrderByAggregateInputObjectZodSchema = makeSchema();
