import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetCreateWithoutProjectInputObjectSchema as SheetCreateWithoutProjectInputObjectSchema } from './SheetCreateWithoutProjectInput.schema';
import { SheetUncheckedCreateWithoutProjectInputObjectSchema as SheetUncheckedCreateWithoutProjectInputObjectSchema } from './SheetUncheckedCreateWithoutProjectInput.schema';
import { SheetCreateOrConnectWithoutProjectInputObjectSchema as SheetCreateOrConnectWithoutProjectInputObjectSchema } from './SheetCreateOrConnectWithoutProjectInput.schema';
import { SheetCreateManyProjectInputEnvelopeObjectSchema as SheetCreateManyProjectInputEnvelopeObjectSchema } from './SheetCreateManyProjectInputEnvelope.schema';
import { SheetWhereUniqueInputObjectSchema as SheetWhereUniqueInputObjectSchema } from './SheetWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SheetCreateWithoutProjectInputObjectSchema), z.lazy(() => SheetCreateWithoutProjectInputObjectSchema).array(), z.lazy(() => SheetUncheckedCreateWithoutProjectInputObjectSchema), z.lazy(() => SheetUncheckedCreateWithoutProjectInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SheetCreateOrConnectWithoutProjectInputObjectSchema), z.lazy(() => SheetCreateOrConnectWithoutProjectInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SheetCreateManyProjectInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SheetWhereUniqueInputObjectSchema), z.lazy(() => SheetWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SheetUncheckedCreateNestedManyWithoutProjectInputObjectSchema: z.ZodType<Prisma.SheetUncheckedCreateNestedManyWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetUncheckedCreateNestedManyWithoutProjectInput>;
export const SheetUncheckedCreateNestedManyWithoutProjectInputObjectZodSchema = makeSchema();
