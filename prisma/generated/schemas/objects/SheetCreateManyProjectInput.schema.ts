import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const SheetCreateManyProjectInputObjectSchema: z.ZodType<Prisma.SheetCreateManyProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetCreateManyProjectInput>;
export const SheetCreateManyProjectInputObjectZodSchema = makeSchema();
