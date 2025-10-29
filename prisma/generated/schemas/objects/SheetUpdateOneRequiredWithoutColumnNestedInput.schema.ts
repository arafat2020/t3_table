import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetCreateWithoutColumnInputObjectSchema as SheetCreateWithoutColumnInputObjectSchema } from './SheetCreateWithoutColumnInput.schema';
import { SheetUncheckedCreateWithoutColumnInputObjectSchema as SheetUncheckedCreateWithoutColumnInputObjectSchema } from './SheetUncheckedCreateWithoutColumnInput.schema';
import { SheetCreateOrConnectWithoutColumnInputObjectSchema as SheetCreateOrConnectWithoutColumnInputObjectSchema } from './SheetCreateOrConnectWithoutColumnInput.schema';
import { SheetUpsertWithoutColumnInputObjectSchema as SheetUpsertWithoutColumnInputObjectSchema } from './SheetUpsertWithoutColumnInput.schema';
import { SheetWhereUniqueInputObjectSchema as SheetWhereUniqueInputObjectSchema } from './SheetWhereUniqueInput.schema';
import { SheetUpdateToOneWithWhereWithoutColumnInputObjectSchema as SheetUpdateToOneWithWhereWithoutColumnInputObjectSchema } from './SheetUpdateToOneWithWhereWithoutColumnInput.schema';
import { SheetUpdateWithoutColumnInputObjectSchema as SheetUpdateWithoutColumnInputObjectSchema } from './SheetUpdateWithoutColumnInput.schema';
import { SheetUncheckedUpdateWithoutColumnInputObjectSchema as SheetUncheckedUpdateWithoutColumnInputObjectSchema } from './SheetUncheckedUpdateWithoutColumnInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SheetCreateWithoutColumnInputObjectSchema), z.lazy(() => SheetUncheckedCreateWithoutColumnInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SheetCreateOrConnectWithoutColumnInputObjectSchema).optional(),
  upsert: z.lazy(() => SheetUpsertWithoutColumnInputObjectSchema).optional(),
  connect: z.lazy(() => SheetWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SheetUpdateToOneWithWhereWithoutColumnInputObjectSchema), z.lazy(() => SheetUpdateWithoutColumnInputObjectSchema), z.lazy(() => SheetUncheckedUpdateWithoutColumnInputObjectSchema)]).optional()
}).strict();
export const SheetUpdateOneRequiredWithoutColumnNestedInputObjectSchema: z.ZodType<Prisma.SheetUpdateOneRequiredWithoutColumnNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetUpdateOneRequiredWithoutColumnNestedInput>;
export const SheetUpdateOneRequiredWithoutColumnNestedInputObjectZodSchema = makeSchema();
