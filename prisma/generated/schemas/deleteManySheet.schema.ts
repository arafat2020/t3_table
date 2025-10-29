import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SheetWhereInputObjectSchema as SheetWhereInputObjectSchema } from './objects/SheetWhereInput.schema';

export const SheetDeleteManySchema: z.ZodType<Prisma.SheetDeleteManyArgs> = z.object({ where: SheetWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SheetDeleteManyArgs>;

export const SheetDeleteManyZodSchema = z.object({ where: SheetWhereInputObjectSchema.optional() }).strict();