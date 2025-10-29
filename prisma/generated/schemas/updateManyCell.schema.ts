import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CellUpdateManyMutationInputObjectSchema as CellUpdateManyMutationInputObjectSchema } from './objects/CellUpdateManyMutationInput.schema';
import { CellWhereInputObjectSchema as CellWhereInputObjectSchema } from './objects/CellWhereInput.schema';

export const CellUpdateManySchema: z.ZodType<Prisma.CellUpdateManyArgs> = z.object({ data: CellUpdateManyMutationInputObjectSchema, where: CellWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CellUpdateManyArgs>;

export const CellUpdateManyZodSchema = z.object({ data: CellUpdateManyMutationInputObjectSchema, where: CellWhereInputObjectSchema.optional() }).strict();