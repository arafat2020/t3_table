import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CollaboratorIncludeObjectSchema as CollaboratorIncludeObjectSchema } from './objects/CollaboratorInclude.schema';
import { CollaboratorOrderByWithRelationInputObjectSchema as CollaboratorOrderByWithRelationInputObjectSchema } from './objects/CollaboratorOrderByWithRelationInput.schema';
import { CollaboratorWhereInputObjectSchema as CollaboratorWhereInputObjectSchema } from './objects/CollaboratorWhereInput.schema';
import { CollaboratorWhereUniqueInputObjectSchema as CollaboratorWhereUniqueInputObjectSchema } from './objects/CollaboratorWhereUniqueInput.schema';
import { CollaboratorScalarFieldEnumSchema } from './enums/CollaboratorScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CollaboratorFindFirstOrThrowSelectSchema: z.ZodType<Prisma.CollaboratorSelect> = z.object({
    id: z.boolean().optional(),
    sheetId: z.boolean().optional(),
    userId: z.boolean().optional(),
    role: z.boolean().optional(),
    sheet: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CollaboratorSelect>;

export const CollaboratorFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    sheetId: z.boolean().optional(),
    userId: z.boolean().optional(),
    role: z.boolean().optional(),
    sheet: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const CollaboratorFindFirstOrThrowSchema: z.ZodType<Prisma.CollaboratorFindFirstOrThrowArgs> = z.object({ select: CollaboratorFindFirstOrThrowSelectSchema.optional(), include: CollaboratorIncludeObjectSchema.optional(), orderBy: z.union([CollaboratorOrderByWithRelationInputObjectSchema, CollaboratorOrderByWithRelationInputObjectSchema.array()]).optional(), where: CollaboratorWhereInputObjectSchema.optional(), cursor: CollaboratorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CollaboratorScalarFieldEnumSchema, CollaboratorScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CollaboratorFindFirstOrThrowArgs>;

export const CollaboratorFindFirstOrThrowZodSchema = z.object({ select: CollaboratorFindFirstOrThrowSelectSchema.optional(), include: CollaboratorIncludeObjectSchema.optional(), orderBy: z.union([CollaboratorOrderByWithRelationInputObjectSchema, CollaboratorOrderByWithRelationInputObjectSchema.array()]).optional(), where: CollaboratorWhereInputObjectSchema.optional(), cursor: CollaboratorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CollaboratorScalarFieldEnumSchema, CollaboratorScalarFieldEnumSchema.array()]).optional() }).strict();