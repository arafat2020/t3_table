import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ColumnUncheckedCreateNestedManyWithoutSheetInputObjectSchema as ColumnUncheckedCreateNestedManyWithoutSheetInputObjectSchema } from './ColumnUncheckedCreateNestedManyWithoutSheetInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  projectId: z.string().optional().nullable(),
  Column: z.lazy(() => ColumnUncheckedCreateNestedManyWithoutSheetInputObjectSchema).optional()
}).strict();
export const SheetUncheckedCreateWithoutRowsInputObjectSchema: z.ZodType<Prisma.SheetUncheckedCreateWithoutRowsInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetUncheckedCreateWithoutRowsInput>;
export const SheetUncheckedCreateWithoutRowsInputObjectZodSchema = makeSchema();
