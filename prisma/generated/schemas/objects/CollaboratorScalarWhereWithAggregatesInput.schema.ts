import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const collaboratorscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CollaboratorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CollaboratorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CollaboratorScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CollaboratorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CollaboratorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  sheetId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const CollaboratorScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CollaboratorScalarWhereWithAggregatesInput> = collaboratorscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CollaboratorScalarWhereWithAggregatesInput>;
export const CollaboratorScalarWhereWithAggregatesInputObjectZodSchema = collaboratorscalarwherewithaggregatesinputSchema;
