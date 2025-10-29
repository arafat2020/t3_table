import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CellWhereUniqueInputObjectSchema as CellWhereUniqueInputObjectSchema } from './CellWhereUniqueInput.schema';
import { CellUpdateWithoutRowInputObjectSchema as CellUpdateWithoutRowInputObjectSchema } from './CellUpdateWithoutRowInput.schema';
import { CellUncheckedUpdateWithoutRowInputObjectSchema as CellUncheckedUpdateWithoutRowInputObjectSchema } from './CellUncheckedUpdateWithoutRowInput.schema';
import { CellCreateWithoutRowInputObjectSchema as CellCreateWithoutRowInputObjectSchema } from './CellCreateWithoutRowInput.schema';
import { CellUncheckedCreateWithoutRowInputObjectSchema as CellUncheckedCreateWithoutRowInputObjectSchema } from './CellUncheckedCreateWithoutRowInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CellWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CellUpdateWithoutRowInputObjectSchema), z.lazy(() => CellUncheckedUpdateWithoutRowInputObjectSchema)]),
  create: z.union([z.lazy(() => CellCreateWithoutRowInputObjectSchema), z.lazy(() => CellUncheckedCreateWithoutRowInputObjectSchema)])
}).strict();
export const CellUpsertWithWhereUniqueWithoutRowInputObjectSchema: z.ZodType<Prisma.CellUpsertWithWhereUniqueWithoutRowInput> = makeSchema() as unknown as z.ZodType<Prisma.CellUpsertWithWhereUniqueWithoutRowInput>;
export const CellUpsertWithWhereUniqueWithoutRowInputObjectZodSchema = makeSchema();
