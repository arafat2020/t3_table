import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CellSelectObjectSchema as CellSelectObjectSchema } from './objects/CellSelect.schema';
import { CellIncludeObjectSchema as CellIncludeObjectSchema } from './objects/CellInclude.schema';
import { CellUpdateInputObjectSchema as CellUpdateInputObjectSchema } from './objects/CellUpdateInput.schema';
import { CellUncheckedUpdateInputObjectSchema as CellUncheckedUpdateInputObjectSchema } from './objects/CellUncheckedUpdateInput.schema';
import { CellWhereUniqueInputObjectSchema as CellWhereUniqueInputObjectSchema } from './objects/CellWhereUniqueInput.schema';

export const CellUpdateOneSchema: z.ZodType<Prisma.CellUpdateArgs> = z.object({ select: CellSelectObjectSchema.optional(), include: CellIncludeObjectSchema.optional(), data: z.union([CellUpdateInputObjectSchema, CellUncheckedUpdateInputObjectSchema]), where: CellWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CellUpdateArgs>;

export const CellUpdateOneZodSchema = z.object({ select: CellSelectObjectSchema.optional(), include: CellIncludeObjectSchema.optional(), data: z.union([CellUpdateInputObjectSchema, CellUncheckedUpdateInputObjectSchema]), where: CellWhereUniqueInputObjectSchema }).strict();