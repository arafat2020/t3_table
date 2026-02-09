import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CollaboratorSelectObjectSchema as CollaboratorSelectObjectSchema } from './objects/CollaboratorSelect.schema';
import { CollaboratorCreateManyInputObjectSchema as CollaboratorCreateManyInputObjectSchema } from './objects/CollaboratorCreateManyInput.schema';

export const CollaboratorCreateManyAndReturnSchema: z.ZodType<Prisma.CollaboratorCreateManyAndReturnArgs> = z.object({ select: CollaboratorSelectObjectSchema.optional(), data: z.union([ CollaboratorCreateManyInputObjectSchema, z.array(CollaboratorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CollaboratorCreateManyAndReturnArgs>;

export const CollaboratorCreateManyAndReturnZodSchema = z.object({ select: CollaboratorSelectObjectSchema.optional(), data: z.union([ CollaboratorCreateManyInputObjectSchema, z.array(CollaboratorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();