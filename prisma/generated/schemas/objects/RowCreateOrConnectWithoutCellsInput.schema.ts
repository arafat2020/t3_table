import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RowWhereUniqueInputObjectSchema as RowWhereUniqueInputObjectSchema } from './RowWhereUniqueInput.schema';
import { RowCreateWithoutCellsInputObjectSchema as RowCreateWithoutCellsInputObjectSchema } from './RowCreateWithoutCellsInput.schema';
import { RowUncheckedCreateWithoutCellsInputObjectSchema as RowUncheckedCreateWithoutCellsInputObjectSchema } from './RowUncheckedCreateWithoutCellsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RowWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RowCreateWithoutCellsInputObjectSchema), z.lazy(() => RowUncheckedCreateWithoutCellsInputObjectSchema)])
}).strict();
export const RowCreateOrConnectWithoutCellsInputObjectSchema: z.ZodType<Prisma.RowCreateOrConnectWithoutCellsInput> = makeSchema() as unknown as z.ZodType<Prisma.RowCreateOrConnectWithoutCellsInput>;
export const RowCreateOrConnectWithoutCellsInputObjectZodSchema = makeSchema();
