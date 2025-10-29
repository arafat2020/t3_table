import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { SheetScalarRelationFilterObjectSchema as SheetScalarRelationFilterObjectSchema } from './SheetScalarRelationFilter.schema';
import { SheetWhereInputObjectSchema as SheetWhereInputObjectSchema } from './SheetWhereInput.schema'

const columnwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ColumnWhereInputObjectSchema), z.lazy(() => ColumnWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ColumnWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ColumnWhereInputObjectSchema), z.lazy(() => ColumnWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  sheetId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  index: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  sheet: z.union([z.lazy(() => SheetScalarRelationFilterObjectSchema), z.lazy(() => SheetWhereInputObjectSchema)]).optional()
}).strict();
export const ColumnWhereInputObjectSchema: z.ZodType<Prisma.ColumnWhereInput> = columnwhereinputSchema as unknown as z.ZodType<Prisma.ColumnWhereInput>;
export const ColumnWhereInputObjectZodSchema = columnwhereinputSchema;
