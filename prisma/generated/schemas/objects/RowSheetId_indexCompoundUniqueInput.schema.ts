import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  sheetId: z.string(),
  index: z.number().int()
}).strict();
export const RowSheetId_indexCompoundUniqueInputObjectSchema: z.ZodType<Prisma.RowSheetId_indexCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.RowSheetId_indexCompoundUniqueInput>;
export const RowSheetId_indexCompoundUniqueInputObjectZodSchema = makeSchema();
