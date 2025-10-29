import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { RowScalarRelationFilterObjectSchema as RowScalarRelationFilterObjectSchema } from './RowScalarRelationFilter.schema';
import { RowWhereInputObjectSchema as RowWhereInputObjectSchema } from './RowWhereInput.schema'

const cellwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CellWhereInputObjectSchema), z.lazy(() => CellWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CellWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CellWhereInputObjectSchema), z.lazy(() => CellWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  rowId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  colIndex: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  value: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  row: z.union([z.lazy(() => RowScalarRelationFilterObjectSchema), z.lazy(() => RowWhereInputObjectSchema)]).optional()
}).strict();
export const CellWhereInputObjectSchema: z.ZodType<Prisma.CellWhereInput> = cellwhereinputSchema as unknown as z.ZodType<Prisma.CellWhereInput>;
export const CellWhereInputObjectZodSchema = cellwhereinputSchema;
