import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const rowscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RowScalarWhereInputObjectSchema), z.lazy(() => RowScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RowScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RowScalarWhereInputObjectSchema), z.lazy(() => RowScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  sheetId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  index: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const RowScalarWhereInputObjectSchema: z.ZodType<Prisma.RowScalarWhereInput> = rowscalarwhereinputSchema as unknown as z.ZodType<Prisma.RowScalarWhereInput>;
export const RowScalarWhereInputObjectZodSchema = rowscalarwhereinputSchema;
