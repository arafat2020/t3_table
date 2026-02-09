import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CollaboratorOrderByWithRelationInputObjectSchema as CollaboratorOrderByWithRelationInputObjectSchema } from './objects/CollaboratorOrderByWithRelationInput.schema';
import { CollaboratorWhereInputObjectSchema as CollaboratorWhereInputObjectSchema } from './objects/CollaboratorWhereInput.schema';
import { CollaboratorWhereUniqueInputObjectSchema as CollaboratorWhereUniqueInputObjectSchema } from './objects/CollaboratorWhereUniqueInput.schema';
import { CollaboratorCountAggregateInputObjectSchema as CollaboratorCountAggregateInputObjectSchema } from './objects/CollaboratorCountAggregateInput.schema';

export const CollaboratorCountSchema: z.ZodType<Prisma.CollaboratorCountArgs> = z.object({ orderBy: z.union([CollaboratorOrderByWithRelationInputObjectSchema, CollaboratorOrderByWithRelationInputObjectSchema.array()]).optional(), where: CollaboratorWhereInputObjectSchema.optional(), cursor: CollaboratorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CollaboratorCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CollaboratorCountArgs>;

export const CollaboratorCountZodSchema = z.object({ orderBy: z.union([CollaboratorOrderByWithRelationInputObjectSchema, CollaboratorOrderByWithRelationInputObjectSchema.array()]).optional(), where: CollaboratorWhereInputObjectSchema.optional(), cursor: CollaboratorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CollaboratorCountAggregateInputObjectSchema ]).optional() }).strict();