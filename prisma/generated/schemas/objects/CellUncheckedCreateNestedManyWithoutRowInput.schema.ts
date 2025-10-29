import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CellCreateWithoutRowInputObjectSchema as CellCreateWithoutRowInputObjectSchema } from './CellCreateWithoutRowInput.schema';
import { CellUncheckedCreateWithoutRowInputObjectSchema as CellUncheckedCreateWithoutRowInputObjectSchema } from './CellUncheckedCreateWithoutRowInput.schema';
import { CellCreateOrConnectWithoutRowInputObjectSchema as CellCreateOrConnectWithoutRowInputObjectSchema } from './CellCreateOrConnectWithoutRowInput.schema';
import { CellCreateManyRowInputEnvelopeObjectSchema as CellCreateManyRowInputEnvelopeObjectSchema } from './CellCreateManyRowInputEnvelope.schema';
import { CellWhereUniqueInputObjectSchema as CellWhereUniqueInputObjectSchema } from './CellWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CellCreateWithoutRowInputObjectSchema), z.lazy(() => CellCreateWithoutRowInputObjectSchema).array(), z.lazy(() => CellUncheckedCreateWithoutRowInputObjectSchema), z.lazy(() => CellUncheckedCreateWithoutRowInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CellCreateOrConnectWithoutRowInputObjectSchema), z.lazy(() => CellCreateOrConnectWithoutRowInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CellCreateManyRowInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CellWhereUniqueInputObjectSchema), z.lazy(() => CellWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CellUncheckedCreateNestedManyWithoutRowInputObjectSchema: z.ZodType<Prisma.CellUncheckedCreateNestedManyWithoutRowInput> = makeSchema() as unknown as z.ZodType<Prisma.CellUncheckedCreateNestedManyWithoutRowInput>;
export const CellUncheckedCreateNestedManyWithoutRowInputObjectZodSchema = makeSchema();
