import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CellSelectObjectSchema as CellSelectObjectSchema } from './objects/CellSelect.schema';
import { CellIncludeObjectSchema as CellIncludeObjectSchema } from './objects/CellInclude.schema';
import { CellWhereUniqueInputObjectSchema as CellWhereUniqueInputObjectSchema } from './objects/CellWhereUniqueInput.schema';
import { CellCreateInputObjectSchema as CellCreateInputObjectSchema } from './objects/CellCreateInput.schema';
import { CellUncheckedCreateInputObjectSchema as CellUncheckedCreateInputObjectSchema } from './objects/CellUncheckedCreateInput.schema';
import { CellUpdateInputObjectSchema as CellUpdateInputObjectSchema } from './objects/CellUpdateInput.schema';
import { CellUncheckedUpdateInputObjectSchema as CellUncheckedUpdateInputObjectSchema } from './objects/CellUncheckedUpdateInput.schema';

export const CellUpsertOneSchema: z.ZodType<Prisma.CellUpsertArgs> = z.object({ select: CellSelectObjectSchema.optional(), include: CellIncludeObjectSchema.optional(), where: CellWhereUniqueInputObjectSchema, create: z.union([ CellCreateInputObjectSchema, CellUncheckedCreateInputObjectSchema ]), update: z.union([ CellUpdateInputObjectSchema, CellUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CellUpsertArgs>;

export const CellUpsertOneZodSchema = z.object({ select: CellSelectObjectSchema.optional(), include: CellIncludeObjectSchema.optional(), where: CellWhereUniqueInputObjectSchema, create: z.union([ CellCreateInputObjectSchema, CellUncheckedCreateInputObjectSchema ]), update: z.union([ CellUpdateInputObjectSchema, CellUncheckedUpdateInputObjectSchema ]) }).strict();