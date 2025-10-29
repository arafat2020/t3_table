import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CellUpdateManyWithoutRowNestedInputObjectSchema as CellUpdateManyWithoutRowNestedInputObjectSchema } from './CellUpdateManyWithoutRowNestedInput.schema';
import { SheetUpdateOneRequiredWithoutRowsNestedInputObjectSchema as SheetUpdateOneRequiredWithoutRowsNestedInputObjectSchema } from './SheetUpdateOneRequiredWithoutRowsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  index: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  cells: z.lazy(() => CellUpdateManyWithoutRowNestedInputObjectSchema).optional(),
  Sheet: z.lazy(() => SheetUpdateOneRequiredWithoutRowsNestedInputObjectSchema).optional()
}).strict();
export const RowUpdateInputObjectSchema: z.ZodType<Prisma.RowUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.RowUpdateInput>;
export const RowUpdateInputObjectZodSchema = makeSchema();
