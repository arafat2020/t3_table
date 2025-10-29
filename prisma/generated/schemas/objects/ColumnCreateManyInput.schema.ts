import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  sheetId: z.string(),
  index: z.number().int(),
  name: z.string().optional().nullable(),
  type: z.string().optional().nullable()
}).strict();
export const ColumnCreateManyInputObjectSchema: z.ZodType<Prisma.ColumnCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ColumnCreateManyInput>;
export const ColumnCreateManyInputObjectZodSchema = makeSchema();
