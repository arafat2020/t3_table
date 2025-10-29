import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RowCreateManySheetInputObjectSchema as RowCreateManySheetInputObjectSchema } from './RowCreateManySheetInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RowCreateManySheetInputObjectSchema), z.lazy(() => RowCreateManySheetInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RowCreateManySheetInputEnvelopeObjectSchema: z.ZodType<Prisma.RowCreateManySheetInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RowCreateManySheetInputEnvelope>;
export const RowCreateManySheetInputEnvelopeObjectZodSchema = makeSchema();
