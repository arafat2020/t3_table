import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutSharedSheetsInputObjectSchema as UserCreateNestedOneWithoutSharedSheetsInputObjectSchema } from './UserCreateNestedOneWithoutSharedSheetsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: z.string().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutSharedSheetsInputObjectSchema)
}).strict();
export const CollaboratorCreateWithoutSheetInputObjectSchema: z.ZodType<Prisma.CollaboratorCreateWithoutSheetInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorCreateWithoutSheetInput>;
export const CollaboratorCreateWithoutSheetInputObjectZodSchema = makeSchema();
