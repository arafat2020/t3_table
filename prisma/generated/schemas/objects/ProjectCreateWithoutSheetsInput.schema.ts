import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutProjectsInputObjectSchema as UserCreateNestedOneWithoutProjectsInputObjectSchema } from './UserCreateNestedOneWithoutProjectsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutProjectsInputObjectSchema).optional()
}).strict();
export const ProjectCreateWithoutSheetsInputObjectSchema: z.ZodType<Prisma.ProjectCreateWithoutSheetsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateWithoutSheetsInput>;
export const ProjectCreateWithoutSheetsInputObjectZodSchema = makeSchema();
