import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { SheetScalarRelationFilterObjectSchema as SheetScalarRelationFilterObjectSchema } from './SheetScalarRelationFilter.schema';
import { SheetWhereInputObjectSchema as SheetWhereInputObjectSchema } from './SheetWhereInput.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const collaboratorwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CollaboratorWhereInputObjectSchema), z.lazy(() => CollaboratorWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CollaboratorWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CollaboratorWhereInputObjectSchema), z.lazy(() => CollaboratorWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  sheetId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  sheet: z.union([z.lazy(() => SheetScalarRelationFilterObjectSchema), z.lazy(() => SheetWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const CollaboratorWhereInputObjectSchema: z.ZodType<Prisma.CollaboratorWhereInput> = collaboratorwhereinputSchema as unknown as z.ZodType<Prisma.CollaboratorWhereInput>;
export const CollaboratorWhereInputObjectZodSchema = collaboratorwhereinputSchema;
