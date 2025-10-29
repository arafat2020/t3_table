import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { RowUpdateManyWithoutSheetNestedInputObjectSchema as RowUpdateManyWithoutSheetNestedInputObjectSchema } from './RowUpdateManyWithoutSheetNestedInput.schema';
import { ColumnUpdateManyWithoutSheetNestedInputObjectSchema as ColumnUpdateManyWithoutSheetNestedInputObjectSchema } from './ColumnUpdateManyWithoutSheetNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ownerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  rows: z.lazy(() => RowUpdateManyWithoutSheetNestedInputObjectSchema).optional(),
  Column: z.lazy(() => ColumnUpdateManyWithoutSheetNestedInputObjectSchema).optional()
}).strict();
export const SheetUpdateWithoutProjectInputObjectSchema: z.ZodType<Prisma.SheetUpdateWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetUpdateWithoutProjectInput>;
export const SheetUpdateWithoutProjectInputObjectZodSchema = makeSchema();
