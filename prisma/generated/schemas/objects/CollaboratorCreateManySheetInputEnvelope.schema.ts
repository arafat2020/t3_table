import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollaboratorCreateManySheetInputObjectSchema as CollaboratorCreateManySheetInputObjectSchema } from './CollaboratorCreateManySheetInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CollaboratorCreateManySheetInputObjectSchema), z.lazy(() => CollaboratorCreateManySheetInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CollaboratorCreateManySheetInputEnvelopeObjectSchema: z.ZodType<Prisma.CollaboratorCreateManySheetInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorCreateManySheetInputEnvelope>;
export const CollaboratorCreateManySheetInputEnvelopeObjectZodSchema = makeSchema();
