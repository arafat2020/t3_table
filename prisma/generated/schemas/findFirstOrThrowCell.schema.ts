import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CellIncludeObjectSchema as CellIncludeObjectSchema } from './objects/CellInclude.schema';
import { CellOrderByWithRelationInputObjectSchema as CellOrderByWithRelationInputObjectSchema } from './objects/CellOrderByWithRelationInput.schema';
import { CellWhereInputObjectSchema as CellWhereInputObjectSchema } from './objects/CellWhereInput.schema';
import { CellWhereUniqueInputObjectSchema as CellWhereUniqueInputObjectSchema } from './objects/CellWhereUniqueInput.schema';
import { CellScalarFieldEnumSchema } from './enums/CellScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CellFindFirstOrThrowSelectSchema: z.ZodType<Prisma.CellSelect> = z.object({
    id: z.boolean().optional(),
    rowId: z.boolean().optional(),
    colIndex: z.boolean().optional(),
    value: z.boolean().optional(),
    type: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    row: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CellSelect>;

export const CellFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    rowId: z.boolean().optional(),
    colIndex: z.boolean().optional(),
    value: z.boolean().optional(),
    type: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    row: z.boolean().optional()
  }).strict();

export const CellFindFirstOrThrowSchema: z.ZodType<Prisma.CellFindFirstOrThrowArgs> = z.object({ select: CellFindFirstOrThrowSelectSchema.optional(), include: CellIncludeObjectSchema.optional(), orderBy: z.union([CellOrderByWithRelationInputObjectSchema, CellOrderByWithRelationInputObjectSchema.array()]).optional(), where: CellWhereInputObjectSchema.optional(), cursor: CellWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CellScalarFieldEnumSchema, CellScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CellFindFirstOrThrowArgs>;

export const CellFindFirstOrThrowZodSchema = z.object({ select: CellFindFirstOrThrowSelectSchema.optional(), include: CellIncludeObjectSchema.optional(), orderBy: z.union([CellOrderByWithRelationInputObjectSchema, CellOrderByWithRelationInputObjectSchema.array()]).optional(), where: CellWhereInputObjectSchema.optional(), cursor: CellWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CellScalarFieldEnumSchema, CellScalarFieldEnumSchema.array()]).optional() }).strict();