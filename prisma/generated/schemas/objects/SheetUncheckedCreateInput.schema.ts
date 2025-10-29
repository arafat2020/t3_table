import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RowUncheckedCreateNestedManyWithoutSheetInputObjectSchema as RowUncheckedCreateNestedManyWithoutSheetInputObjectSchema } from './RowUncheckedCreateNestedManyWithoutSheetInput.schema';
import { ColumnUncheckedCreateNestedManyWithoutSheetInputObjectSchema as ColumnUncheckedCreateNestedManyWithoutSheetInputObjectSchema } from './ColumnUncheckedCreateNestedManyWithoutSheetInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  projectId: z.string().optional().nullable(),
  rows: z.lazy(() => RowUncheckedCreateNestedManyWithoutSheetInputObjectSchema),
  Column: z.lazy(() => ColumnUncheckedCreateNestedManyWithoutSheetInputObjectSchema)
}).strict();
export const SheetUncheckedCreateInputObjectSchema: z.ZodType<Prisma.SheetUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetUncheckedCreateInput>;
export const SheetUncheckedCreateInputObjectZodSchema = makeSchema();
