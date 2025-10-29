import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetCreateNestedOneWithoutRowsInputObjectSchema as SheetCreateNestedOneWithoutRowsInputObjectSchema } from './SheetCreateNestedOneWithoutRowsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  index: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Sheet: z.lazy(() => SheetCreateNestedOneWithoutRowsInputObjectSchema)
}).strict();
export const RowCreateWithoutCellsInputObjectSchema: z.ZodType<Prisma.RowCreateWithoutCellsInput> = makeSchema() as unknown as z.ZodType<Prisma.RowCreateWithoutCellsInput>;
export const RowCreateWithoutCellsInputObjectZodSchema = makeSchema();
