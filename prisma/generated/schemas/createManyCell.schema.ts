import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CellCreateManyInputObjectSchema as CellCreateManyInputObjectSchema } from './objects/CellCreateManyInput.schema';

export const CellCreateManySchema: z.ZodType<Prisma.CellCreateManyArgs> = z.object({ data: z.union([ CellCreateManyInputObjectSchema, z.array(CellCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CellCreateManyArgs>;

export const CellCreateManyZodSchema = z.object({ data: z.union([ CellCreateManyInputObjectSchema, z.array(CellCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();