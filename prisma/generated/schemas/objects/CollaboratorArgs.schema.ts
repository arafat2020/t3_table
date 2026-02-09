import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollaboratorSelectObjectSchema as CollaboratorSelectObjectSchema } from './CollaboratorSelect.schema';
import { CollaboratorIncludeObjectSchema as CollaboratorIncludeObjectSchema } from './CollaboratorInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CollaboratorSelectObjectSchema).optional(),
  include: z.lazy(() => CollaboratorIncludeObjectSchema).optional()
}).strict();
export const CollaboratorArgsObjectSchema = makeSchema();
export const CollaboratorArgsObjectZodSchema = makeSchema();
