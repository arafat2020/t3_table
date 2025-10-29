import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  projectId: z.string().optional().nullable()
}).strict();
export const SheetCreateManyInputObjectSchema: z.ZodType<Prisma.SheetCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetCreateManyInput>;
export const SheetCreateManyInputObjectZodSchema = makeSchema();
