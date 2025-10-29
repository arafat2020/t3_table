import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ColumnScalarWhereInputObjectSchema as ColumnScalarWhereInputObjectSchema } from './ColumnScalarWhereInput.schema';
import { ColumnUpdateManyMutationInputObjectSchema as ColumnUpdateManyMutationInputObjectSchema } from './ColumnUpdateManyMutationInput.schema';
import { ColumnUncheckedUpdateManyWithoutSheetInputObjectSchema as ColumnUncheckedUpdateManyWithoutSheetInputObjectSchema } from './ColumnUncheckedUpdateManyWithoutSheetInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ColumnScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ColumnUpdateManyMutationInputObjectSchema), z.lazy(() => ColumnUncheckedUpdateManyWithoutSheetInputObjectSchema)])
}).strict();
export const ColumnUpdateManyWithWhereWithoutSheetInputObjectSchema: z.ZodType<Prisma.ColumnUpdateManyWithWhereWithoutSheetInput> = makeSchema() as unknown as z.ZodType<Prisma.ColumnUpdateManyWithWhereWithoutSheetInput>;
export const ColumnUpdateManyWithWhereWithoutSheetInputObjectZodSchema = makeSchema();
