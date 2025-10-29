import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProjectOrderByWithRelationInputObjectSchema as ProjectOrderByWithRelationInputObjectSchema } from './ProjectOrderByWithRelationInput.schema';
import { RowOrderByRelationAggregateInputObjectSchema as RowOrderByRelationAggregateInputObjectSchema } from './RowOrderByRelationAggregateInput.schema';
import { ColumnOrderByRelationAggregateInputObjectSchema as ColumnOrderByRelationAggregateInputObjectSchema } from './ColumnOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  ownerId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  projectId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Project: z.lazy(() => ProjectOrderByWithRelationInputObjectSchema).optional(),
  rows: z.lazy(() => RowOrderByRelationAggregateInputObjectSchema).optional(),
  Column: z.lazy(() => ColumnOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const SheetOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SheetOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetOrderByWithRelationInput>;
export const SheetOrderByWithRelationInputObjectZodSchema = makeSchema();
