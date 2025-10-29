import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RowWhereUniqueInputObjectSchema as RowWhereUniqueInputObjectSchema } from './RowWhereUniqueInput.schema';
import { RowCreateWithoutSheetInputObjectSchema as RowCreateWithoutSheetInputObjectSchema } from './RowCreateWithoutSheetInput.schema';
import { RowUncheckedCreateWithoutSheetInputObjectSchema as RowUncheckedCreateWithoutSheetInputObjectSchema } from './RowUncheckedCreateWithoutSheetInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RowWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RowCreateWithoutSheetInputObjectSchema), z.lazy(() => RowUncheckedCreateWithoutSheetInputObjectSchema)])
}).strict();
export const RowCreateOrConnectWithoutSheetInputObjectSchema: z.ZodType<Prisma.RowCreateOrConnectWithoutSheetInput> = makeSchema() as unknown as z.ZodType<Prisma.RowCreateOrConnectWithoutSheetInput>;
export const RowCreateOrConnectWithoutSheetInputObjectZodSchema = makeSchema();
