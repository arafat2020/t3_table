import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CellUncheckedCreateNestedManyWithoutRowInputObjectSchema as CellUncheckedCreateNestedManyWithoutRowInputObjectSchema } from './CellUncheckedCreateNestedManyWithoutRowInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  sheetId: z.string(),
  index: z.number().int(),
  createdAt: z.coerce.date().optional(),
  cells: z.lazy(() => CellUncheckedCreateNestedManyWithoutRowInputObjectSchema)
}).strict();
export const RowUncheckedCreateInputObjectSchema: z.ZodType<Prisma.RowUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RowUncheckedCreateInput>;
export const RowUncheckedCreateInputObjectZodSchema = makeSchema();
