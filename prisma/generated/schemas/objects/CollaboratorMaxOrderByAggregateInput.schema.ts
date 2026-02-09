import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sheetId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  role: SortOrderSchema.optional()
}).strict();
export const CollaboratorMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CollaboratorMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorMaxOrderByAggregateInput>;
export const CollaboratorMaxOrderByAggregateInputObjectZodSchema = makeSchema();
