import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetUncheckedCreateNestedManyWithoutProjectInputObjectSchema as SheetUncheckedCreateNestedManyWithoutProjectInputObjectSchema } from './SheetUncheckedCreateNestedManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  userId: z.string().optional().nullable(),
  sheets: z.lazy(() => SheetUncheckedCreateNestedManyWithoutProjectInputObjectSchema)
}).strict();
export const ProjectUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUncheckedCreateInput>;
export const ProjectUncheckedCreateInputObjectZodSchema = makeSchema();
