import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RowCountOutputTypeSelectObjectSchema as RowCountOutputTypeSelectObjectSchema } from './RowCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RowCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const RowCountOutputTypeArgsObjectSchema = makeSchema();
export const RowCountOutputTypeArgsObjectZodSchema = makeSchema();
