import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CellSelectObjectSchema as CellSelectObjectSchema } from './objects/CellSelect.schema';
import { CellCreateManyInputObjectSchema as CellCreateManyInputObjectSchema } from './objects/CellCreateManyInput.schema';

export const CellCreateManyAndReturnSchema: z.ZodType<Prisma.CellCreateManyAndReturnArgs> = z.object({ select: CellSelectObjectSchema.optional(), data: z.union([ CellCreateManyInputObjectSchema, z.array(CellCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CellCreateManyAndReturnArgs>;

export const CellCreateManyAndReturnZodSchema = z.object({ select: CellSelectObjectSchema.optional(), data: z.union([ CellCreateManyInputObjectSchema, z.array(CellCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();