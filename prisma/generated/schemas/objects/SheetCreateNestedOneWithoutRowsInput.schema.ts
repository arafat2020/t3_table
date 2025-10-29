import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetCreateWithoutRowsInputObjectSchema as SheetCreateWithoutRowsInputObjectSchema } from './SheetCreateWithoutRowsInput.schema';
import { SheetUncheckedCreateWithoutRowsInputObjectSchema as SheetUncheckedCreateWithoutRowsInputObjectSchema } from './SheetUncheckedCreateWithoutRowsInput.schema';
import { SheetCreateOrConnectWithoutRowsInputObjectSchema as SheetCreateOrConnectWithoutRowsInputObjectSchema } from './SheetCreateOrConnectWithoutRowsInput.schema';
import { SheetWhereUniqueInputObjectSchema as SheetWhereUniqueInputObjectSchema } from './SheetWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SheetCreateWithoutRowsInputObjectSchema), z.lazy(() => SheetUncheckedCreateWithoutRowsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SheetCreateOrConnectWithoutRowsInputObjectSchema).optional(),
  connect: z.lazy(() => SheetWhereUniqueInputObjectSchema).optional()
}).strict();
export const SheetCreateNestedOneWithoutRowsInputObjectSchema: z.ZodType<Prisma.SheetCreateNestedOneWithoutRowsInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetCreateNestedOneWithoutRowsInput>;
export const SheetCreateNestedOneWithoutRowsInputObjectZodSchema = makeSchema();
