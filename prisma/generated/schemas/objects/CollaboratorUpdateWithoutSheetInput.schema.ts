import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutSharedSheetsNestedInputObjectSchema as UserUpdateOneRequiredWithoutSharedSheetsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutSharedSheetsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSharedSheetsNestedInputObjectSchema).optional()
}).strict();
export const CollaboratorUpdateWithoutSheetInputObjectSchema: z.ZodType<Prisma.CollaboratorUpdateWithoutSheetInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorUpdateWithoutSheetInput>;
export const CollaboratorUpdateWithoutSheetInputObjectZodSchema = makeSchema();
