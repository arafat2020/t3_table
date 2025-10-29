import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  index: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const RowCreateManySheetInputObjectSchema: z.ZodType<Prisma.RowCreateManySheetInput> = makeSchema() as unknown as z.ZodType<Prisma.RowCreateManySheetInput>;
export const RowCreateManySheetInputObjectZodSchema = makeSchema();
