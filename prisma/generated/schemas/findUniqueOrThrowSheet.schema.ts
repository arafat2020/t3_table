import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SheetSelectObjectSchema as SheetSelectObjectSchema } from './objects/SheetSelect.schema';
import { SheetIncludeObjectSchema as SheetIncludeObjectSchema } from './objects/SheetInclude.schema';
import { SheetWhereUniqueInputObjectSchema as SheetWhereUniqueInputObjectSchema } from './objects/SheetWhereUniqueInput.schema';

export const SheetFindUniqueOrThrowSchema: z.ZodType<Prisma.SheetFindUniqueOrThrowArgs> = z.object({ select: SheetSelectObjectSchema.optional(), include: SheetIncludeObjectSchema.optional(), where: SheetWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SheetFindUniqueOrThrowArgs>;

export const SheetFindUniqueOrThrowZodSchema = z.object({ select: SheetSelectObjectSchema.optional(), include: SheetIncludeObjectSchema.optional(), where: SheetWhereUniqueInputObjectSchema }).strict();