import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetWhereUniqueInputObjectSchema as SheetWhereUniqueInputObjectSchema } from './SheetWhereUniqueInput.schema';
import { SheetUpdateWithoutProjectInputObjectSchema as SheetUpdateWithoutProjectInputObjectSchema } from './SheetUpdateWithoutProjectInput.schema';
import { SheetUncheckedUpdateWithoutProjectInputObjectSchema as SheetUncheckedUpdateWithoutProjectInputObjectSchema } from './SheetUncheckedUpdateWithoutProjectInput.schema';
import { SheetCreateWithoutProjectInputObjectSchema as SheetCreateWithoutProjectInputObjectSchema } from './SheetCreateWithoutProjectInput.schema';
import { SheetUncheckedCreateWithoutProjectInputObjectSchema as SheetUncheckedCreateWithoutProjectInputObjectSchema } from './SheetUncheckedCreateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SheetWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SheetUpdateWithoutProjectInputObjectSchema), z.lazy(() => SheetUncheckedUpdateWithoutProjectInputObjectSchema)]),
  create: z.union([z.lazy(() => SheetCreateWithoutProjectInputObjectSchema), z.lazy(() => SheetUncheckedCreateWithoutProjectInputObjectSchema)])
}).strict();
export const SheetUpsertWithWhereUniqueWithoutProjectInputObjectSchema: z.ZodType<Prisma.SheetUpsertWithWhereUniqueWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetUpsertWithWhereUniqueWithoutProjectInput>;
export const SheetUpsertWithWhereUniqueWithoutProjectInputObjectZodSchema = makeSchema();
