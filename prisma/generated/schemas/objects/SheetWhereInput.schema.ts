import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { ProjectNullableScalarRelationFilterObjectSchema as ProjectNullableScalarRelationFilterObjectSchema } from './ProjectNullableScalarRelationFilter.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema';
import { RowListRelationFilterObjectSchema as RowListRelationFilterObjectSchema } from './RowListRelationFilter.schema';
import { ColumnListRelationFilterObjectSchema as ColumnListRelationFilterObjectSchema } from './ColumnListRelationFilter.schema'

const sheetwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SheetWhereInputObjectSchema), z.lazy(() => SheetWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SheetWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SheetWhereInputObjectSchema), z.lazy(() => SheetWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  ownerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  projectId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  Project: z.union([z.lazy(() => ProjectNullableScalarRelationFilterObjectSchema), z.lazy(() => ProjectWhereInputObjectSchema)]).optional(),
  rows: z.lazy(() => RowListRelationFilterObjectSchema).optional(),
  Column: z.lazy(() => ColumnListRelationFilterObjectSchema).optional()
}).strict();
export const SheetWhereInputObjectSchema: z.ZodType<Prisma.SheetWhereInput> = sheetwhereinputSchema as unknown as z.ZodType<Prisma.SheetWhereInput>;
export const SheetWhereInputObjectZodSchema = sheetwhereinputSchema;
