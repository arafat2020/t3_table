import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SheetSelectObjectSchema as SheetSelectObjectSchema } from './objects/SheetSelect.schema';
import { SheetIncludeObjectSchema as SheetIncludeObjectSchema } from './objects/SheetInclude.schema';
import { SheetWhereUniqueInputObjectSchema as SheetWhereUniqueInputObjectSchema } from './objects/SheetWhereUniqueInput.schema';

export const SheetFindUniqueSchema: z.ZodType<Prisma.SheetFindUniqueArgs> = z.object({ select: SheetSelectObjectSchema.optional(), include: SheetIncludeObjectSchema.optional(), where: SheetWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SheetFindUniqueArgs>;

export const SheetFindUniqueZodSchema = z.object({ select: SheetSelectObjectSchema.optional(), include: SheetIncludeObjectSchema.optional(), where: SheetWhereUniqueInputObjectSchema }).strict();