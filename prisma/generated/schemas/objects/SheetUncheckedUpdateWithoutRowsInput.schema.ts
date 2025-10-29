import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ColumnUncheckedUpdateManyWithoutSheetNestedInputObjectSchema as ColumnUncheckedUpdateManyWithoutSheetNestedInputObjectSchema } from './ColumnUncheckedUpdateManyWithoutSheetNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ownerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  projectId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Column: z.lazy(() => ColumnUncheckedUpdateManyWithoutSheetNestedInputObjectSchema).optional()
}).strict();
export const SheetUncheckedUpdateWithoutRowsInputObjectSchema: z.ZodType<Prisma.SheetUncheckedUpdateWithoutRowsInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetUncheckedUpdateWithoutRowsInput>;
export const SheetUncheckedUpdateWithoutRowsInputObjectZodSchema = makeSchema();
