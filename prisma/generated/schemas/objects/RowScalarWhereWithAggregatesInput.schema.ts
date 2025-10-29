import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const rowscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => RowScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RowScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RowScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RowScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RowScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  sheetId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  index: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const RowScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.RowScalarWhereWithAggregatesInput> = rowscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.RowScalarWhereWithAggregatesInput>;
export const RowScalarWhereWithAggregatesInputObjectZodSchema = rowscalarwherewithaggregatesinputSchema;
