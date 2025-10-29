import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetUncheckedCreateNestedManyWithoutProjectInputObjectSchema as SheetUncheckedCreateNestedManyWithoutProjectInputObjectSchema } from './SheetUncheckedCreateNestedManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sheets: z.lazy(() => SheetUncheckedCreateNestedManyWithoutProjectInputObjectSchema).optional()
}).strict();
export const ProjectUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUncheckedCreateWithoutUserInput>;
export const ProjectUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
