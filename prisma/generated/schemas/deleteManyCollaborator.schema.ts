import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CollaboratorWhereInputObjectSchema as CollaboratorWhereInputObjectSchema } from './objects/CollaboratorWhereInput.schema';

export const CollaboratorDeleteManySchema: z.ZodType<Prisma.CollaboratorDeleteManyArgs> = z.object({ where: CollaboratorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CollaboratorDeleteManyArgs>;

export const CollaboratorDeleteManyZodSchema = z.object({ where: CollaboratorWhereInputObjectSchema.optional() }).strict();