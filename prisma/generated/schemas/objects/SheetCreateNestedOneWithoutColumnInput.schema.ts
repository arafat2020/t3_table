import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetCreateWithoutColumnInputObjectSchema as SheetCreateWithoutColumnInputObjectSchema } from './SheetCreateWithoutColumnInput.schema';
import { SheetUncheckedCreateWithoutColumnInputObjectSchema as SheetUncheckedCreateWithoutColumnInputObjectSchema } from './SheetUncheckedCreateWithoutColumnInput.schema';
import { SheetCreateOrConnectWithoutColumnInputObjectSchema as SheetCreateOrConnectWithoutColumnInputObjectSchema } from './SheetCreateOrConnectWithoutColumnInput.schema';
import { SheetWhereUniqueInputObjectSchema as SheetWhereUniqueInputObjectSchema } from './SheetWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SheetCreateWithoutColumnInputObjectSchema), z.lazy(() => SheetUncheckedCreateWithoutColumnInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SheetCreateOrConnectWithoutColumnInputObjectSchema).optional(),
  connect: z.lazy(() => SheetWhereUniqueInputObjectSchema).optional()
}).strict();
export const SheetCreateNestedOneWithoutColumnInputObjectSchema: z.ZodType<Prisma.SheetCreateNestedOneWithoutColumnInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetCreateNestedOneWithoutColumnInput>;
export const SheetCreateNestedOneWithoutColumnInputObjectZodSchema = makeSchema();
