import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetArgsObjectSchema as SheetArgsObjectSchema } from './SheetArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  sheet: z.union([z.boolean(), z.lazy(() => SheetArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const CollaboratorIncludeObjectSchema: z.ZodType<Prisma.CollaboratorInclude> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorInclude>;
export const CollaboratorIncludeObjectZodSchema = makeSchema();
