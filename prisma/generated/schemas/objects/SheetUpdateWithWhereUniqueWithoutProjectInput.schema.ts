import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetWhereUniqueInputObjectSchema as SheetWhereUniqueInputObjectSchema } from './SheetWhereUniqueInput.schema';
import { SheetUpdateWithoutProjectInputObjectSchema as SheetUpdateWithoutProjectInputObjectSchema } from './SheetUpdateWithoutProjectInput.schema';
import { SheetUncheckedUpdateWithoutProjectInputObjectSchema as SheetUncheckedUpdateWithoutProjectInputObjectSchema } from './SheetUncheckedUpdateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SheetWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SheetUpdateWithoutProjectInputObjectSchema), z.lazy(() => SheetUncheckedUpdateWithoutProjectInputObjectSchema)])
}).strict();
export const SheetUpdateWithWhereUniqueWithoutProjectInputObjectSchema: z.ZodType<Prisma.SheetUpdateWithWhereUniqueWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetUpdateWithWhereUniqueWithoutProjectInput>;
export const SheetUpdateWithWhereUniqueWithoutProjectInputObjectZodSchema = makeSchema();
