import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sheetId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  role: SortOrderSchema.optional()
}).strict();
export const CollaboratorMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CollaboratorMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorMinOrderByAggregateInput>;
export const CollaboratorMinOrderByAggregateInputObjectZodSchema = makeSchema();
