import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RowCreateWithoutSheetInputObjectSchema as RowCreateWithoutSheetInputObjectSchema } from './RowCreateWithoutSheetInput.schema';
import { RowUncheckedCreateWithoutSheetInputObjectSchema as RowUncheckedCreateWithoutSheetInputObjectSchema } from './RowUncheckedCreateWithoutSheetInput.schema';
import { RowCreateOrConnectWithoutSheetInputObjectSchema as RowCreateOrConnectWithoutSheetInputObjectSchema } from './RowCreateOrConnectWithoutSheetInput.schema';
import { RowCreateManySheetInputEnvelopeObjectSchema as RowCreateManySheetInputEnvelopeObjectSchema } from './RowCreateManySheetInputEnvelope.schema';
import { RowWhereUniqueInputObjectSchema as RowWhereUniqueInputObjectSchema } from './RowWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RowCreateWithoutSheetInputObjectSchema), z.lazy(() => RowCreateWithoutSheetInputObjectSchema).array(), z.lazy(() => RowUncheckedCreateWithoutSheetInputObjectSchema), z.lazy(() => RowUncheckedCreateWithoutSheetInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RowCreateOrConnectWithoutSheetInputObjectSchema), z.lazy(() => RowCreateOrConnectWithoutSheetInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RowCreateManySheetInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RowWhereUniqueInputObjectSchema), z.lazy(() => RowWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RowCreateNestedManyWithoutSheetInputObjectSchema: z.ZodType<Prisma.RowCreateNestedManyWithoutSheetInput> = makeSchema() as unknown as z.ZodType<Prisma.RowCreateNestedManyWithoutSheetInput>;
export const RowCreateNestedManyWithoutSheetInputObjectZodSchema = makeSchema();
