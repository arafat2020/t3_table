import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  sheetId: z.string(),
  index: z.number().int()
}).strict();
export const ColumnSheetId_indexCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ColumnSheetId_indexCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ColumnSheetId_indexCompoundUniqueInput>;
export const ColumnSheetId_indexCompoundUniqueInputObjectZodSchema = makeSchema();
