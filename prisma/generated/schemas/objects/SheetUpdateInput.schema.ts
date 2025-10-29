import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProjectUpdateOneWithoutSheetsNestedInputObjectSchema as ProjectUpdateOneWithoutSheetsNestedInputObjectSchema } from './ProjectUpdateOneWithoutSheetsNestedInput.schema';
import { RowUpdateManyWithoutSheetNestedInputObjectSchema as RowUpdateManyWithoutSheetNestedInputObjectSchema } from './RowUpdateManyWithoutSheetNestedInput.schema';
import { ColumnUpdateManyWithoutSheetNestedInputObjectSchema as ColumnUpdateManyWithoutSheetNestedInputObjectSchema } from './ColumnUpdateManyWithoutSheetNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ownerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  Project: z.lazy(() => ProjectUpdateOneWithoutSheetsNestedInputObjectSchema).optional(),
  rows: z.lazy(() => RowUpdateManyWithoutSheetNestedInputObjectSchema).optional(),
  Column: z.lazy(() => ColumnUpdateManyWithoutSheetNestedInputObjectSchema).optional()
}).strict();
export const SheetUpdateInputObjectSchema: z.ZodType<Prisma.SheetUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetUpdateInput>;
export const SheetUpdateInputObjectZodSchema = makeSchema();
