import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollaboratorCreateWithoutUserInputObjectSchema as CollaboratorCreateWithoutUserInputObjectSchema } from './CollaboratorCreateWithoutUserInput.schema';
import { CollaboratorUncheckedCreateWithoutUserInputObjectSchema as CollaboratorUncheckedCreateWithoutUserInputObjectSchema } from './CollaboratorUncheckedCreateWithoutUserInput.schema';
import { CollaboratorCreateOrConnectWithoutUserInputObjectSchema as CollaboratorCreateOrConnectWithoutUserInputObjectSchema } from './CollaboratorCreateOrConnectWithoutUserInput.schema';
import { CollaboratorCreateManyUserInputEnvelopeObjectSchema as CollaboratorCreateManyUserInputEnvelopeObjectSchema } from './CollaboratorCreateManyUserInputEnvelope.schema';
import { CollaboratorWhereUniqueInputObjectSchema as CollaboratorWhereUniqueInputObjectSchema } from './CollaboratorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CollaboratorCreateWithoutUserInputObjectSchema), z.lazy(() => CollaboratorCreateWithoutUserInputObjectSchema).array(), z.lazy(() => CollaboratorUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => CollaboratorUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CollaboratorCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => CollaboratorCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CollaboratorCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CollaboratorWhereUniqueInputObjectSchema), z.lazy(() => CollaboratorWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CollaboratorUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.CollaboratorUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorUncheckedCreateNestedManyWithoutUserInput>;
export const CollaboratorUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
