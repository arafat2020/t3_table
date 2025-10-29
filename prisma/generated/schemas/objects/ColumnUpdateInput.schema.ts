import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { SheetUpdateOneRequiredWithoutColumnNestedInputObjectSchema as SheetUpdateOneRequiredWithoutColumnNestedInputObjectSchema } from './SheetUpdateOneRequiredWithoutColumnNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  index: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  sheet: z.lazy(() => SheetUpdateOneRequiredWithoutColumnNestedInputObjectSchema).optional()
}).strict();
export const ColumnUpdateInputObjectSchema: z.ZodType<Prisma.ColumnUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ColumnUpdateInput>;
export const ColumnUpdateInputObjectZodSchema = makeSchema();
