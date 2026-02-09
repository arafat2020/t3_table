import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollaboratorCreateWithoutUserInputObjectSchema as CollaboratorCreateWithoutUserInputObjectSchema } from './CollaboratorCreateWithoutUserInput.schema';
import { CollaboratorUncheckedCreateWithoutUserInputObjectSchema as CollaboratorUncheckedCreateWithoutUserInputObjectSchema } from './CollaboratorUncheckedCreateWithoutUserInput.schema';
import { CollaboratorCreateOrConnectWithoutUserInputObjectSchema as CollaboratorCreateOrConnectWithoutUserInputObjectSchema } from './CollaboratorCreateOrConnectWithoutUserInput.schema';
import { CollaboratorUpsertWithWhereUniqueWithoutUserInputObjectSchema as CollaboratorUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './CollaboratorUpsertWithWhereUniqueWithoutUserInput.schema';
import { CollaboratorCreateManyUserInputEnvelopeObjectSchema as CollaboratorCreateManyUserInputEnvelopeObjectSchema } from './CollaboratorCreateManyUserInputEnvelope.schema';
import { CollaboratorWhereUniqueInputObjectSchema as CollaboratorWhereUniqueInputObjectSchema } from './CollaboratorWhereUniqueInput.schema';
import { CollaboratorUpdateWithWhereUniqueWithoutUserInputObjectSchema as CollaboratorUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './CollaboratorUpdateWithWhereUniqueWithoutUserInput.schema';
import { CollaboratorUpdateManyWithWhereWithoutUserInputObjectSchema as CollaboratorUpdateManyWithWhereWithoutUserInputObjectSchema } from './CollaboratorUpdateManyWithWhereWithoutUserInput.schema';
import { CollaboratorScalarWhereInputObjectSchema as CollaboratorScalarWhereInputObjectSchema } from './CollaboratorScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CollaboratorCreateWithoutUserInputObjectSchema), z.lazy(() => CollaboratorCreateWithoutUserInputObjectSchema).array(), z.lazy(() => CollaboratorUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => CollaboratorUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CollaboratorCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => CollaboratorCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CollaboratorUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => CollaboratorUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CollaboratorCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CollaboratorWhereUniqueInputObjectSchema), z.lazy(() => CollaboratorWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CollaboratorWhereUniqueInputObjectSchema), z.lazy(() => CollaboratorWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CollaboratorWhereUniqueInputObjectSchema), z.lazy(() => CollaboratorWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CollaboratorWhereUniqueInputObjectSchema), z.lazy(() => CollaboratorWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CollaboratorUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => CollaboratorUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CollaboratorUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => CollaboratorUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CollaboratorScalarWhereInputObjectSchema), z.lazy(() => CollaboratorScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CollaboratorUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.CollaboratorUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorUpdateManyWithoutUserNestedInput>;
export const CollaboratorUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
