import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetCreateNestedOneWithoutCollaboratorsInputObjectSchema as SheetCreateNestedOneWithoutCollaboratorsInputObjectSchema } from './SheetCreateNestedOneWithoutCollaboratorsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: z.string().optional(),
  sheet: z.lazy(() => SheetCreateNestedOneWithoutCollaboratorsInputObjectSchema)
}).strict();
export const CollaboratorCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.CollaboratorCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorCreateWithoutUserInput>;
export const CollaboratorCreateWithoutUserInputObjectZodSchema = makeSchema();
