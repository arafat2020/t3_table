import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CollaboratorUncheckedUpdateManyWithoutSheetInputObjectSchema: z.ZodType<Prisma.CollaboratorUncheckedUpdateManyWithoutSheetInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorUncheckedUpdateManyWithoutSheetInput>;
export const CollaboratorUncheckedUpdateManyWithoutSheetInputObjectZodSchema = makeSchema();
