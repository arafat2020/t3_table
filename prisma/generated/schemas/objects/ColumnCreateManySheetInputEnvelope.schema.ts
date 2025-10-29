import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ColumnCreateManySheetInputObjectSchema as ColumnCreateManySheetInputObjectSchema } from './ColumnCreateManySheetInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ColumnCreateManySheetInputObjectSchema), z.lazy(() => ColumnCreateManySheetInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ColumnCreateManySheetInputEnvelopeObjectSchema: z.ZodType<Prisma.ColumnCreateManySheetInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ColumnCreateManySheetInputEnvelope>;
export const ColumnCreateManySheetInputEnvelopeObjectZodSchema = makeSchema();
