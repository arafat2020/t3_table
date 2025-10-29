import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetUpdateWithoutColumnInputObjectSchema as SheetUpdateWithoutColumnInputObjectSchema } from './SheetUpdateWithoutColumnInput.schema';
import { SheetUncheckedUpdateWithoutColumnInputObjectSchema as SheetUncheckedUpdateWithoutColumnInputObjectSchema } from './SheetUncheckedUpdateWithoutColumnInput.schema';
import { SheetCreateWithoutColumnInputObjectSchema as SheetCreateWithoutColumnInputObjectSchema } from './SheetCreateWithoutColumnInput.schema';
import { SheetUncheckedCreateWithoutColumnInputObjectSchema as SheetUncheckedCreateWithoutColumnInputObjectSchema } from './SheetUncheckedCreateWithoutColumnInput.schema';
import { SheetWhereInputObjectSchema as SheetWhereInputObjectSchema } from './SheetWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SheetUpdateWithoutColumnInputObjectSchema), z.lazy(() => SheetUncheckedUpdateWithoutColumnInputObjectSchema)]),
  create: z.union([z.lazy(() => SheetCreateWithoutColumnInputObjectSchema), z.lazy(() => SheetUncheckedCreateWithoutColumnInputObjectSchema)]),
  where: z.lazy(() => SheetWhereInputObjectSchema).optional()
}).strict();
export const SheetUpsertWithoutColumnInputObjectSchema: z.ZodType<Prisma.SheetUpsertWithoutColumnInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetUpsertWithoutColumnInput>;
export const SheetUpsertWithoutColumnInputObjectZodSchema = makeSchema();
