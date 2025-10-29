import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const cellscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CellScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CellScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CellScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CellScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CellScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  rowId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  colIndex: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  value: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const CellScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CellScalarWhereWithAggregatesInput> = cellscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CellScalarWhereWithAggregatesInput>;
export const CellScalarWhereWithAggregatesInputObjectZodSchema = cellscalarwherewithaggregatesinputSchema;
