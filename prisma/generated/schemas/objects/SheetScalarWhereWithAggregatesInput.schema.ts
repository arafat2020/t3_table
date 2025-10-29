import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const sheetscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => SheetScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SheetScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SheetScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SheetScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SheetScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  ownerId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  projectId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const SheetScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.SheetScalarWhereWithAggregatesInput> = sheetscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.SheetScalarWhereWithAggregatesInput>;
export const SheetScalarWhereWithAggregatesInputObjectZodSchema = sheetscalarwherewithaggregatesinputSchema;
