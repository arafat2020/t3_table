import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { ProjectCreateNestedManyWithoutUserInputObjectSchema as ProjectCreateNestedManyWithoutUserInputObjectSchema } from './ProjectCreateNestedManyWithoutUserInput.schema';
import { CollaboratorCreateNestedManyWithoutUserInputObjectSchema as CollaboratorCreateNestedManyWithoutUserInputObjectSchema } from './CollaboratorCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  Projects: z.lazy(() => ProjectCreateNestedManyWithoutUserInputObjectSchema).optional(),
  sharedSheets: z.lazy(() => CollaboratorCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutAccountsInput>;
export const UserCreateWithoutAccountsInputObjectZodSchema = makeSchema();
