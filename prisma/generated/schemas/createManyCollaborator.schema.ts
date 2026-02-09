import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CollaboratorCreateManyInputObjectSchema as CollaboratorCreateManyInputObjectSchema } from './objects/CollaboratorCreateManyInput.schema';

export const CollaboratorCreateManySchema: z.ZodType<Prisma.CollaboratorCreateManyArgs> = z.object({ data: z.union([ CollaboratorCreateManyInputObjectSchema, z.array(CollaboratorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CollaboratorCreateManyArgs>;

export const CollaboratorCreateManyZodSchema = z.object({ data: z.union([ CollaboratorCreateManyInputObjectSchema, z.array(CollaboratorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();