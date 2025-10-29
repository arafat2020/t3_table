import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RowScalarWhereInputObjectSchema as RowScalarWhereInputObjectSchema } from './RowScalarWhereInput.schema';
import { RowUpdateManyMutationInputObjectSchema as RowUpdateManyMutationInputObjectSchema } from './RowUpdateManyMutationInput.schema';
import { RowUncheckedUpdateManyWithoutSheetInputObjectSchema as RowUncheckedUpdateManyWithoutSheetInputObjectSchema } from './RowUncheckedUpdateManyWithoutSheetInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RowScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RowUpdateManyMutationInputObjectSchema), z.lazy(() => RowUncheckedUpdateManyWithoutSheetInputObjectSchema)])
}).strict();
export const RowUpdateManyWithWhereWithoutSheetInputObjectSchema: z.ZodType<Prisma.RowUpdateManyWithWhereWithoutSheetInput> = makeSchema() as unknown as z.ZodType<Prisma.RowUpdateManyWithWhereWithoutSheetInput>;
export const RowUpdateManyWithWhereWithoutSheetInputObjectZodSchema = makeSchema();
