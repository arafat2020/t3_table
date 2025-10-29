import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CellWhereInputObjectSchema as CellWhereInputObjectSchema } from './CellWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CellWhereInputObjectSchema).optional(),
  some: z.lazy(() => CellWhereInputObjectSchema).optional(),
  none: z.lazy(() => CellWhereInputObjectSchema).optional()
}).strict();
export const CellListRelationFilterObjectSchema: z.ZodType<Prisma.CellListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CellListRelationFilter>;
export const CellListRelationFilterObjectZodSchema = makeSchema();
