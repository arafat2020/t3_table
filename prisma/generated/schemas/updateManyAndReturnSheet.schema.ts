import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SheetSelectObjectSchema as SheetSelectObjectSchema } from './objects/SheetSelect.schema';
import { SheetUpdateManyMutationInputObjectSchema as SheetUpdateManyMutationInputObjectSchema } from './objects/SheetUpdateManyMutationInput.schema';
import { SheetWhereInputObjectSchema as SheetWhereInputObjectSchema } from './objects/SheetWhereInput.schema';

export const SheetUpdateManyAndReturnSchema: z.ZodType<Prisma.SheetUpdateManyAndReturnArgs> = z.object({ select: SheetSelectObjectSchema.optional(), data: SheetUpdateManyMutationInputObjectSchema, where: SheetWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SheetUpdateManyAndReturnArgs>;

export const SheetUpdateManyAndReturnZodSchema = z.object({ select: SheetSelectObjectSchema.optional(), data: SheetUpdateManyMutationInputObjectSchema, where: SheetWhereInputObjectSchema.optional() }).strict();