import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RowCreateWithoutCellsInputObjectSchema as RowCreateWithoutCellsInputObjectSchema } from './RowCreateWithoutCellsInput.schema';
import { RowUncheckedCreateWithoutCellsInputObjectSchema as RowUncheckedCreateWithoutCellsInputObjectSchema } from './RowUncheckedCreateWithoutCellsInput.schema';
import { RowCreateOrConnectWithoutCellsInputObjectSchema as RowCreateOrConnectWithoutCellsInputObjectSchema } from './RowCreateOrConnectWithoutCellsInput.schema';
import { RowUpsertWithoutCellsInputObjectSchema as RowUpsertWithoutCellsInputObjectSchema } from './RowUpsertWithoutCellsInput.schema';
import { RowWhereUniqueInputObjectSchema as RowWhereUniqueInputObjectSchema } from './RowWhereUniqueInput.schema';
import { RowUpdateToOneWithWhereWithoutCellsInputObjectSchema as RowUpdateToOneWithWhereWithoutCellsInputObjectSchema } from './RowUpdateToOneWithWhereWithoutCellsInput.schema';
import { RowUpdateWithoutCellsInputObjectSchema as RowUpdateWithoutCellsInputObjectSchema } from './RowUpdateWithoutCellsInput.schema';
import { RowUncheckedUpdateWithoutCellsInputObjectSchema as RowUncheckedUpdateWithoutCellsInputObjectSchema } from './RowUncheckedUpdateWithoutCellsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RowCreateWithoutCellsInputObjectSchema), z.lazy(() => RowUncheckedCreateWithoutCellsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RowCreateOrConnectWithoutCellsInputObjectSchema).optional(),
  upsert: z.lazy(() => RowUpsertWithoutCellsInputObjectSchema).optional(),
  connect: z.lazy(() => RowWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => RowUpdateToOneWithWhereWithoutCellsInputObjectSchema), z.lazy(() => RowUpdateWithoutCellsInputObjectSchema), z.lazy(() => RowUncheckedUpdateWithoutCellsInputObjectSchema)]).optional()
}).strict();
export const RowUpdateOneRequiredWithoutCellsNestedInputObjectSchema: z.ZodType<Prisma.RowUpdateOneRequiredWithoutCellsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RowUpdateOneRequiredWithoutCellsNestedInput>;
export const RowUpdateOneRequiredWithoutCellsNestedInputObjectZodSchema = makeSchema();
