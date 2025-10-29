import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetWhereUniqueInputObjectSchema as SheetWhereUniqueInputObjectSchema } from './SheetWhereUniqueInput.schema';
import { SheetCreateWithoutProjectInputObjectSchema as SheetCreateWithoutProjectInputObjectSchema } from './SheetCreateWithoutProjectInput.schema';
import { SheetUncheckedCreateWithoutProjectInputObjectSchema as SheetUncheckedCreateWithoutProjectInputObjectSchema } from './SheetUncheckedCreateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SheetWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SheetCreateWithoutProjectInputObjectSchema), z.lazy(() => SheetUncheckedCreateWithoutProjectInputObjectSchema)])
}).strict();
export const SheetCreateOrConnectWithoutProjectInputObjectSchema: z.ZodType<Prisma.SheetCreateOrConnectWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetCreateOrConnectWithoutProjectInput>;
export const SheetCreateOrConnectWithoutProjectInputObjectZodSchema = makeSchema();
