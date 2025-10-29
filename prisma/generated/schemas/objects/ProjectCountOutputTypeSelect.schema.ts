import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  sheets: z.boolean().optional()
}).strict();
export const ProjectCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ProjectCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCountOutputTypeSelect>;
export const ProjectCountOutputTypeSelectObjectZodSchema = makeSchema();
