import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CellScalarWhereInputObjectSchema as CellScalarWhereInputObjectSchema } from './CellScalarWhereInput.schema';
import { CellUpdateManyMutationInputObjectSchema as CellUpdateManyMutationInputObjectSchema } from './CellUpdateManyMutationInput.schema';
import { CellUncheckedUpdateManyWithoutRowInputObjectSchema as CellUncheckedUpdateManyWithoutRowInputObjectSchema } from './CellUncheckedUpdateManyWithoutRowInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CellScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CellUpdateManyMutationInputObjectSchema), z.lazy(() => CellUncheckedUpdateManyWithoutRowInputObjectSchema)])
}).strict();
export const CellUpdateManyWithWhereWithoutRowInputObjectSchema: z.ZodType<Prisma.CellUpdateManyWithWhereWithoutRowInput> = makeSchema() as unknown as z.ZodType<Prisma.CellUpdateManyWithWhereWithoutRowInput>;
export const CellUpdateManyWithWhereWithoutRowInputObjectZodSchema = makeSchema();
