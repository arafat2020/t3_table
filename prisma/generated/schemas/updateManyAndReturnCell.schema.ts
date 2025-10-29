import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CellSelectObjectSchema as CellSelectObjectSchema } from './objects/CellSelect.schema';
import { CellUpdateManyMutationInputObjectSchema as CellUpdateManyMutationInputObjectSchema } from './objects/CellUpdateManyMutationInput.schema';
import { CellWhereInputObjectSchema as CellWhereInputObjectSchema } from './objects/CellWhereInput.schema';

export const CellUpdateManyAndReturnSchema: z.ZodType<Prisma.CellUpdateManyAndReturnArgs> = z.object({ select: CellSelectObjectSchema.optional(), data: CellUpdateManyMutationInputObjectSchema, where: CellWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CellUpdateManyAndReturnArgs>;

export const CellUpdateManyAndReturnZodSchema = z.object({ select: CellSelectObjectSchema.optional(), data: CellUpdateManyMutationInputObjectSchema, where: CellWhereInputObjectSchema.optional() }).strict();