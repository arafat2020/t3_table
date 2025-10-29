import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CellUncheckedUpdateManyWithoutRowNestedInputObjectSchema as CellUncheckedUpdateManyWithoutRowNestedInputObjectSchema } from './CellUncheckedUpdateManyWithoutRowNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  sheetId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  index: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  cells: z.lazy(() => CellUncheckedUpdateManyWithoutRowNestedInputObjectSchema).optional()
}).strict();
export const RowUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.RowUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.RowUncheckedUpdateInput>;
export const RowUncheckedUpdateInputObjectZodSchema = makeSchema();
