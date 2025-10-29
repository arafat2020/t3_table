import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetWhereInputObjectSchema as SheetWhereInputObjectSchema } from './SheetWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => SheetWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => SheetWhereInputObjectSchema).optional()
}).strict();
export const SheetScalarRelationFilterObjectSchema: z.ZodType<Prisma.SheetScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SheetScalarRelationFilter>;
export const SheetScalarRelationFilterObjectZodSchema = makeSchema();
