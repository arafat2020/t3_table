import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SheetUpdateManyMutationInputObjectSchema as SheetUpdateManyMutationInputObjectSchema } from './objects/SheetUpdateManyMutationInput.schema';
import { SheetWhereInputObjectSchema as SheetWhereInputObjectSchema } from './objects/SheetWhereInput.schema';

export const SheetUpdateManySchema: z.ZodType<Prisma.SheetUpdateManyArgs> = z.object({ data: SheetUpdateManyMutationInputObjectSchema, where: SheetWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SheetUpdateManyArgs>;

export const SheetUpdateManyZodSchema = z.object({ data: SheetUpdateManyMutationInputObjectSchema, where: SheetWhereInputObjectSchema.optional() }).strict();