import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RowSheetId_indexCompoundUniqueInputObjectSchema as RowSheetId_indexCompoundUniqueInputObjectSchema } from './RowSheetId_indexCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  sheetId_index: z.lazy(() => RowSheetId_indexCompoundUniqueInputObjectSchema).optional()
}).strict();
export const RowWhereUniqueInputObjectSchema: z.ZodType<Prisma.RowWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.RowWhereUniqueInput>;
export const RowWhereUniqueInputObjectZodSchema = makeSchema();
