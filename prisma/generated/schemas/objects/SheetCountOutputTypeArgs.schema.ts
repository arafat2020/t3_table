import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetCountOutputTypeSelectObjectSchema as SheetCountOutputTypeSelectObjectSchema } from './SheetCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SheetCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const SheetCountOutputTypeArgsObjectSchema = makeSchema();
export const SheetCountOutputTypeArgsObjectZodSchema = makeSchema();
