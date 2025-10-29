import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetWhereUniqueInputObjectSchema as SheetWhereUniqueInputObjectSchema } from './SheetWhereUniqueInput.schema';
import { SheetCreateWithoutRowsInputObjectSchema as SheetCreateWithoutRowsInputObjectSchema } from './SheetCreateWithoutRowsInput.schema';
import { SheetUncheckedCreateWithoutRowsInputObjectSchema as SheetUncheckedCreateWithoutRowsInputObjectSchema } from './SheetUncheckedCreateWithoutRowsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SheetWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SheetCreateWithoutRowsInputObjectSchema), z.lazy(() => SheetUncheckedCreateWithoutRowsInputObjectSchema)])
}).strict();
export const SheetCreateOrConnectWithoutRowsInputObjectSchema: z.ZodType<Prisma.SheetCreateOrConnectWithoutRowsInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetCreateOrConnectWithoutRowsInput>;
export const SheetCreateOrConnectWithoutRowsInputObjectZodSchema = makeSchema();
