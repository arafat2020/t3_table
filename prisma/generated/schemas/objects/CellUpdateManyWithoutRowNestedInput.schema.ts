import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CellCreateWithoutRowInputObjectSchema as CellCreateWithoutRowInputObjectSchema } from './CellCreateWithoutRowInput.schema';
import { CellUncheckedCreateWithoutRowInputObjectSchema as CellUncheckedCreateWithoutRowInputObjectSchema } from './CellUncheckedCreateWithoutRowInput.schema';
import { CellCreateOrConnectWithoutRowInputObjectSchema as CellCreateOrConnectWithoutRowInputObjectSchema } from './CellCreateOrConnectWithoutRowInput.schema';
import { CellUpsertWithWhereUniqueWithoutRowInputObjectSchema as CellUpsertWithWhereUniqueWithoutRowInputObjectSchema } from './CellUpsertWithWhereUniqueWithoutRowInput.schema';
import { CellCreateManyRowInputEnvelopeObjectSchema as CellCreateManyRowInputEnvelopeObjectSchema } from './CellCreateManyRowInputEnvelope.schema';
import { CellWhereUniqueInputObjectSchema as CellWhereUniqueInputObjectSchema } from './CellWhereUniqueInput.schema';
import { CellUpdateWithWhereUniqueWithoutRowInputObjectSchema as CellUpdateWithWhereUniqueWithoutRowInputObjectSchema } from './CellUpdateWithWhereUniqueWithoutRowInput.schema';
import { CellUpdateManyWithWhereWithoutRowInputObjectSchema as CellUpdateManyWithWhereWithoutRowInputObjectSchema } from './CellUpdateManyWithWhereWithoutRowInput.schema';
import { CellScalarWhereInputObjectSchema as CellScalarWhereInputObjectSchema } from './CellScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CellCreateWithoutRowInputObjectSchema), z.lazy(() => CellCreateWithoutRowInputObjectSchema).array(), z.lazy(() => CellUncheckedCreateWithoutRowInputObjectSchema), z.lazy(() => CellUncheckedCreateWithoutRowInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CellCreateOrConnectWithoutRowInputObjectSchema), z.lazy(() => CellCreateOrConnectWithoutRowInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CellUpsertWithWhereUniqueWithoutRowInputObjectSchema), z.lazy(() => CellUpsertWithWhereUniqueWithoutRowInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CellCreateManyRowInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CellWhereUniqueInputObjectSchema), z.lazy(() => CellWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CellWhereUniqueInputObjectSchema), z.lazy(() => CellWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CellWhereUniqueInputObjectSchema), z.lazy(() => CellWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CellWhereUniqueInputObjectSchema), z.lazy(() => CellWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CellUpdateWithWhereUniqueWithoutRowInputObjectSchema), z.lazy(() => CellUpdateWithWhereUniqueWithoutRowInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CellUpdateManyWithWhereWithoutRowInputObjectSchema), z.lazy(() => CellUpdateManyWithWhereWithoutRowInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CellScalarWhereInputObjectSchema), z.lazy(() => CellScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CellUpdateManyWithoutRowNestedInputObjectSchema: z.ZodType<Prisma.CellUpdateManyWithoutRowNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CellUpdateManyWithoutRowNestedInput>;
export const CellUpdateManyWithoutRowNestedInputObjectZodSchema = makeSchema();
