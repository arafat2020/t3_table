import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetWhereInputObjectSchema as SheetWhereInputObjectSchema } from './SheetWhereInput.schema';
import { SheetUpdateWithoutColumnInputObjectSchema as SheetUpdateWithoutColumnInputObjectSchema } from './SheetUpdateWithoutColumnInput.schema';
import { SheetUncheckedUpdateWithoutColumnInputObjectSchema as SheetUncheckedUpdateWithoutColumnInputObjectSchema } from './SheetUncheckedUpdateWithoutColumnInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SheetWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SheetUpdateWithoutColumnInputObjectSchema), z.lazy(() => SheetUncheckedUpdateWithoutColumnInputObjectSchema)])
}).strict();
export const SheetUpdateToOneWithWhereWithoutColumnInputObjectSchema: z.ZodType<Prisma.SheetUpdateToOneWithWhereWithoutColumnInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetUpdateToOneWithWhereWithoutColumnInput>;
export const SheetUpdateToOneWithWhereWithoutColumnInputObjectZodSchema = makeSchema();
