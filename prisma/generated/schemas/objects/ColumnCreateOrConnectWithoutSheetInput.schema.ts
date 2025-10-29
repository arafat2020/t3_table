import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ColumnWhereUniqueInputObjectSchema as ColumnWhereUniqueInputObjectSchema } from './ColumnWhereUniqueInput.schema';
import { ColumnCreateWithoutSheetInputObjectSchema as ColumnCreateWithoutSheetInputObjectSchema } from './ColumnCreateWithoutSheetInput.schema';
import { ColumnUncheckedCreateWithoutSheetInputObjectSchema as ColumnUncheckedCreateWithoutSheetInputObjectSchema } from './ColumnUncheckedCreateWithoutSheetInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ColumnWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ColumnCreateWithoutSheetInputObjectSchema), z.lazy(() => ColumnUncheckedCreateWithoutSheetInputObjectSchema)])
}).strict();
export const ColumnCreateOrConnectWithoutSheetInputObjectSchema: z.ZodType<Prisma.ColumnCreateOrConnectWithoutSheetInput> = makeSchema() as unknown as z.ZodType<Prisma.ColumnCreateOrConnectWithoutSheetInput>;
export const ColumnCreateOrConnectWithoutSheetInputObjectZodSchema = makeSchema();
