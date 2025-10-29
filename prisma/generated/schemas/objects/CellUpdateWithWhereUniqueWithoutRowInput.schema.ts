import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CellWhereUniqueInputObjectSchema as CellWhereUniqueInputObjectSchema } from './CellWhereUniqueInput.schema';
import { CellUpdateWithoutRowInputObjectSchema as CellUpdateWithoutRowInputObjectSchema } from './CellUpdateWithoutRowInput.schema';
import { CellUncheckedUpdateWithoutRowInputObjectSchema as CellUncheckedUpdateWithoutRowInputObjectSchema } from './CellUncheckedUpdateWithoutRowInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CellWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CellUpdateWithoutRowInputObjectSchema), z.lazy(() => CellUncheckedUpdateWithoutRowInputObjectSchema)])
}).strict();
export const CellUpdateWithWhereUniqueWithoutRowInputObjectSchema: z.ZodType<Prisma.CellUpdateWithWhereUniqueWithoutRowInput> = makeSchema() as unknown as z.ZodType<Prisma.CellUpdateWithWhereUniqueWithoutRowInput>;
export const CellUpdateWithWhereUniqueWithoutRowInputObjectZodSchema = makeSchema();
