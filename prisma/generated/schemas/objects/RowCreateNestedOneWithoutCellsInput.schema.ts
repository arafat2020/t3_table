import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RowCreateWithoutCellsInputObjectSchema as RowCreateWithoutCellsInputObjectSchema } from './RowCreateWithoutCellsInput.schema';
import { RowUncheckedCreateWithoutCellsInputObjectSchema as RowUncheckedCreateWithoutCellsInputObjectSchema } from './RowUncheckedCreateWithoutCellsInput.schema';
import { RowCreateOrConnectWithoutCellsInputObjectSchema as RowCreateOrConnectWithoutCellsInputObjectSchema } from './RowCreateOrConnectWithoutCellsInput.schema';
import { RowWhereUniqueInputObjectSchema as RowWhereUniqueInputObjectSchema } from './RowWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RowCreateWithoutCellsInputObjectSchema), z.lazy(() => RowUncheckedCreateWithoutCellsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RowCreateOrConnectWithoutCellsInputObjectSchema).optional(),
  connect: z.lazy(() => RowWhereUniqueInputObjectSchema).optional()
}).strict();
export const RowCreateNestedOneWithoutCellsInputObjectSchema: z.ZodType<Prisma.RowCreateNestedOneWithoutCellsInput> = makeSchema() as unknown as z.ZodType<Prisma.RowCreateNestedOneWithoutCellsInput>;
export const RowCreateNestedOneWithoutCellsInputObjectZodSchema = makeSchema();
