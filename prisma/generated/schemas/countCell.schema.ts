import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CellOrderByWithRelationInputObjectSchema as CellOrderByWithRelationInputObjectSchema } from './objects/CellOrderByWithRelationInput.schema';
import { CellWhereInputObjectSchema as CellWhereInputObjectSchema } from './objects/CellWhereInput.schema';
import { CellWhereUniqueInputObjectSchema as CellWhereUniqueInputObjectSchema } from './objects/CellWhereUniqueInput.schema';
import { CellCountAggregateInputObjectSchema as CellCountAggregateInputObjectSchema } from './objects/CellCountAggregateInput.schema';

export const CellCountSchema: z.ZodType<Prisma.CellCountArgs> = z.object({ orderBy: z.union([CellOrderByWithRelationInputObjectSchema, CellOrderByWithRelationInputObjectSchema.array()]).optional(), where: CellWhereInputObjectSchema.optional(), cursor: CellWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CellCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CellCountArgs>;

export const CellCountZodSchema = z.object({ orderBy: z.union([CellOrderByWithRelationInputObjectSchema, CellOrderByWithRelationInputObjectSchema.array()]).optional(), where: CellWhereInputObjectSchema.optional(), cursor: CellWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CellCountAggregateInputObjectSchema ]).optional() }).strict();