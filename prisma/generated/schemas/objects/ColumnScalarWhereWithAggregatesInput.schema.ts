import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const columnscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ColumnScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ColumnScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ColumnScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ColumnScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ColumnScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  sheetId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  index: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const ColumnScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ColumnScalarWhereWithAggregatesInput> = columnscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ColumnScalarWhereWithAggregatesInput>;
export const ColumnScalarWhereWithAggregatesInputObjectZodSchema = columnscalarwherewithaggregatesinputSchema;
