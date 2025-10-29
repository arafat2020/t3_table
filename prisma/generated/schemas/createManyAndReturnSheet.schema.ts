import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SheetSelectObjectSchema as SheetSelectObjectSchema } from './objects/SheetSelect.schema';
import { SheetCreateManyInputObjectSchema as SheetCreateManyInputObjectSchema } from './objects/SheetCreateManyInput.schema';

export const SheetCreateManyAndReturnSchema: z.ZodType<Prisma.SheetCreateManyAndReturnArgs> = z.object({ select: SheetSelectObjectSchema.optional(), data: z.union([ SheetCreateManyInputObjectSchema, z.array(SheetCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SheetCreateManyAndReturnArgs>;

export const SheetCreateManyAndReturnZodSchema = z.object({ select: SheetSelectObjectSchema.optional(), data: z.union([ SheetCreateManyInputObjectSchema, z.array(SheetCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();