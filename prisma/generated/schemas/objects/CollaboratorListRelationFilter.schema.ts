import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollaboratorWhereInputObjectSchema as CollaboratorWhereInputObjectSchema } from './CollaboratorWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CollaboratorWhereInputObjectSchema).optional(),
  some: z.lazy(() => CollaboratorWhereInputObjectSchema).optional(),
  none: z.lazy(() => CollaboratorWhereInputObjectSchema).optional()
}).strict();
export const CollaboratorListRelationFilterObjectSchema: z.ZodType<Prisma.CollaboratorListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorListRelationFilter>;
export const CollaboratorListRelationFilterObjectZodSchema = makeSchema();
