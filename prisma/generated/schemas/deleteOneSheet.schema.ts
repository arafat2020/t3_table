import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SheetSelectObjectSchema as SheetSelectObjectSchema } from './objects/SheetSelect.schema';
import { SheetIncludeObjectSchema as SheetIncludeObjectSchema } from './objects/SheetInclude.schema';
import { SheetWhereUniqueInputObjectSchema as SheetWhereUniqueInputObjectSchema } from './objects/SheetWhereUniqueInput.schema';

export const SheetDeleteOneSchema: z.ZodType<Prisma.SheetDeleteArgs> = z.object({ select: SheetSelectObjectSchema.optional(), include: SheetIncludeObjectSchema.optional(), where: SheetWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SheetDeleteArgs>;

export const SheetDeleteOneZodSchema = z.object({ select: SheetSelectObjectSchema.optional(), include: SheetIncludeObjectSchema.optional(), where: SheetWhereUniqueInputObjectSchema }).strict();