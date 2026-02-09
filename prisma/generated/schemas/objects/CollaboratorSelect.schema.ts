import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetArgsObjectSchema as SheetArgsObjectSchema } from './SheetArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  sheetId: z.boolean().optional(),
  userId: z.boolean().optional(),
  role: z.boolean().optional(),
  sheet: z.union([z.boolean(), z.lazy(() => SheetArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const CollaboratorSelectObjectSchema: z.ZodType<Prisma.CollaboratorSelect> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorSelect>;
export const CollaboratorSelectObjectZodSchema = makeSchema();
