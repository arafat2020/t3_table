import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SheetWhereInputObjectSchema as SheetWhereInputObjectSchema } from './objects/SheetWhereInput.schema';
import { SheetOrderByWithAggregationInputObjectSchema as SheetOrderByWithAggregationInputObjectSchema } from './objects/SheetOrderByWithAggregationInput.schema';
import { SheetScalarWhereWithAggregatesInputObjectSchema as SheetScalarWhereWithAggregatesInputObjectSchema } from './objects/SheetScalarWhereWithAggregatesInput.schema';
import { SheetScalarFieldEnumSchema } from './enums/SheetScalarFieldEnum.schema';
import { SheetCountAggregateInputObjectSchema as SheetCountAggregateInputObjectSchema } from './objects/SheetCountAggregateInput.schema';
import { SheetMinAggregateInputObjectSchema as SheetMinAggregateInputObjectSchema } from './objects/SheetMinAggregateInput.schema';
import { SheetMaxAggregateInputObjectSchema as SheetMaxAggregateInputObjectSchema } from './objects/SheetMaxAggregateInput.schema';

export const SheetGroupBySchema: z.ZodType<Prisma.SheetGroupByArgs> = z.object({ where: SheetWhereInputObjectSchema.optional(), orderBy: z.union([SheetOrderByWithAggregationInputObjectSchema, SheetOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SheetScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(SheetScalarFieldEnumSchema), _count: z.union([ z.literal(true), SheetCountAggregateInputObjectSchema ]).optional(), _min: SheetMinAggregateInputObjectSchema.optional(), _max: SheetMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SheetGroupByArgs>;

export const SheetGroupByZodSchema = z.object({ where: SheetWhereInputObjectSchema.optional(), orderBy: z.union([SheetOrderByWithAggregationInputObjectSchema, SheetOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SheetScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(SheetScalarFieldEnumSchema), _count: z.union([ z.literal(true), SheetCountAggregateInputObjectSchema ]).optional(), _min: SheetMinAggregateInputObjectSchema.optional(), _max: SheetMaxAggregateInputObjectSchema.optional() }).strict();