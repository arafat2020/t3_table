import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { SheetUpdateOneRequiredWithoutCollaboratorsNestedInputObjectSchema as SheetUpdateOneRequiredWithoutCollaboratorsNestedInputObjectSchema } from './SheetUpdateOneRequiredWithoutCollaboratorsNestedInput.schema';
import { UserUpdateOneRequiredWithoutSharedSheetsNestedInputObjectSchema as UserUpdateOneRequiredWithoutSharedSheetsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutSharedSheetsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  sheet: z.lazy(() => SheetUpdateOneRequiredWithoutCollaboratorsNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSharedSheetsNestedInputObjectSchema).optional()
}).strict();
export const CollaboratorUpdateInputObjectSchema: z.ZodType<Prisma.CollaboratorUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorUpdateInput>;
export const CollaboratorUpdateInputObjectZodSchema = makeSchema();
