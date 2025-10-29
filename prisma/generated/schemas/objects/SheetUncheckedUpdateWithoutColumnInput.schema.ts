import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { RowUncheckedUpdateManyWithoutSheetNestedInputObjectSchema as RowUncheckedUpdateManyWithoutSheetNestedInputObjectSchema } from './RowUncheckedUpdateManyWithoutSheetNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ownerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  projectId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  rows: z.lazy(() => RowUncheckedUpdateManyWithoutSheetNestedInputObjectSchema).optional()
}).strict();
export const SheetUncheckedUpdateWithoutColumnInputObjectSchema: z.ZodType<Prisma.SheetUncheckedUpdateWithoutColumnInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetUncheckedUpdateWithoutColumnInput>;
export const SheetUncheckedUpdateWithoutColumnInputObjectZodSchema = makeSchema();
