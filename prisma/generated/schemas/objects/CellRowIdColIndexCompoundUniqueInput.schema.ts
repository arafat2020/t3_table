import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  rowId: z.string(),
  colIndex: z.number().int()
}).strict();
export const CellRowIdColIndexCompoundUniqueInputObjectSchema: z.ZodType<Prisma.CellRowIdColIndexCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CellRowIdColIndexCompoundUniqueInput>;
export const CellRowIdColIndexCompoundUniqueInputObjectZodSchema = makeSchema();
