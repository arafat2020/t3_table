import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollaboratorCreateWithoutSheetInputObjectSchema as CollaboratorCreateWithoutSheetInputObjectSchema } from './CollaboratorCreateWithoutSheetInput.schema';
import { CollaboratorUncheckedCreateWithoutSheetInputObjectSchema as CollaboratorUncheckedCreateWithoutSheetInputObjectSchema } from './CollaboratorUncheckedCreateWithoutSheetInput.schema';
import { CollaboratorCreateOrConnectWithoutSheetInputObjectSchema as CollaboratorCreateOrConnectWithoutSheetInputObjectSchema } from './CollaboratorCreateOrConnectWithoutSheetInput.schema';
import { CollaboratorUpsertWithWhereUniqueWithoutSheetInputObjectSchema as CollaboratorUpsertWithWhereUniqueWithoutSheetInputObjectSchema } from './CollaboratorUpsertWithWhereUniqueWithoutSheetInput.schema';
import { CollaboratorCreateManySheetInputEnvelopeObjectSchema as CollaboratorCreateManySheetInputEnvelopeObjectSchema } from './CollaboratorCreateManySheetInputEnvelope.schema';
import { CollaboratorWhereUniqueInputObjectSchema as CollaboratorWhereUniqueInputObjectSchema } from './CollaboratorWhereUniqueInput.schema';
import { CollaboratorUpdateWithWhereUniqueWithoutSheetInputObjectSchema as CollaboratorUpdateWithWhereUniqueWithoutSheetInputObjectSchema } from './CollaboratorUpdateWithWhereUniqueWithoutSheetInput.schema';
import { CollaboratorUpdateManyWithWhereWithoutSheetInputObjectSchema as CollaboratorUpdateManyWithWhereWithoutSheetInputObjectSchema } from './CollaboratorUpdateManyWithWhereWithoutSheetInput.schema';
import { CollaboratorScalarWhereInputObjectSchema as CollaboratorScalarWhereInputObjectSchema } from './CollaboratorScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CollaboratorCreateWithoutSheetInputObjectSchema), z.lazy(() => CollaboratorCreateWithoutSheetInputObjectSchema).array(), z.lazy(() => CollaboratorUncheckedCreateWithoutSheetInputObjectSchema), z.lazy(() => CollaboratorUncheckedCreateWithoutSheetInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CollaboratorCreateOrConnectWithoutSheetInputObjectSchema), z.lazy(() => CollaboratorCreateOrConnectWithoutSheetInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CollaboratorUpsertWithWhereUniqueWithoutSheetInputObjectSchema), z.lazy(() => CollaboratorUpsertWithWhereUniqueWithoutSheetInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CollaboratorCreateManySheetInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CollaboratorWhereUniqueInputObjectSchema), z.lazy(() => CollaboratorWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CollaboratorWhereUniqueInputObjectSchema), z.lazy(() => CollaboratorWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CollaboratorWhereUniqueInputObjectSchema), z.lazy(() => CollaboratorWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CollaboratorWhereUniqueInputObjectSchema), z.lazy(() => CollaboratorWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CollaboratorUpdateWithWhereUniqueWithoutSheetInputObjectSchema), z.lazy(() => CollaboratorUpdateWithWhereUniqueWithoutSheetInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CollaboratorUpdateManyWithWhereWithoutSheetInputObjectSchema), z.lazy(() => CollaboratorUpdateManyWithWhereWithoutSheetInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CollaboratorScalarWhereInputObjectSchema), z.lazy(() => CollaboratorScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CollaboratorUpdateManyWithoutSheetNestedInputObjectSchema: z.ZodType<Prisma.CollaboratorUpdateManyWithoutSheetNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorUpdateManyWithoutSheetNestedInput>;
export const CollaboratorUpdateManyWithoutSheetNestedInputObjectZodSchema = makeSchema();
