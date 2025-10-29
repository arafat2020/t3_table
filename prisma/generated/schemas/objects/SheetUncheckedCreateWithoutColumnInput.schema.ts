import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RowUncheckedCreateNestedManyWithoutSheetInputObjectSchema as RowUncheckedCreateNestedManyWithoutSheetInputObjectSchema } from './RowUncheckedCreateNestedManyWithoutSheetInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  projectId: z.string().optional().nullable(),
  rows: z.lazy(() => RowUncheckedCreateNestedManyWithoutSheetInputObjectSchema).optional()
}).strict();
export const SheetUncheckedCreateWithoutColumnInputObjectSchema: z.ZodType<Prisma.SheetUncheckedCreateWithoutColumnInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetUncheckedCreateWithoutColumnInput>;
export const SheetUncheckedCreateWithoutColumnInputObjectZodSchema = makeSchema();
