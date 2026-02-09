import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CollaboratorSelectObjectSchema as CollaboratorSelectObjectSchema } from './objects/CollaboratorSelect.schema';
import { CollaboratorIncludeObjectSchema as CollaboratorIncludeObjectSchema } from './objects/CollaboratorInclude.schema';
import { CollaboratorWhereUniqueInputObjectSchema as CollaboratorWhereUniqueInputObjectSchema } from './objects/CollaboratorWhereUniqueInput.schema';

export const CollaboratorFindUniqueSchema: z.ZodType<Prisma.CollaboratorFindUniqueArgs> = z.object({ select: CollaboratorSelectObjectSchema.optional(), include: CollaboratorIncludeObjectSchema.optional(), where: CollaboratorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CollaboratorFindUniqueArgs>;

export const CollaboratorFindUniqueZodSchema = z.object({ select: CollaboratorSelectObjectSchema.optional(), include: CollaboratorIncludeObjectSchema.optional(), where: CollaboratorWhereUniqueInputObjectSchema }).strict();