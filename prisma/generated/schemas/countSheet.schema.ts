import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SheetOrderByWithRelationInputObjectSchema as SheetOrderByWithRelationInputObjectSchema } from './objects/SheetOrderByWithRelationInput.schema';
import { SheetWhereInputObjectSchema as SheetWhereInputObjectSchema } from './objects/SheetWhereInput.schema';
import { SheetWhereUniqueInputObjectSchema as SheetWhereUniqueInputObjectSchema } from './objects/SheetWhereUniqueInput.schema';
import { SheetCountAggregateInputObjectSchema as SheetCountAggregateInputObjectSchema } from './objects/SheetCountAggregateInput.schema';

export const SheetCountSchema: z.ZodType<Prisma.SheetCountArgs> = z.object({ orderBy: z.union([SheetOrderByWithRelationInputObjectSchema, SheetOrderByWithRelationInputObjectSchema.array()]).optional(), where: SheetWhereInputObjectSchema.optional(), cursor: SheetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SheetCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SheetCountArgs>;

export const SheetCountZodSchema = z.object({ orderBy: z.union([SheetOrderByWithRelationInputObjectSchema, SheetOrderByWithRelationInputObjectSchema.array()]).optional(), where: SheetWhereInputObjectSchema.optional(), cursor: SheetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SheetCountAggregateInputObjectSchema ]).optional() }).strict();