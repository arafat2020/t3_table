import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CellCreateManyRowInputObjectSchema as CellCreateManyRowInputObjectSchema } from './CellCreateManyRowInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CellCreateManyRowInputObjectSchema), z.lazy(() => CellCreateManyRowInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CellCreateManyRowInputEnvelopeObjectSchema: z.ZodType<Prisma.CellCreateManyRowInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CellCreateManyRowInputEnvelope>;
export const CellCreateManyRowInputEnvelopeObjectZodSchema = makeSchema();
