import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CellWhereInputObjectSchema as CellWhereInputObjectSchema } from './objects/CellWhereInput.schema';
import { CellOrderByWithAggregationInputObjectSchema as CellOrderByWithAggregationInputObjectSchema } from './objects/CellOrderByWithAggregationInput.schema';
import { CellScalarWhereWithAggregatesInputObjectSchema as CellScalarWhereWithAggregatesInputObjectSchema } from './objects/CellScalarWhereWithAggregatesInput.schema';
import { CellScalarFieldEnumSchema } from './enums/CellScalarFieldEnum.schema';
import { CellCountAggregateInputObjectSchema as CellCountAggregateInputObjectSchema } from './objects/CellCountAggregateInput.schema';
import { CellMinAggregateInputObjectSchema as CellMinAggregateInputObjectSchema } from './objects/CellMinAggregateInput.schema';
import { CellMaxAggregateInputObjectSchema as CellMaxAggregateInputObjectSchema } from './objects/CellMaxAggregateInput.schema';
import { CellAvgAggregateInputObjectSchema as CellAvgAggregateInputObjectSchema } from './objects/CellAvgAggregateInput.schema';
import { CellSumAggregateInputObjectSchema as CellSumAggregateInputObjectSchema } from './objects/CellSumAggregateInput.schema';

export const CellGroupBySchema: z.ZodType<Prisma.CellGroupByArgs> = z.object({ where: CellWhereInputObjectSchema.optional(), orderBy: z.union([CellOrderByWithAggregationInputObjectSchema, CellOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CellScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CellScalarFieldEnumSchema), _count: z.union([ z.literal(true), CellCountAggregateInputObjectSchema ]).optional(), _min: CellMinAggregateInputObjectSchema.optional(), _max: CellMaxAggregateInputObjectSchema.optional(), _avg: CellAvgAggregateInputObjectSchema.optional(), _sum: CellSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CellGroupByArgs>;

export const CellGroupByZodSchema = z.object({ where: CellWhereInputObjectSchema.optional(), orderBy: z.union([CellOrderByWithAggregationInputObjectSchema, CellOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CellScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CellScalarFieldEnumSchema), _count: z.union([ z.literal(true), CellCountAggregateInputObjectSchema ]).optional(), _min: CellMinAggregateInputObjectSchema.optional(), _max: CellMaxAggregateInputObjectSchema.optional(), _avg: CellAvgAggregateInputObjectSchema.optional(), _sum: CellSumAggregateInputObjectSchema.optional() }).strict();