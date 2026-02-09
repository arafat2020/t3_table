import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sheetId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  role: SortOrderSchema.optional()
}).strict();
export const CollaboratorCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CollaboratorCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorCountOrderByAggregateInput>;
export const CollaboratorCountOrderByAggregateInputObjectZodSchema = makeSchema();
