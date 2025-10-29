import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SheetIncludeObjectSchema as SheetIncludeObjectSchema } from './objects/SheetInclude.schema';
import { SheetOrderByWithRelationInputObjectSchema as SheetOrderByWithRelationInputObjectSchema } from './objects/SheetOrderByWithRelationInput.schema';
import { SheetWhereInputObjectSchema as SheetWhereInputObjectSchema } from './objects/SheetWhereInput.schema';
import { SheetWhereUniqueInputObjectSchema as SheetWhereUniqueInputObjectSchema } from './objects/SheetWhereUniqueInput.schema';
import { SheetScalarFieldEnumSchema } from './enums/SheetScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SheetFindFirstSelectSchema: z.ZodType<Prisma.SheetSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    ownerId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    Project: z.boolean().optional(),
    projectId: z.boolean().optional(),
    rows: z.boolean().optional(),
    Column: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SheetSelect>;

export const SheetFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    ownerId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    Project: z.boolean().optional(),
    projectId: z.boolean().optional(),
    rows: z.boolean().optional(),
    Column: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const SheetFindFirstSchema: z.ZodType<Prisma.SheetFindFirstArgs> = z.object({ select: SheetFindFirstSelectSchema.optional(), include: SheetIncludeObjectSchema.optional(), orderBy: z.union([SheetOrderByWithRelationInputObjectSchema, SheetOrderByWithRelationInputObjectSchema.array()]).optional(), where: SheetWhereInputObjectSchema.optional(), cursor: SheetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SheetScalarFieldEnumSchema, SheetScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SheetFindFirstArgs>;

export const SheetFindFirstZodSchema = z.object({ select: SheetFindFirstSelectSchema.optional(), include: SheetIncludeObjectSchema.optional(), orderBy: z.union([SheetOrderByWithRelationInputObjectSchema, SheetOrderByWithRelationInputObjectSchema.array()]).optional(), where: SheetWhereInputObjectSchema.optional(), cursor: SheetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SheetScalarFieldEnumSchema, SheetScalarFieldEnumSchema.array()]).optional() }).strict();