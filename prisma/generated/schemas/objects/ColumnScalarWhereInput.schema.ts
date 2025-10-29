import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const columnscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ColumnScalarWhereInputObjectSchema), z.lazy(() => ColumnScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ColumnScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ColumnScalarWhereInputObjectSchema), z.lazy(() => ColumnScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  sheetId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  index: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const ColumnScalarWhereInputObjectSchema: z.ZodType<Prisma.ColumnScalarWhereInput> = columnscalarwhereinputSchema as unknown as z.ZodType<Prisma.ColumnScalarWhereInput>;
export const ColumnScalarWhereInputObjectZodSchema = columnscalarwhereinputSchema;
