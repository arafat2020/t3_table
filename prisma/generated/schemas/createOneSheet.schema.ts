import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SheetSelectObjectSchema as SheetSelectObjectSchema } from './objects/SheetSelect.schema';
import { SheetIncludeObjectSchema as SheetIncludeObjectSchema } from './objects/SheetInclude.schema';
import { SheetCreateInputObjectSchema as SheetCreateInputObjectSchema } from './objects/SheetCreateInput.schema';
import { SheetUncheckedCreateInputObjectSchema as SheetUncheckedCreateInputObjectSchema } from './objects/SheetUncheckedCreateInput.schema';

export const SheetCreateOneSchema: z.ZodType<Prisma.SheetCreateArgs> = z.object({ select: SheetSelectObjectSchema.optional(), include: SheetIncludeObjectSchema.optional(), data: z.union([SheetCreateInputObjectSchema, SheetUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SheetCreateArgs>;

export const SheetCreateOneZodSchema = z.object({ select: SheetSelectObjectSchema.optional(), include: SheetIncludeObjectSchema.optional(), data: z.union([SheetCreateInputObjectSchema, SheetUncheckedCreateInputObjectSchema]) }).strict();