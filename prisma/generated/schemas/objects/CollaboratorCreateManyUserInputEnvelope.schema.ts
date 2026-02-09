import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollaboratorCreateManyUserInputObjectSchema as CollaboratorCreateManyUserInputObjectSchema } from './CollaboratorCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CollaboratorCreateManyUserInputObjectSchema), z.lazy(() => CollaboratorCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CollaboratorCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.CollaboratorCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorCreateManyUserInputEnvelope>;
export const CollaboratorCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
