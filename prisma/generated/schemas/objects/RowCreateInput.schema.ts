import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CellCreateNestedManyWithoutRowInputObjectSchema as CellCreateNestedManyWithoutRowInputObjectSchema } from './CellCreateNestedManyWithoutRowInput.schema';
import { SheetCreateNestedOneWithoutRowsInputObjectSchema as SheetCreateNestedOneWithoutRowsInputObjectSchema } from './SheetCreateNestedOneWithoutRowsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  index: z.number().int(),
  createdAt: z.coerce.date().optional(),
  cells: z.lazy(() => CellCreateNestedManyWithoutRowInputObjectSchema),
  Sheet: z.lazy(() => SheetCreateNestedOneWithoutRowsInputObjectSchema)
}).strict();
export const RowCreateInputObjectSchema: z.ZodType<Prisma.RowCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RowCreateInput>;
export const RowCreateInputObjectZodSchema = makeSchema();
