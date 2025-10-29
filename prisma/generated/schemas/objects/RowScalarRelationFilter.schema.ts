import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RowWhereInputObjectSchema as RowWhereInputObjectSchema } from './RowWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => RowWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => RowWhereInputObjectSchema).optional()
}).strict();
export const RowScalarRelationFilterObjectSchema: z.ZodType<Prisma.RowScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RowScalarRelationFilter>;
export const RowScalarRelationFilterObjectZodSchema = makeSchema();
