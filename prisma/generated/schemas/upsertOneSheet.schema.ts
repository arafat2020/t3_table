import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SheetSelectObjectSchema as SheetSelectObjectSchema } from './objects/SheetSelect.schema';
import { SheetIncludeObjectSchema as SheetIncludeObjectSchema } from './objects/SheetInclude.schema';
import { SheetWhereUniqueInputObjectSchema as SheetWhereUniqueInputObjectSchema } from './objects/SheetWhereUniqueInput.schema';
import { SheetCreateInputObjectSchema as SheetCreateInputObjectSchema } from './objects/SheetCreateInput.schema';
import { SheetUncheckedCreateInputObjectSchema as SheetUncheckedCreateInputObjectSchema } from './objects/SheetUncheckedCreateInput.schema';
import { SheetUpdateInputObjectSchema as SheetUpdateInputObjectSchema } from './objects/SheetUpdateInput.schema';
import { SheetUncheckedUpdateInputObjectSchema as SheetUncheckedUpdateInputObjectSchema } from './objects/SheetUncheckedUpdateInput.schema';

export const SheetUpsertOneSchema: z.ZodType<Prisma.SheetUpsertArgs> = z.object({ select: SheetSelectObjectSchema.optional(), include: SheetIncludeObjectSchema.optional(), where: SheetWhereUniqueInputObjectSchema, create: z.union([ SheetCreateInputObjectSchema, SheetUncheckedCreateInputObjectSchema ]), update: z.union([ SheetUpdateInputObjectSchema, SheetUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SheetUpsertArgs>;

export const SheetUpsertOneZodSchema = z.object({ select: SheetSelectObjectSchema.optional(), include: SheetIncludeObjectSchema.optional(), where: SheetWhereUniqueInputObjectSchema, create: z.union([ SheetCreateInputObjectSchema, SheetUncheckedCreateInputObjectSchema ]), update: z.union([ SheetUpdateInputObjectSchema, SheetUncheckedUpdateInputObjectSchema ]) }).strict();