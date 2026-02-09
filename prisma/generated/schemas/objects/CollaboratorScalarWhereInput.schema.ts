import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const collaboratorscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CollaboratorScalarWhereInputObjectSchema), z.lazy(() => CollaboratorScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CollaboratorScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CollaboratorScalarWhereInputObjectSchema), z.lazy(() => CollaboratorScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  sheetId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const CollaboratorScalarWhereInputObjectSchema: z.ZodType<Prisma.CollaboratorScalarWhereInput> = collaboratorscalarwhereinputSchema as unknown as z.ZodType<Prisma.CollaboratorScalarWhereInput>;
export const CollaboratorScalarWhereInputObjectZodSchema = collaboratorscalarwhereinputSchema;
