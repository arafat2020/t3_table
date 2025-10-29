import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RowArgsObjectSchema as RowArgsObjectSchema } from './RowArgs.schema'

const makeSchema = () => z.object({
  row: z.union([z.boolean(), z.lazy(() => RowArgsObjectSchema)]).optional()
}).strict();
export const CellIncludeObjectSchema: z.ZodType<Prisma.CellInclude> = makeSchema() as unknown as z.ZodType<Prisma.CellInclude>;
export const CellIncludeObjectZodSchema = makeSchema();
