import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetCreateManyProjectInputObjectSchema as SheetCreateManyProjectInputObjectSchema } from './SheetCreateManyProjectInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SheetCreateManyProjectInputObjectSchema), z.lazy(() => SheetCreateManyProjectInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SheetCreateManyProjectInputEnvelopeObjectSchema: z.ZodType<Prisma.SheetCreateManyProjectInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SheetCreateManyProjectInputEnvelope>;
export const SheetCreateManyProjectInputEnvelopeObjectZodSchema = makeSchema();
