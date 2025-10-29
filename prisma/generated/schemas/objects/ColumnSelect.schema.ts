import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetArgsObjectSchema as SheetArgsObjectSchema } from './SheetArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  sheetId: z.boolean().optional(),
  index: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  sheet: z.union([z.boolean(), z.lazy(() => SheetArgsObjectSchema)]).optional()
}).strict();
export const ColumnSelectObjectSchema: z.ZodType<Prisma.ColumnSelect> = makeSchema() as unknown as z.ZodType<Prisma.ColumnSelect>;
export const ColumnSelectObjectZodSchema = makeSchema();
