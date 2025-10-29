import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RowUpdateWithoutCellsInputObjectSchema as RowUpdateWithoutCellsInputObjectSchema } from './RowUpdateWithoutCellsInput.schema';
import { RowUncheckedUpdateWithoutCellsInputObjectSchema as RowUncheckedUpdateWithoutCellsInputObjectSchema } from './RowUncheckedUpdateWithoutCellsInput.schema';
import { RowCreateWithoutCellsInputObjectSchema as RowCreateWithoutCellsInputObjectSchema } from './RowCreateWithoutCellsInput.schema';
import { RowUncheckedCreateWithoutCellsInputObjectSchema as RowUncheckedCreateWithoutCellsInputObjectSchema } from './RowUncheckedCreateWithoutCellsInput.schema';
import { RowWhereInputObjectSchema as RowWhereInputObjectSchema } from './RowWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => RowUpdateWithoutCellsInputObjectSchema), z.lazy(() => RowUncheckedUpdateWithoutCellsInputObjectSchema)]),
  create: z.union([z.lazy(() => RowCreateWithoutCellsInputObjectSchema), z.lazy(() => RowUncheckedCreateWithoutCellsInputObjectSchema)]),
  where: z.lazy(() => RowWhereInputObjectSchema).optional()
}).strict();
export const RowUpsertWithoutCellsInputObjectSchema: z.ZodType<Prisma.RowUpsertWithoutCellsInput> = makeSchema() as unknown as z.ZodType<Prisma.RowUpsertWithoutCellsInput>;
export const RowUpsertWithoutCellsInputObjectZodSchema = makeSchema();
