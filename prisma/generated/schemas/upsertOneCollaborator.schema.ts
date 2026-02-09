import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CollaboratorSelectObjectSchema as CollaboratorSelectObjectSchema } from './objects/CollaboratorSelect.schema';
import { CollaboratorIncludeObjectSchema as CollaboratorIncludeObjectSchema } from './objects/CollaboratorInclude.schema';
import { CollaboratorWhereUniqueInputObjectSchema as CollaboratorWhereUniqueInputObjectSchema } from './objects/CollaboratorWhereUniqueInput.schema';
import { CollaboratorCreateInputObjectSchema as CollaboratorCreateInputObjectSchema } from './objects/CollaboratorCreateInput.schema';
import { CollaboratorUncheckedCreateInputObjectSchema as CollaboratorUncheckedCreateInputObjectSchema } from './objects/CollaboratorUncheckedCreateInput.schema';
import { CollaboratorUpdateInputObjectSchema as CollaboratorUpdateInputObjectSchema } from './objects/CollaboratorUpdateInput.schema';
import { CollaboratorUncheckedUpdateInputObjectSchema as CollaboratorUncheckedUpdateInputObjectSchema } from './objects/CollaboratorUncheckedUpdateInput.schema';

export const CollaboratorUpsertOneSchema: z.ZodType<Prisma.CollaboratorUpsertArgs> = z.object({ select: CollaboratorSelectObjectSchema.optional(), include: CollaboratorIncludeObjectSchema.optional(), where: CollaboratorWhereUniqueInputObjectSchema, create: z.union([ CollaboratorCreateInputObjectSchema, CollaboratorUncheckedCreateInputObjectSchema ]), update: z.union([ CollaboratorUpdateInputObjectSchema, CollaboratorUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CollaboratorUpsertArgs>;

export const CollaboratorUpsertOneZodSchema = z.object({ select: CollaboratorSelectObjectSchema.optional(), include: CollaboratorIncludeObjectSchema.optional(), where: CollaboratorWhereUniqueInputObjectSchema, create: z.union([ CollaboratorCreateInputObjectSchema, CollaboratorUncheckedCreateInputObjectSchema ]), update: z.union([ CollaboratorUpdateInputObjectSchema, CollaboratorUncheckedUpdateInputObjectSchema ]) }).strict();