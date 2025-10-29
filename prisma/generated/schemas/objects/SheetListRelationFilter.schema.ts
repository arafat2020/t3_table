import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetWhereInputObjectSchema as SheetWhereInputObjectSchema } from './SheetWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => SheetWhereInputObjectSchema).optional(),
  some: z.lazy(() => SheetWhereInputObjectSchema).optional(),
  none: z.lazy(() => SheetWhereInputObjectSchema).optional()
}).strict();
export const SheetListRelationFilterObjectSchema: z.ZodType<Prisma.SheetListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SheetListRelationFilter>;
export const SheetListRelationFilterObjectZodSchema = makeSchema();
