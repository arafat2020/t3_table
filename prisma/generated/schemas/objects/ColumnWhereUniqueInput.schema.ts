import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ColumnSheetId_indexCompoundUniqueInputObjectSchema as ColumnSheetId_indexCompoundUniqueInputObjectSchema } from './ColumnSheetId_indexCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  sheetId_index: z.lazy(() => ColumnSheetId_indexCompoundUniqueInputObjectSchema).optional()
}).strict();
export const ColumnWhereUniqueInputObjectSchema: z.ZodType<Prisma.ColumnWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ColumnWhereUniqueInput>;
export const ColumnWhereUniqueInputObjectZodSchema = makeSchema();
