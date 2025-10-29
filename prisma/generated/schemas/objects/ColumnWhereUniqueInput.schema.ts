import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ColumnSheetIdIndexCompoundUniqueInputObjectSchema as ColumnSheetIdIndexCompoundUniqueInputObjectSchema } from './ColumnSheetIdIndexCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  sheetId_index: z.lazy(() => ColumnSheetIdIndexCompoundUniqueInputObjectSchema).optional()
}).strict();
export const ColumnWhereUniqueInputObjectSchema: z.ZodType<Prisma.ColumnWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ColumnWhereUniqueInput>;
export const ColumnWhereUniqueInputObjectZodSchema = makeSchema();
