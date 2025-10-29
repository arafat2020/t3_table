import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetCreateWithoutProjectInputObjectSchema as SheetCreateWithoutProjectInputObjectSchema } from './SheetCreateWithoutProjectInput.schema';
import { SheetUncheckedCreateWithoutProjectInputObjectSchema as SheetUncheckedCreateWithoutProjectInputObjectSchema } from './SheetUncheckedCreateWithoutProjectInput.schema';
import { SheetCreateOrConnectWithoutProjectInputObjectSchema as SheetCreateOrConnectWithoutProjectInputObjectSchema } from './SheetCreateOrConnectWithoutProjectInput.schema';
import { SheetUpsertWithWhereUniqueWithoutProjectInputObjectSchema as SheetUpsertWithWhereUniqueWithoutProjectInputObjectSchema } from './SheetUpsertWithWhereUniqueWithoutProjectInput.schema';
import { SheetCreateManyProjectInputEnvelopeObjectSchema as SheetCreateManyProjectInputEnvelopeObjectSchema } from './SheetCreateManyProjectInputEnvelope.schema';
import { SheetWhereUniqueInputObjectSchema as SheetWhereUniqueInputObjectSchema } from './SheetWhereUniqueInput.schema';
import { SheetUpdateWithWhereUniqueWithoutProjectInputObjectSchema as SheetUpdateWithWhereUniqueWithoutProjectInputObjectSchema } from './SheetUpdateWithWhereUniqueWithoutProjectInput.schema';
import { SheetUpdateManyWithWhereWithoutProjectInputObjectSchema as SheetUpdateManyWithWhereWithoutProjectInputObjectSchema } from './SheetUpdateManyWithWhereWithoutProjectInput.schema';
import { SheetScalarWhereInputObjectSchema as SheetScalarWhereInputObjectSchema } from './SheetScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SheetCreateWithoutProjectInputObjectSchema), z.lazy(() => SheetCreateWithoutProjectInputObjectSchema).array(), z.lazy(() => SheetUncheckedCreateWithoutProjectInputObjectSchema), z.lazy(() => SheetUncheckedCreateWithoutProjectInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SheetCreateOrConnectWithoutProjectInputObjectSchema), z.lazy(() => SheetCreateOrConnectWithoutProjectInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SheetUpsertWithWhereUniqueWithoutProjectInputObjectSchema), z.lazy(() => SheetUpsertWithWhereUniqueWithoutProjectInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SheetCreateManyProjectInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SheetWhereUniqueInputObjectSchema), z.lazy(() => SheetWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SheetWhereUniqueInputObjectSchema), z.lazy(() => SheetWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SheetWhereUniqueInputObjectSchema), z.lazy(() => SheetWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SheetWhereUniqueInputObjectSchema), z.lazy(() => SheetWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SheetUpdateWithWhereUniqueWithoutProjectInputObjectSchema), z.lazy(() => SheetUpdateWithWhereUniqueWithoutProjectInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SheetUpdateManyWithWhereWithoutProjectInputObjectSchema), z.lazy(() => SheetUpdateManyWithWhereWithoutProjectInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SheetScalarWhereInputObjectSchema), z.lazy(() => SheetScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SheetUpdateManyWithoutProjectNestedInputObjectSchema: z.ZodType<Prisma.SheetUpdateManyWithoutProjectNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetUpdateManyWithoutProjectNestedInput>;
export const SheetUpdateManyWithoutProjectNestedInputObjectZodSchema = makeSchema();
