import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetUpdateWithoutRowsInputObjectSchema as SheetUpdateWithoutRowsInputObjectSchema } from './SheetUpdateWithoutRowsInput.schema';
import { SheetUncheckedUpdateWithoutRowsInputObjectSchema as SheetUncheckedUpdateWithoutRowsInputObjectSchema } from './SheetUncheckedUpdateWithoutRowsInput.schema';
import { SheetCreateWithoutRowsInputObjectSchema as SheetCreateWithoutRowsInputObjectSchema } from './SheetCreateWithoutRowsInput.schema';
import { SheetUncheckedCreateWithoutRowsInputObjectSchema as SheetUncheckedCreateWithoutRowsInputObjectSchema } from './SheetUncheckedCreateWithoutRowsInput.schema';
import { SheetWhereInputObjectSchema as SheetWhereInputObjectSchema } from './SheetWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SheetUpdateWithoutRowsInputObjectSchema), z.lazy(() => SheetUncheckedUpdateWithoutRowsInputObjectSchema)]),
  create: z.union([z.lazy(() => SheetCreateWithoutRowsInputObjectSchema), z.lazy(() => SheetUncheckedCreateWithoutRowsInputObjectSchema)]),
  where: z.lazy(() => SheetWhereInputObjectSchema).optional()
}).strict();
export const SheetUpsertWithoutRowsInputObjectSchema: z.ZodType<Prisma.SheetUpsertWithoutRowsInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetUpsertWithoutRowsInput>;
export const SheetUpsertWithoutRowsInputObjectZodSchema = makeSchema();
