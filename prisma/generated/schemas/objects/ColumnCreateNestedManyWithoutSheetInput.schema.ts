import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ColumnCreateWithoutSheetInputObjectSchema as ColumnCreateWithoutSheetInputObjectSchema } from './ColumnCreateWithoutSheetInput.schema';
import { ColumnUncheckedCreateWithoutSheetInputObjectSchema as ColumnUncheckedCreateWithoutSheetInputObjectSchema } from './ColumnUncheckedCreateWithoutSheetInput.schema';
import { ColumnCreateOrConnectWithoutSheetInputObjectSchema as ColumnCreateOrConnectWithoutSheetInputObjectSchema } from './ColumnCreateOrConnectWithoutSheetInput.schema';
import { ColumnCreateManySheetInputEnvelopeObjectSchema as ColumnCreateManySheetInputEnvelopeObjectSchema } from './ColumnCreateManySheetInputEnvelope.schema';
import { ColumnWhereUniqueInputObjectSchema as ColumnWhereUniqueInputObjectSchema } from './ColumnWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ColumnCreateWithoutSheetInputObjectSchema), z.lazy(() => ColumnCreateWithoutSheetInputObjectSchema).array(), z.lazy(() => ColumnUncheckedCreateWithoutSheetInputObjectSchema), z.lazy(() => ColumnUncheckedCreateWithoutSheetInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ColumnCreateOrConnectWithoutSheetInputObjectSchema), z.lazy(() => ColumnCreateOrConnectWithoutSheetInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ColumnCreateManySheetInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ColumnWhereUniqueInputObjectSchema), z.lazy(() => ColumnWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ColumnCreateNestedManyWithoutSheetInputObjectSchema: z.ZodType<Prisma.ColumnCreateNestedManyWithoutSheetInput> = makeSchema() as unknown as z.ZodType<Prisma.ColumnCreateNestedManyWithoutSheetInput>;
export const ColumnCreateNestedManyWithoutSheetInputObjectZodSchema = makeSchema();
