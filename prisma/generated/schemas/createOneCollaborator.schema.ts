import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CollaboratorSelectObjectSchema as CollaboratorSelectObjectSchema } from './objects/CollaboratorSelect.schema';
import { CollaboratorIncludeObjectSchema as CollaboratorIncludeObjectSchema } from './objects/CollaboratorInclude.schema';
import { CollaboratorCreateInputObjectSchema as CollaboratorCreateInputObjectSchema } from './objects/CollaboratorCreateInput.schema';
import { CollaboratorUncheckedCreateInputObjectSchema as CollaboratorUncheckedCreateInputObjectSchema } from './objects/CollaboratorUncheckedCreateInput.schema';

export const CollaboratorCreateOneSchema: z.ZodType<Prisma.CollaboratorCreateArgs> = z.object({ select: CollaboratorSelectObjectSchema.optional(), include: CollaboratorIncludeObjectSchema.optional(), data: z.union([CollaboratorCreateInputObjectSchema, CollaboratorUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CollaboratorCreateArgs>;

export const CollaboratorCreateOneZodSchema = z.object({ select: CollaboratorSelectObjectSchema.optional(), include: CollaboratorIncludeObjectSchema.optional(), data: z.union([CollaboratorCreateInputObjectSchema, CollaboratorUncheckedCreateInputObjectSchema]) }).strict();