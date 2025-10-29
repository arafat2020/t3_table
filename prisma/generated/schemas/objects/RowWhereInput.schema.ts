import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { CellListRelationFilterObjectSchema as CellListRelationFilterObjectSchema } from './CellListRelationFilter.schema';
import { SheetScalarRelationFilterObjectSchema as SheetScalarRelationFilterObjectSchema } from './SheetScalarRelationFilter.schema';
import { SheetWhereInputObjectSchema as SheetWhereInputObjectSchema } from './SheetWhereInput.schema'

const rowwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RowWhereInputObjectSchema), z.lazy(() => RowWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RowWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RowWhereInputObjectSchema), z.lazy(() => RowWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  sheetId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  index: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  cells: z.lazy(() => CellListRelationFilterObjectSchema).optional(),
  Sheet: z.union([z.lazy(() => SheetScalarRelationFilterObjectSchema), z.lazy(() => SheetWhereInputObjectSchema)]).optional()
}).strict();
export const RowWhereInputObjectSchema: z.ZodType<Prisma.RowWhereInput> = rowwhereinputSchema as unknown as z.ZodType<Prisma.RowWhereInput>;
export const RowWhereInputObjectZodSchema = rowwhereinputSchema;
