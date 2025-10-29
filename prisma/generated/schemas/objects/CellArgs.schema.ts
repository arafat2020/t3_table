import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CellSelectObjectSchema as CellSelectObjectSchema } from './CellSelect.schema';
import { CellIncludeObjectSchema as CellIncludeObjectSchema } from './CellInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CellSelectObjectSchema).optional(),
  include: z.lazy(() => CellIncludeObjectSchema).optional()
}).strict();
export const CellArgsObjectSchema = makeSchema();
export const CellArgsObjectZodSchema = makeSchema();
