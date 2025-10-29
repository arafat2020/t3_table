import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CellUncheckedCreateNestedManyWithoutRowInputObjectSchema as CellUncheckedCreateNestedManyWithoutRowInputObjectSchema } from './CellUncheckedCreateNestedManyWithoutRowInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  index: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cells: z.lazy(() => CellUncheckedCreateNestedManyWithoutRowInputObjectSchema).optional()
}).strict();
export const RowUncheckedCreateWithoutSheetInputObjectSchema: z.ZodType<Prisma.RowUncheckedCreateWithoutSheetInput> = makeSchema() as unknown as z.ZodType<Prisma.RowUncheckedCreateWithoutSheetInput>;
export const RowUncheckedCreateWithoutSheetInputObjectZodSchema = makeSchema();
