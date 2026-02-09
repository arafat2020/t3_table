import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectArgsObjectSchema as ProjectArgsObjectSchema } from './ProjectArgs.schema';
import { RowFindManySchema as RowFindManySchema } from '../findManyRow.schema';
import { ColumnFindManySchema as ColumnFindManySchema } from '../findManyColumn.schema';
import { CollaboratorFindManySchema as CollaboratorFindManySchema } from '../findManyCollaborator.schema';
import { SheetCountOutputTypeArgsObjectSchema as SheetCountOutputTypeArgsObjectSchema } from './SheetCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  Project: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional(),
  rows: z.union([z.boolean(), z.lazy(() => RowFindManySchema)]).optional(),
  Column: z.union([z.boolean(), z.lazy(() => ColumnFindManySchema)]).optional(),
  collaborators: z.union([z.boolean(), z.lazy(() => CollaboratorFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SheetCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SheetIncludeObjectSchema: z.ZodType<Prisma.SheetInclude> = makeSchema() as unknown as z.ZodType<Prisma.SheetInclude>;
export const SheetIncludeObjectZodSchema = makeSchema();
