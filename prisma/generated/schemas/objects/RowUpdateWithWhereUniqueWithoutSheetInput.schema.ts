import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RowWhereUniqueInputObjectSchema as RowWhereUniqueInputObjectSchema } from './RowWhereUniqueInput.schema';
import { RowUpdateWithoutSheetInputObjectSchema as RowUpdateWithoutSheetInputObjectSchema } from './RowUpdateWithoutSheetInput.schema';
import { RowUncheckedUpdateWithoutSheetInputObjectSchema as RowUncheckedUpdateWithoutSheetInputObjectSchema } from './RowUncheckedUpdateWithoutSheetInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RowWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RowUpdateWithoutSheetInputObjectSchema), z.lazy(() => RowUncheckedUpdateWithoutSheetInputObjectSchema)])
}).strict();
export const RowUpdateWithWhereUniqueWithoutSheetInputObjectSchema: z.ZodType<Prisma.RowUpdateWithWhereUniqueWithoutSheetInput> = makeSchema() as unknown as z.ZodType<Prisma.RowUpdateWithWhereUniqueWithoutSheetInput>;
export const RowUpdateWithWhereUniqueWithoutSheetInputObjectZodSchema = makeSchema();
