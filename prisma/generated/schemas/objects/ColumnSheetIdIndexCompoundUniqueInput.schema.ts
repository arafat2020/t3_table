import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  sheetId: z.string(),
  index: z.number().int()
}).strict();
export const ColumnSheetIdIndexCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ColumnSheetIdIndexCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ColumnSheetIdIndexCompoundUniqueInput>;
export const ColumnSheetIdIndexCompoundUniqueInputObjectZodSchema = makeSchema();
