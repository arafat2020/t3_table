import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  sheetId: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  role: z.literal(true).optional()
}).strict();
export const CollaboratorMaxAggregateInputObjectSchema: z.ZodType<Prisma.CollaboratorMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorMaxAggregateInputType>;
export const CollaboratorMaxAggregateInputObjectZodSchema = makeSchema();
