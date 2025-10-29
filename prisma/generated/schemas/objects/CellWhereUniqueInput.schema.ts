import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CellRowIdColIndexCompoundUniqueInputObjectSchema as CellRowIdColIndexCompoundUniqueInputObjectSchema } from './CellRowIdColIndexCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  rowId_colIndex: z.lazy(() => CellRowIdColIndexCompoundUniqueInputObjectSchema).optional()
}).strict();
export const CellWhereUniqueInputObjectSchema: z.ZodType<Prisma.CellWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CellWhereUniqueInput>;
export const CellWhereUniqueInputObjectZodSchema = makeSchema();
