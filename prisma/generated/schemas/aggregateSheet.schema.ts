import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SheetOrderByWithRelationInputObjectSchema as SheetOrderByWithRelationInputObjectSchema } from './objects/SheetOrderByWithRelationInput.schema';
import { SheetWhereInputObjectSchema as SheetWhereInputObjectSchema } from './objects/SheetWhereInput.schema';
import { SheetWhereUniqueInputObjectSchema as SheetWhereUniqueInputObjectSchema } from './objects/SheetWhereUniqueInput.schema';
import { SheetCountAggregateInputObjectSchema as SheetCountAggregateInputObjectSchema } from './objects/SheetCountAggregateInput.schema';
import { SheetMinAggregateInputObjectSchema as SheetMinAggregateInputObjectSchema } from './objects/SheetMinAggregateInput.schema';
import { SheetMaxAggregateInputObjectSchema as SheetMaxAggregateInputObjectSchema } from './objects/SheetMaxAggregateInput.schema';

export const SheetAggregateSchema: z.ZodType<Prisma.SheetAggregateArgs> = z.object({ orderBy: z.union([SheetOrderByWithRelationInputObjectSchema, SheetOrderByWithRelationInputObjectSchema.array()]).optional(), where: SheetWhereInputObjectSchema.optional(), cursor: SheetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SheetCountAggregateInputObjectSchema ]).optional(), _min: SheetMinAggregateInputObjectSchema.optional(), _max: SheetMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SheetAggregateArgs>;

export const SheetAggregateZodSchema = z.object({ orderBy: z.union([SheetOrderByWithRelationInputObjectSchema, SheetOrderByWithRelationInputObjectSchema.array()]).optional(), where: SheetWhereInputObjectSchema.optional(), cursor: SheetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SheetCountAggregateInputObjectSchema ]).optional(), _min: SheetMinAggregateInputObjectSchema.optional(), _max: SheetMaxAggregateInputObjectSchema.optional() }).strict();