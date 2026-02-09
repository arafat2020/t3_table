import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CollaboratorUpdateManyMutationInputObjectSchema as CollaboratorUpdateManyMutationInputObjectSchema } from './objects/CollaboratorUpdateManyMutationInput.schema';
import { CollaboratorWhereInputObjectSchema as CollaboratorWhereInputObjectSchema } from './objects/CollaboratorWhereInput.schema';

export const CollaboratorUpdateManySchema: z.ZodType<Prisma.CollaboratorUpdateManyArgs> = z.object({ data: CollaboratorUpdateManyMutationInputObjectSchema, where: CollaboratorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CollaboratorUpdateManyArgs>;

export const CollaboratorUpdateManyZodSchema = z.object({ data: CollaboratorUpdateManyMutationInputObjectSchema, where: CollaboratorWhereInputObjectSchema.optional() }).strict();