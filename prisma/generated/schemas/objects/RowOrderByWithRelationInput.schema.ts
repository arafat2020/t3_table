import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CellOrderByRelationAggregateInputObjectSchema as CellOrderByRelationAggregateInputObjectSchema } from './CellOrderByRelationAggregateInput.schema';
import { SheetOrderByWithRelationInputObjectSchema as SheetOrderByWithRelationInputObjectSchema } from './SheetOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sheetId: SortOrderSchema.optional(),
  index: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  cells: z.lazy(() => CellOrderByRelationAggregateInputObjectSchema).optional(),
  Sheet: z.lazy(() => SheetOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const RowOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.RowOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.RowOrderByWithRelationInput>;
export const RowOrderByWithRelationInputObjectZodSchema = makeSchema();
