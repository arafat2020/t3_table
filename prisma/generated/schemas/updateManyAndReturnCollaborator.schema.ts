import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CollaboratorSelectObjectSchema as CollaboratorSelectObjectSchema } from './objects/CollaboratorSelect.schema';
import { CollaboratorUpdateManyMutationInputObjectSchema as CollaboratorUpdateManyMutationInputObjectSchema } from './objects/CollaboratorUpdateManyMutationInput.schema';
import { CollaboratorWhereInputObjectSchema as CollaboratorWhereInputObjectSchema } from './objects/CollaboratorWhereInput.schema';

export const CollaboratorUpdateManyAndReturnSchema: z.ZodType<Prisma.CollaboratorUpdateManyAndReturnArgs> = z.object({ select: CollaboratorSelectObjectSchema.optional(), data: CollaboratorUpdateManyMutationInputObjectSchema, where: CollaboratorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CollaboratorUpdateManyAndReturnArgs>;

export const CollaboratorUpdateManyAndReturnZodSchema = z.object({ select: CollaboratorSelectObjectSchema.optional(), data: CollaboratorUpdateManyMutationInputObjectSchema, where: CollaboratorWhereInputObjectSchema.optional() }).strict();