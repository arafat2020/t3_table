import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RowOrderByWithRelationInputObjectSchema as RowOrderByWithRelationInputObjectSchema } from './RowOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  rowId: SortOrderSchema.optional(),
  colIndex: SortOrderSchema.optional(),
  value: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  row: z.lazy(() => RowOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const CellOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CellOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CellOrderByWithRelationInput>;
export const CellOrderByWithRelationInputObjectZodSchema = makeSchema();
