import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CellFindManySchema as CellFindManySchema } from '../findManyCell.schema';
import { SheetArgsObjectSchema as SheetArgsObjectSchema } from './SheetArgs.schema';
import { RowCountOutputTypeArgsObjectSchema as RowCountOutputTypeArgsObjectSchema } from './RowCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  sheetId: z.boolean().optional(),
  index: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  cells: z.union([z.boolean(), z.lazy(() => CellFindManySchema)]).optional(),
  Sheet: z.union([z.boolean(), z.lazy(() => SheetArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => RowCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const RowSelectObjectSchema: z.ZodType<Prisma.RowSelect> = makeSchema() as unknown as z.ZodType<Prisma.RowSelect>;
export const RowSelectObjectZodSchema = makeSchema();
