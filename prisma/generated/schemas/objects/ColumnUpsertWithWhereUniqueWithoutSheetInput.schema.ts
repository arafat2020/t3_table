import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ColumnWhereUniqueInputObjectSchema as ColumnWhereUniqueInputObjectSchema } from './ColumnWhereUniqueInput.schema';
import { ColumnUpdateWithoutSheetInputObjectSchema as ColumnUpdateWithoutSheetInputObjectSchema } from './ColumnUpdateWithoutSheetInput.schema';
import { ColumnUncheckedUpdateWithoutSheetInputObjectSchema as ColumnUncheckedUpdateWithoutSheetInputObjectSchema } from './ColumnUncheckedUpdateWithoutSheetInput.schema';
import { ColumnCreateWithoutSheetInputObjectSchema as ColumnCreateWithoutSheetInputObjectSchema } from './ColumnCreateWithoutSheetInput.schema';
import { ColumnUncheckedCreateWithoutSheetInputObjectSchema as ColumnUncheckedCreateWithoutSheetInputObjectSchema } from './ColumnUncheckedCreateWithoutSheetInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ColumnWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ColumnUpdateWithoutSheetInputObjectSchema), z.lazy(() => ColumnUncheckedUpdateWithoutSheetInputObjectSchema)]),
  create: z.union([z.lazy(() => ColumnCreateWithoutSheetInputObjectSchema), z.lazy(() => ColumnUncheckedCreateWithoutSheetInputObjectSchema)])
}).strict();
export const ColumnUpsertWithWhereUniqueWithoutSheetInputObjectSchema: z.ZodType<Prisma.ColumnUpsertWithWhereUniqueWithoutSheetInput> = makeSchema() as unknown as z.ZodType<Prisma.ColumnUpsertWithWhereUniqueWithoutSheetInput>;
export const ColumnUpsertWithWhereUniqueWithoutSheetInputObjectZodSchema = makeSchema();
