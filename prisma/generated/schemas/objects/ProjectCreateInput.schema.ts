import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutProjectsInputObjectSchema as UserCreateNestedOneWithoutProjectsInputObjectSchema } from './UserCreateNestedOneWithoutProjectsInput.schema';
import { SheetCreateNestedManyWithoutProjectInputObjectSchema as SheetCreateNestedManyWithoutProjectInputObjectSchema } from './SheetCreateNestedManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutProjectsInputObjectSchema).optional(),
  sheets: z.lazy(() => SheetCreateNestedManyWithoutProjectInputObjectSchema)
}).strict();
export const ProjectCreateInputObjectSchema: z.ZodType<Prisma.ProjectCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateInput>;
export const ProjectCreateInputObjectZodSchema = makeSchema();
