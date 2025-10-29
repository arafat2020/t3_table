import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RowCreateWithoutSheetInputObjectSchema as RowCreateWithoutSheetInputObjectSchema } from './RowCreateWithoutSheetInput.schema';
import { RowUncheckedCreateWithoutSheetInputObjectSchema as RowUncheckedCreateWithoutSheetInputObjectSchema } from './RowUncheckedCreateWithoutSheetInput.schema';
import { RowCreateOrConnectWithoutSheetInputObjectSchema as RowCreateOrConnectWithoutSheetInputObjectSchema } from './RowCreateOrConnectWithoutSheetInput.schema';
import { RowUpsertWithWhereUniqueWithoutSheetInputObjectSchema as RowUpsertWithWhereUniqueWithoutSheetInputObjectSchema } from './RowUpsertWithWhereUniqueWithoutSheetInput.schema';
import { RowCreateManySheetInputEnvelopeObjectSchema as RowCreateManySheetInputEnvelopeObjectSchema } from './RowCreateManySheetInputEnvelope.schema';
import { RowWhereUniqueInputObjectSchema as RowWhereUniqueInputObjectSchema } from './RowWhereUniqueInput.schema';
import { RowUpdateWithWhereUniqueWithoutSheetInputObjectSchema as RowUpdateWithWhereUniqueWithoutSheetInputObjectSchema } from './RowUpdateWithWhereUniqueWithoutSheetInput.schema';
import { RowUpdateManyWithWhereWithoutSheetInputObjectSchema as RowUpdateManyWithWhereWithoutSheetInputObjectSchema } from './RowUpdateManyWithWhereWithoutSheetInput.schema';
import { RowScalarWhereInputObjectSchema as RowScalarWhereInputObjectSchema } from './RowScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RowCreateWithoutSheetInputObjectSchema), z.lazy(() => RowCreateWithoutSheetInputObjectSchema).array(), z.lazy(() => RowUncheckedCreateWithoutSheetInputObjectSchema), z.lazy(() => RowUncheckedCreateWithoutSheetInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RowCreateOrConnectWithoutSheetInputObjectSchema), z.lazy(() => RowCreateOrConnectWithoutSheetInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RowUpsertWithWhereUniqueWithoutSheetInputObjectSchema), z.lazy(() => RowUpsertWithWhereUniqueWithoutSheetInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RowCreateManySheetInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RowWhereUniqueInputObjectSchema), z.lazy(() => RowWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RowWhereUniqueInputObjectSchema), z.lazy(() => RowWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RowWhereUniqueInputObjectSchema), z.lazy(() => RowWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RowWhereUniqueInputObjectSchema), z.lazy(() => RowWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RowUpdateWithWhereUniqueWithoutSheetInputObjectSchema), z.lazy(() => RowUpdateWithWhereUniqueWithoutSheetInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RowUpdateManyWithWhereWithoutSheetInputObjectSchema), z.lazy(() => RowUpdateManyWithWhereWithoutSheetInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RowScalarWhereInputObjectSchema), z.lazy(() => RowScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RowUpdateManyWithoutSheetNestedInputObjectSchema: z.ZodType<Prisma.RowUpdateManyWithoutSheetNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RowUpdateManyWithoutSheetNestedInput>;
export const RowUpdateManyWithoutSheetNestedInputObjectZodSchema = makeSchema();
