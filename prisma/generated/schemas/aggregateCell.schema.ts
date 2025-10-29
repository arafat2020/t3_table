import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CellOrderByWithRelationInputObjectSchema as CellOrderByWithRelationInputObjectSchema } from './objects/CellOrderByWithRelationInput.schema';
import { CellWhereInputObjectSchema as CellWhereInputObjectSchema } from './objects/CellWhereInput.schema';
import { CellWhereUniqueInputObjectSchema as CellWhereUniqueInputObjectSchema } from './objects/CellWhereUniqueInput.schema';
import { CellCountAggregateInputObjectSchema as CellCountAggregateInputObjectSchema } from './objects/CellCountAggregateInput.schema';
import { CellMinAggregateInputObjectSchema as CellMinAggregateInputObjectSchema } from './objects/CellMinAggregateInput.schema';
import { CellMaxAggregateInputObjectSchema as CellMaxAggregateInputObjectSchema } from './objects/CellMaxAggregateInput.schema';
import { CellAvgAggregateInputObjectSchema as CellAvgAggregateInputObjectSchema } from './objects/CellAvgAggregateInput.schema';
import { CellSumAggregateInputObjectSchema as CellSumAggregateInputObjectSchema } from './objects/CellSumAggregateInput.schema';

export const CellAggregateSchema: z.ZodType<Prisma.CellAggregateArgs> = z.object({ orderBy: z.union([CellOrderByWithRelationInputObjectSchema, CellOrderByWithRelationInputObjectSchema.array()]).optional(), where: CellWhereInputObjectSchema.optional(), cursor: CellWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CellCountAggregateInputObjectSchema ]).optional(), _min: CellMinAggregateInputObjectSchema.optional(), _max: CellMaxAggregateInputObjectSchema.optional(), _avg: CellAvgAggregateInputObjectSchema.optional(), _sum: CellSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CellAggregateArgs>;

export const CellAggregateZodSchema = z.object({ orderBy: z.union([CellOrderByWithRelationInputObjectSchema, CellOrderByWithRelationInputObjectSchema.array()]).optional(), where: CellWhereInputObjectSchema.optional(), cursor: CellWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CellCountAggregateInputObjectSchema ]).optional(), _min: CellMinAggregateInputObjectSchema.optional(), _max: CellMaxAggregateInputObjectSchema.optional(), _avg: CellAvgAggregateInputObjectSchema.optional(), _sum: CellSumAggregateInputObjectSchema.optional() }).strict();