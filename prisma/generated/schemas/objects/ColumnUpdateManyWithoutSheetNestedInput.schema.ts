import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ColumnCreateWithoutSheetInputObjectSchema as ColumnCreateWithoutSheetInputObjectSchema } from './ColumnCreateWithoutSheetInput.schema';
import { ColumnUncheckedCreateWithoutSheetInputObjectSchema as ColumnUncheckedCreateWithoutSheetInputObjectSchema } from './ColumnUncheckedCreateWithoutSheetInput.schema';
import { ColumnCreateOrConnectWithoutSheetInputObjectSchema as ColumnCreateOrConnectWithoutSheetInputObjectSchema } from './ColumnCreateOrConnectWithoutSheetInput.schema';
import { ColumnUpsertWithWhereUniqueWithoutSheetInputObjectSchema as ColumnUpsertWithWhereUniqueWithoutSheetInputObjectSchema } from './ColumnUpsertWithWhereUniqueWithoutSheetInput.schema';
import { ColumnCreateManySheetInputEnvelopeObjectSchema as ColumnCreateManySheetInputEnvelopeObjectSchema } from './ColumnCreateManySheetInputEnvelope.schema';
import { ColumnWhereUniqueInputObjectSchema as ColumnWhereUniqueInputObjectSchema } from './ColumnWhereUniqueInput.schema';
import { ColumnUpdateWithWhereUniqueWithoutSheetInputObjectSchema as ColumnUpdateWithWhereUniqueWithoutSheetInputObjectSchema } from './ColumnUpdateWithWhereUniqueWithoutSheetInput.schema';
import { ColumnUpdateManyWithWhereWithoutSheetInputObjectSchema as ColumnUpdateManyWithWhereWithoutSheetInputObjectSchema } from './ColumnUpdateManyWithWhereWithoutSheetInput.schema';
import { ColumnScalarWhereInputObjectSchema as ColumnScalarWhereInputObjectSchema } from './ColumnScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ColumnCreateWithoutSheetInputObjectSchema), z.lazy(() => ColumnCreateWithoutSheetInputObjectSchema).array(), z.lazy(() => ColumnUncheckedCreateWithoutSheetInputObjectSchema), z.lazy(() => ColumnUncheckedCreateWithoutSheetInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ColumnCreateOrConnectWithoutSheetInputObjectSchema), z.lazy(() => ColumnCreateOrConnectWithoutSheetInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ColumnUpsertWithWhereUniqueWithoutSheetInputObjectSchema), z.lazy(() => ColumnUpsertWithWhereUniqueWithoutSheetInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ColumnCreateManySheetInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ColumnWhereUniqueInputObjectSchema), z.lazy(() => ColumnWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ColumnWhereUniqueInputObjectSchema), z.lazy(() => ColumnWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ColumnWhereUniqueInputObjectSchema), z.lazy(() => ColumnWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ColumnWhereUniqueInputObjectSchema), z.lazy(() => ColumnWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ColumnUpdateWithWhereUniqueWithoutSheetInputObjectSchema), z.lazy(() => ColumnUpdateWithWhereUniqueWithoutSheetInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ColumnUpdateManyWithWhereWithoutSheetInputObjectSchema), z.lazy(() => ColumnUpdateManyWithWhereWithoutSheetInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ColumnScalarWhereInputObjectSchema), z.lazy(() => ColumnScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ColumnUpdateManyWithoutSheetNestedInputObjectSchema: z.ZodType<Prisma.ColumnUpdateManyWithoutSheetNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ColumnUpdateManyWithoutSheetNestedInput>;
export const ColumnUpdateManyWithoutSheetNestedInputObjectZodSchema = makeSchema();
