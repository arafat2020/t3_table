import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CellFindManySchema as CellFindManySchema } from '../findManyCell.schema';
import { SheetArgsObjectSchema as SheetArgsObjectSchema } from './SheetArgs.schema';
import { RowCountOutputTypeArgsObjectSchema as RowCountOutputTypeArgsObjectSchema } from './RowCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  cells: z.union([z.boolean(), z.lazy(() => CellFindManySchema)]).optional(),
  Sheet: z.union([z.boolean(), z.lazy(() => SheetArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => RowCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const RowIncludeObjectSchema: z.ZodType<Prisma.RowInclude> = makeSchema() as unknown as z.ZodType<Prisma.RowInclude>;
export const RowIncludeObjectZodSchema = makeSchema();
