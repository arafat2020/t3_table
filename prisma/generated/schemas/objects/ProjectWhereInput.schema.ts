import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserNullableScalarRelationFilterObjectSchema as UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { SheetListRelationFilterObjectSchema as SheetListRelationFilterObjectSchema } from './SheetListRelationFilter.schema'

const projectwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProjectWhereInputObjectSchema), z.lazy(() => ProjectWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProjectWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProjectWhereInputObjectSchema), z.lazy(() => ProjectWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  User: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  sheets: z.lazy(() => SheetListRelationFilterObjectSchema).optional()
}).strict();
export const ProjectWhereInputObjectSchema: z.ZodType<Prisma.ProjectWhereInput> = projectwhereinputSchema as unknown as z.ZodType<Prisma.ProjectWhereInput>;
export const ProjectWhereInputObjectZodSchema = projectwhereinputSchema;
