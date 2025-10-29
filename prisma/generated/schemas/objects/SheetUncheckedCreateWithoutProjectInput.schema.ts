import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RowUncheckedCreateNestedManyWithoutSheetInputObjectSchema as RowUncheckedCreateNestedManyWithoutSheetInputObjectSchema } from './RowUncheckedCreateNestedManyWithoutSheetInput.schema';
import { ColumnUncheckedCreateNestedManyWithoutSheetInputObjectSchema as ColumnUncheckedCreateNestedManyWithoutSheetInputObjectSchema } from './ColumnUncheckedCreateNestedManyWithoutSheetInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  rows: z.lazy(() => RowUncheckedCreateNestedManyWithoutSheetInputObjectSchema).optional(),
  Column: z.lazy(() => ColumnUncheckedCreateNestedManyWithoutSheetInputObjectSchema).optional()
}).strict();
export const SheetUncheckedCreateWithoutProjectInputObjectSchema: z.ZodType<Prisma.SheetUncheckedCreateWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetUncheckedCreateWithoutProjectInput>;
export const SheetUncheckedCreateWithoutProjectInputObjectZodSchema = makeSchema();
