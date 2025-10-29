import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SheetCreateManyInputObjectSchema as SheetCreateManyInputObjectSchema } from './objects/SheetCreateManyInput.schema';

export const SheetCreateManySchema: z.ZodType<Prisma.SheetCreateManyArgs> = z.object({ data: z.union([ SheetCreateManyInputObjectSchema, z.array(SheetCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SheetCreateManyArgs>;

export const SheetCreateManyZodSchema = z.object({ data: z.union([ SheetCreateManyInputObjectSchema, z.array(SheetCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();