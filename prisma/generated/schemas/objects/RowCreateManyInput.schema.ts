import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  sheetId: z.string(),
  index: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const RowCreateManyInputObjectSchema: z.ZodType<Prisma.RowCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.RowCreateManyInput>;
export const RowCreateManyInputObjectZodSchema = makeSchema();
