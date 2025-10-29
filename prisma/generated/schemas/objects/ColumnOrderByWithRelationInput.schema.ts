import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SheetOrderByWithRelationInputObjectSchema as SheetOrderByWithRelationInputObjectSchema } from './SheetOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sheetId: SortOrderSchema.optional(),
  index: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  sheet: z.lazy(() => SheetOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ColumnOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ColumnOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ColumnOrderByWithRelationInput>;
export const ColumnOrderByWithRelationInputObjectZodSchema = makeSchema();
