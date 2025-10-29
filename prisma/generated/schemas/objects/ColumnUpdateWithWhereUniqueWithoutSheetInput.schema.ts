import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ColumnWhereUniqueInputObjectSchema as ColumnWhereUniqueInputObjectSchema } from './ColumnWhereUniqueInput.schema';
import { ColumnUpdateWithoutSheetInputObjectSchema as ColumnUpdateWithoutSheetInputObjectSchema } from './ColumnUpdateWithoutSheetInput.schema';
import { ColumnUncheckedUpdateWithoutSheetInputObjectSchema as ColumnUncheckedUpdateWithoutSheetInputObjectSchema } from './ColumnUncheckedUpdateWithoutSheetInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ColumnWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ColumnUpdateWithoutSheetInputObjectSchema), z.lazy(() => ColumnUncheckedUpdateWithoutSheetInputObjectSchema)])
}).strict();
export const ColumnUpdateWithWhereUniqueWithoutSheetInputObjectSchema: z.ZodType<Prisma.ColumnUpdateWithWhereUniqueWithoutSheetInput> = makeSchema() as unknown as z.ZodType<Prisma.ColumnUpdateWithWhereUniqueWithoutSheetInput>;
export const ColumnUpdateWithWhereUniqueWithoutSheetInputObjectZodSchema = makeSchema();
