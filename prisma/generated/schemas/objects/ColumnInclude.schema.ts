import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetArgsObjectSchema as SheetArgsObjectSchema } from './SheetArgs.schema'

const makeSchema = () => z.object({
  sheet: z.union([z.boolean(), z.lazy(() => SheetArgsObjectSchema)]).optional()
}).strict();
export const ColumnIncludeObjectSchema: z.ZodType<Prisma.ColumnInclude> = makeSchema() as unknown as z.ZodType<Prisma.ColumnInclude>;
export const ColumnIncludeObjectZodSchema = makeSchema();
