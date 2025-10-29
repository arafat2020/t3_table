import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetCreateNestedOneWithoutColumnInputObjectSchema as SheetCreateNestedOneWithoutColumnInputObjectSchema } from './SheetCreateNestedOneWithoutColumnInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  index: z.number().int(),
  name: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  sheet: z.lazy(() => SheetCreateNestedOneWithoutColumnInputObjectSchema)
}).strict();
export const ColumnCreateInputObjectSchema: z.ZodType<Prisma.ColumnCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ColumnCreateInput>;
export const ColumnCreateInputObjectZodSchema = makeSchema();
