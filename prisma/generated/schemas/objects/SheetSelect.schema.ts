import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectArgsObjectSchema as ProjectArgsObjectSchema } from './ProjectArgs.schema';
import { RowFindManySchema as RowFindManySchema } from '../findManyRow.schema';
import { ColumnFindManySchema as ColumnFindManySchema } from '../findManyColumn.schema';
import { SheetCountOutputTypeArgsObjectSchema as SheetCountOutputTypeArgsObjectSchema } from './SheetCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  ownerId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Project: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional(),
  projectId: z.boolean().optional(),
  rows: z.union([z.boolean(), z.lazy(() => RowFindManySchema)]).optional(),
  Column: z.union([z.boolean(), z.lazy(() => ColumnFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SheetCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SheetSelectObjectSchema: z.ZodType<Prisma.SheetSelect> = makeSchema() as unknown as z.ZodType<Prisma.SheetSelect>;
export const SheetSelectObjectZodSchema = makeSchema();
