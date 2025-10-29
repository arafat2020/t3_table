import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RowWhereInputObjectSchema as RowWhereInputObjectSchema } from './RowWhereInput.schema';
import { RowUpdateWithoutCellsInputObjectSchema as RowUpdateWithoutCellsInputObjectSchema } from './RowUpdateWithoutCellsInput.schema';
import { RowUncheckedUpdateWithoutCellsInputObjectSchema as RowUncheckedUpdateWithoutCellsInputObjectSchema } from './RowUncheckedUpdateWithoutCellsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RowWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => RowUpdateWithoutCellsInputObjectSchema), z.lazy(() => RowUncheckedUpdateWithoutCellsInputObjectSchema)])
}).strict();
export const RowUpdateToOneWithWhereWithoutCellsInputObjectSchema: z.ZodType<Prisma.RowUpdateToOneWithWhereWithoutCellsInput> = makeSchema() as unknown as z.ZodType<Prisma.RowUpdateToOneWithWhereWithoutCellsInput>;
export const RowUpdateToOneWithWhereWithoutCellsInputObjectZodSchema = makeSchema();
