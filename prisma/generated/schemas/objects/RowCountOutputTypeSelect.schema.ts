import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  cells: z.boolean().optional()
}).strict();
export const RowCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.RowCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.RowCountOutputTypeSelect>;
export const RowCountOutputTypeSelectObjectZodSchema = makeSchema();
