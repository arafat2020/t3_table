import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollaboratorCreateWithoutSheetInputObjectSchema as CollaboratorCreateWithoutSheetInputObjectSchema } from './CollaboratorCreateWithoutSheetInput.schema';
import { CollaboratorUncheckedCreateWithoutSheetInputObjectSchema as CollaboratorUncheckedCreateWithoutSheetInputObjectSchema } from './CollaboratorUncheckedCreateWithoutSheetInput.schema';
import { CollaboratorCreateOrConnectWithoutSheetInputObjectSchema as CollaboratorCreateOrConnectWithoutSheetInputObjectSchema } from './CollaboratorCreateOrConnectWithoutSheetInput.schema';
import { CollaboratorCreateManySheetInputEnvelopeObjectSchema as CollaboratorCreateManySheetInputEnvelopeObjectSchema } from './CollaboratorCreateManySheetInputEnvelope.schema';
import { CollaboratorWhereUniqueInputObjectSchema as CollaboratorWhereUniqueInputObjectSchema } from './CollaboratorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CollaboratorCreateWithoutSheetInputObjectSchema), z.lazy(() => CollaboratorCreateWithoutSheetInputObjectSchema).array(), z.lazy(() => CollaboratorUncheckedCreateWithoutSheetInputObjectSchema), z.lazy(() => CollaboratorUncheckedCreateWithoutSheetInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CollaboratorCreateOrConnectWithoutSheetInputObjectSchema), z.lazy(() => CollaboratorCreateOrConnectWithoutSheetInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CollaboratorCreateManySheetInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CollaboratorWhereUniqueInputObjectSchema), z.lazy(() => CollaboratorWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CollaboratorUncheckedCreateNestedManyWithoutSheetInputObjectSchema: z.ZodType<Prisma.CollaboratorUncheckedCreateNestedManyWithoutSheetInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorUncheckedCreateNestedManyWithoutSheetInput>;
export const CollaboratorUncheckedCreateNestedManyWithoutSheetInputObjectZodSchema = makeSchema();
