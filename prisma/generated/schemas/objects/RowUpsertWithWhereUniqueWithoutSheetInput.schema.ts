import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RowWhereUniqueInputObjectSchema as RowWhereUniqueInputObjectSchema } from './RowWhereUniqueInput.schema';
import { RowUpdateWithoutSheetInputObjectSchema as RowUpdateWithoutSheetInputObjectSchema } from './RowUpdateWithoutSheetInput.schema';
import { RowUncheckedUpdateWithoutSheetInputObjectSchema as RowUncheckedUpdateWithoutSheetInputObjectSchema } from './RowUncheckedUpdateWithoutSheetInput.schema';
import { RowCreateWithoutSheetInputObjectSchema as RowCreateWithoutSheetInputObjectSchema } from './RowCreateWithoutSheetInput.schema';
import { RowUncheckedCreateWithoutSheetInputObjectSchema as RowUncheckedCreateWithoutSheetInputObjectSchema } from './RowUncheckedCreateWithoutSheetInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RowWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RowUpdateWithoutSheetInputObjectSchema), z.lazy(() => RowUncheckedUpdateWithoutSheetInputObjectSchema)]),
  create: z.union([z.lazy(() => RowCreateWithoutSheetInputObjectSchema), z.lazy(() => RowUncheckedCreateWithoutSheetInputObjectSchema)])
}).strict();
export const RowUpsertWithWhereUniqueWithoutSheetInputObjectSchema: z.ZodType<Prisma.RowUpsertWithWhereUniqueWithoutSheetInput> = makeSchema() as unknown as z.ZodType<Prisma.RowUpsertWithWhereUniqueWithoutSheetInput>;
export const RowUpsertWithWhereUniqueWithoutSheetInputObjectZodSchema = makeSchema();
