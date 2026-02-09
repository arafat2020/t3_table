import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CollaboratorSelectObjectSchema as CollaboratorSelectObjectSchema } from './objects/CollaboratorSelect.schema';
import { CollaboratorIncludeObjectSchema as CollaboratorIncludeObjectSchema } from './objects/CollaboratorInclude.schema';
import { CollaboratorWhereUniqueInputObjectSchema as CollaboratorWhereUniqueInputObjectSchema } from './objects/CollaboratorWhereUniqueInput.schema';

export const CollaboratorDeleteOneSchema: z.ZodType<Prisma.CollaboratorDeleteArgs> = z.object({ select: CollaboratorSelectObjectSchema.optional(), include: CollaboratorIncludeObjectSchema.optional(), where: CollaboratorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CollaboratorDeleteArgs>;

export const CollaboratorDeleteOneZodSchema = z.object({ select: CollaboratorSelectObjectSchema.optional(), include: CollaboratorIncludeObjectSchema.optional(), where: CollaboratorWhereUniqueInputObjectSchema }).strict();