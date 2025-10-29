import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  rows: z.boolean().optional(),
  Column: z.boolean().optional()
}).strict();
export const SheetCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.SheetCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.SheetCountOutputTypeSelect>;
export const SheetCountOutputTypeSelectObjectZodSchema = makeSchema();
