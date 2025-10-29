import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CellWhereUniqueInputObjectSchema as CellWhereUniqueInputObjectSchema } from './CellWhereUniqueInput.schema';
import { CellCreateWithoutRowInputObjectSchema as CellCreateWithoutRowInputObjectSchema } from './CellCreateWithoutRowInput.schema';
import { CellUncheckedCreateWithoutRowInputObjectSchema as CellUncheckedCreateWithoutRowInputObjectSchema } from './CellUncheckedCreateWithoutRowInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CellWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CellCreateWithoutRowInputObjectSchema), z.lazy(() => CellUncheckedCreateWithoutRowInputObjectSchema)])
}).strict();
export const CellCreateOrConnectWithoutRowInputObjectSchema: z.ZodType<Prisma.CellCreateOrConnectWithoutRowInput> = makeSchema() as unknown as z.ZodType<Prisma.CellCreateOrConnectWithoutRowInput>;
export const CellCreateOrConnectWithoutRowInputObjectZodSchema = makeSchema();
