import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CellUpdateManyWithoutRowNestedInputObjectSchema as CellUpdateManyWithoutRowNestedInputObjectSchema } from './CellUpdateManyWithoutRowNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  index: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  cells: z.lazy(() => CellUpdateManyWithoutRowNestedInputObjectSchema).optional()
}).strict();
export const RowUpdateWithoutSheetInputObjectSchema: z.ZodType<Prisma.RowUpdateWithoutSheetInput> = makeSchema() as unknown as z.ZodType<Prisma.RowUpdateWithoutSheetInput>;
export const RowUpdateWithoutSheetInputObjectZodSchema = makeSchema();
