import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetWhereUniqueInputObjectSchema as SheetWhereUniqueInputObjectSchema } from './SheetWhereUniqueInput.schema';
import { SheetCreateWithoutColumnInputObjectSchema as SheetCreateWithoutColumnInputObjectSchema } from './SheetCreateWithoutColumnInput.schema';
import { SheetUncheckedCreateWithoutColumnInputObjectSchema as SheetUncheckedCreateWithoutColumnInputObjectSchema } from './SheetUncheckedCreateWithoutColumnInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SheetWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SheetCreateWithoutColumnInputObjectSchema), z.lazy(() => SheetUncheckedCreateWithoutColumnInputObjectSchema)])
}).strict();
export const SheetCreateOrConnectWithoutColumnInputObjectSchema: z.ZodType<Prisma.SheetCreateOrConnectWithoutColumnInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetCreateOrConnectWithoutColumnInput>;
export const SheetCreateOrConnectWithoutColumnInputObjectZodSchema = makeSchema();
