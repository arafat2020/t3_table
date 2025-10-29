import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { RowUncheckedUpdateManyWithoutSheetNestedInputObjectSchema as RowUncheckedUpdateManyWithoutSheetNestedInputObjectSchema } from './RowUncheckedUpdateManyWithoutSheetNestedInput.schema';
import { ColumnUncheckedUpdateManyWithoutSheetNestedInputObjectSchema as ColumnUncheckedUpdateManyWithoutSheetNestedInputObjectSchema } from './ColumnUncheckedUpdateManyWithoutSheetNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ownerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  rows: z.lazy(() => RowUncheckedUpdateManyWithoutSheetNestedInputObjectSchema).optional(),
  Column: z.lazy(() => ColumnUncheckedUpdateManyWithoutSheetNestedInputObjectSchema).optional()
}).strict();
export const SheetUncheckedUpdateWithoutProjectInputObjectSchema: z.ZodType<Prisma.SheetUncheckedUpdateWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetUncheckedUpdateWithoutProjectInput>;
export const SheetUncheckedUpdateWithoutProjectInputObjectZodSchema = makeSchema();
