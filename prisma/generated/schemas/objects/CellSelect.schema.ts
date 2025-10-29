import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RowArgsObjectSchema as RowArgsObjectSchema } from './RowArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  rowId: z.boolean().optional(),
  colIndex: z.boolean().optional(),
  value: z.boolean().optional(),
  type: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  row: z.union([z.boolean(), z.lazy(() => RowArgsObjectSchema)]).optional()
}).strict();
export const CellSelectObjectSchema: z.ZodType<Prisma.CellSelect> = makeSchema() as unknown as z.ZodType<Prisma.CellSelect>;
export const CellSelectObjectZodSchema = makeSchema();
