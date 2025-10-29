import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetSelectObjectSchema as SheetSelectObjectSchema } from './SheetSelect.schema';
import { SheetIncludeObjectSchema as SheetIncludeObjectSchema } from './SheetInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SheetSelectObjectSchema).optional(),
  include: z.lazy(() => SheetIncludeObjectSchema).optional()
}).strict();
export const SheetArgsObjectSchema = makeSchema();
export const SheetArgsObjectZodSchema = makeSchema();
