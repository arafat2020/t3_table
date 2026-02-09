import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CollaboratorSelectObjectSchema as CollaboratorSelectObjectSchema } from './objects/CollaboratorSelect.schema';
import { CollaboratorIncludeObjectSchema as CollaboratorIncludeObjectSchema } from './objects/CollaboratorInclude.schema';
import { CollaboratorUpdateInputObjectSchema as CollaboratorUpdateInputObjectSchema } from './objects/CollaboratorUpdateInput.schema';
import { CollaboratorUncheckedUpdateInputObjectSchema as CollaboratorUncheckedUpdateInputObjectSchema } from './objects/CollaboratorUncheckedUpdateInput.schema';
import { CollaboratorWhereUniqueInputObjectSchema as CollaboratorWhereUniqueInputObjectSchema } from './objects/CollaboratorWhereUniqueInput.schema';

export const CollaboratorUpdateOneSchema: z.ZodType<Prisma.CollaboratorUpdateArgs> = z.object({ select: CollaboratorSelectObjectSchema.optional(), include: CollaboratorIncludeObjectSchema.optional(), data: z.union([CollaboratorUpdateInputObjectSchema, CollaboratorUncheckedUpdateInputObjectSchema]), where: CollaboratorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CollaboratorUpdateArgs>;

export const CollaboratorUpdateOneZodSchema = z.object({ select: CollaboratorSelectObjectSchema.optional(), include: CollaboratorIncludeObjectSchema.optional(), data: z.union([CollaboratorUpdateInputObjectSchema, CollaboratorUncheckedUpdateInputObjectSchema]), where: CollaboratorWhereUniqueInputObjectSchema }).strict();