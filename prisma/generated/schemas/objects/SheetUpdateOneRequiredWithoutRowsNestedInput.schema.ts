import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetCreateWithoutRowsInputObjectSchema as SheetCreateWithoutRowsInputObjectSchema } from './SheetCreateWithoutRowsInput.schema';
import { SheetUncheckedCreateWithoutRowsInputObjectSchema as SheetUncheckedCreateWithoutRowsInputObjectSchema } from './SheetUncheckedCreateWithoutRowsInput.schema';
import { SheetCreateOrConnectWithoutRowsInputObjectSchema as SheetCreateOrConnectWithoutRowsInputObjectSchema } from './SheetCreateOrConnectWithoutRowsInput.schema';
import { SheetUpsertWithoutRowsInputObjectSchema as SheetUpsertWithoutRowsInputObjectSchema } from './SheetUpsertWithoutRowsInput.schema';
import { SheetWhereUniqueInputObjectSchema as SheetWhereUniqueInputObjectSchema } from './SheetWhereUniqueInput.schema';
import { SheetUpdateToOneWithWhereWithoutRowsInputObjectSchema as SheetUpdateToOneWithWhereWithoutRowsInputObjectSchema } from './SheetUpdateToOneWithWhereWithoutRowsInput.schema';
import { SheetUpdateWithoutRowsInputObjectSchema as SheetUpdateWithoutRowsInputObjectSchema } from './SheetUpdateWithoutRowsInput.schema';
import { SheetUncheckedUpdateWithoutRowsInputObjectSchema as SheetUncheckedUpdateWithoutRowsInputObjectSchema } from './SheetUncheckedUpdateWithoutRowsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SheetCreateWithoutRowsInputObjectSchema), z.lazy(() => SheetUncheckedCreateWithoutRowsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SheetCreateOrConnectWithoutRowsInputObjectSchema).optional(),
  upsert: z.lazy(() => SheetUpsertWithoutRowsInputObjectSchema).optional(),
  connect: z.lazy(() => SheetWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SheetUpdateToOneWithWhereWithoutRowsInputObjectSchema), z.lazy(() => SheetUpdateWithoutRowsInputObjectSchema), z.lazy(() => SheetUncheckedUpdateWithoutRowsInputObjectSchema)]).optional()
}).strict();
export const SheetUpdateOneRequiredWithoutRowsNestedInputObjectSchema: z.ZodType<Prisma.SheetUpdateOneRequiredWithoutRowsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetUpdateOneRequiredWithoutRowsNestedInput>;
export const SheetUpdateOneRequiredWithoutRowsNestedInputObjectZodSchema = makeSchema();
