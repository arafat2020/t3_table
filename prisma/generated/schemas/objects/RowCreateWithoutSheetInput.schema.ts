import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CellCreateNestedManyWithoutRowInputObjectSchema as CellCreateNestedManyWithoutRowInputObjectSchema } from './CellCreateNestedManyWithoutRowInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  index: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cells: z.lazy(() => CellCreateNestedManyWithoutRowInputObjectSchema).optional()
}).strict();
export const RowCreateWithoutSheetInputObjectSchema: z.ZodType<Prisma.RowCreateWithoutSheetInput> = makeSchema() as unknown as z.ZodType<Prisma.RowCreateWithoutSheetInput>;
export const RowCreateWithoutSheetInputObjectZodSchema = makeSchema();
