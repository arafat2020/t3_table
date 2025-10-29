import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SheetSelectObjectSchema as SheetSelectObjectSchema } from './objects/SheetSelect.schema';
import { SheetIncludeObjectSchema as SheetIncludeObjectSchema } from './objects/SheetInclude.schema';
import { SheetUpdateInputObjectSchema as SheetUpdateInputObjectSchema } from './objects/SheetUpdateInput.schema';
import { SheetUncheckedUpdateInputObjectSchema as SheetUncheckedUpdateInputObjectSchema } from './objects/SheetUncheckedUpdateInput.schema';
import { SheetWhereUniqueInputObjectSchema as SheetWhereUniqueInputObjectSchema } from './objects/SheetWhereUniqueInput.schema';

export const SheetUpdateOneSchema: z.ZodType<Prisma.SheetUpdateArgs> = z.object({ select: SheetSelectObjectSchema.optional(), include: SheetIncludeObjectSchema.optional(), data: z.union([SheetUpdateInputObjectSchema, SheetUncheckedUpdateInputObjectSchema]), where: SheetWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SheetUpdateArgs>;

export const SheetUpdateOneZodSchema = z.object({ select: SheetSelectObjectSchema.optional(), include: SheetIncludeObjectSchema.optional(), data: z.union([SheetUpdateInputObjectSchema, SheetUncheckedUpdateInputObjectSchema]), where: SheetWhereUniqueInputObjectSchema }).strict();