import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const sheetscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SheetScalarWhereInputObjectSchema), z.lazy(() => SheetScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SheetScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SheetScalarWhereInputObjectSchema), z.lazy(() => SheetScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  ownerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  projectId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const SheetScalarWhereInputObjectSchema: z.ZodType<Prisma.SheetScalarWhereInput> = sheetscalarwhereinputSchema as unknown as z.ZodType<Prisma.SheetScalarWhereInput>;
export const SheetScalarWhereInputObjectZodSchema = sheetscalarwhereinputSchema;
