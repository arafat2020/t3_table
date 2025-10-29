import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CellWhereInputObjectSchema as CellWhereInputObjectSchema } from './objects/CellWhereInput.schema';

export const CellDeleteManySchema: z.ZodType<Prisma.CellDeleteManyArgs> = z.object({ where: CellWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CellDeleteManyArgs>;

export const CellDeleteManyZodSchema = z.object({ where: CellWhereInputObjectSchema.optional() }).strict();