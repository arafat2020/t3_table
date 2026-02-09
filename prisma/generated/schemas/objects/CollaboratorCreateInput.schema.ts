import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetCreateNestedOneWithoutCollaboratorsInputObjectSchema as SheetCreateNestedOneWithoutCollaboratorsInputObjectSchema } from './SheetCreateNestedOneWithoutCollaboratorsInput.schema';
import { UserCreateNestedOneWithoutSharedSheetsInputObjectSchema as UserCreateNestedOneWithoutSharedSheetsInputObjectSchema } from './UserCreateNestedOneWithoutSharedSheetsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: z.string().optional(),
  sheet: z.lazy(() => SheetCreateNestedOneWithoutCollaboratorsInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutSharedSheetsInputObjectSchema)
}).strict();
export const CollaboratorCreateInputObjectSchema: z.ZodType<Prisma.CollaboratorCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorCreateInput>;
export const CollaboratorCreateInputObjectZodSchema = makeSchema();
