import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetWhereInputObjectSchema as SheetWhereInputObjectSchema } from './SheetWhereInput.schema';
import { SheetUpdateWithoutRowsInputObjectSchema as SheetUpdateWithoutRowsInputObjectSchema } from './SheetUpdateWithoutRowsInput.schema';
import { SheetUncheckedUpdateWithoutRowsInputObjectSchema as SheetUncheckedUpdateWithoutRowsInputObjectSchema } from './SheetUncheckedUpdateWithoutRowsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SheetWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SheetUpdateWithoutRowsInputObjectSchema), z.lazy(() => SheetUncheckedUpdateWithoutRowsInputObjectSchema)])
}).strict();
export const SheetUpdateToOneWithWhereWithoutRowsInputObjectSchema: z.ZodType<Prisma.SheetUpdateToOneWithWhereWithoutRowsInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetUpdateToOneWithWhereWithoutRowsInput>;
export const SheetUpdateToOneWithWhereWithoutRowsInputObjectZodSchema = makeSchema();
