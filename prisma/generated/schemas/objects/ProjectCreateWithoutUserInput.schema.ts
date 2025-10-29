import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetCreateNestedManyWithoutProjectInputObjectSchema as SheetCreateNestedManyWithoutProjectInputObjectSchema } from './SheetCreateNestedManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sheets: z.lazy(() => SheetCreateNestedManyWithoutProjectInputObjectSchema).optional()
}).strict();
export const ProjectCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ProjectCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateWithoutUserInput>;
export const ProjectCreateWithoutUserInputObjectZodSchema = makeSchema();
