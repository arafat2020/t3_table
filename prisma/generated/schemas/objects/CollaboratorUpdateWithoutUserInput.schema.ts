import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { SheetUpdateOneRequiredWithoutCollaboratorsNestedInputObjectSchema as SheetUpdateOneRequiredWithoutCollaboratorsNestedInputObjectSchema } from './SheetUpdateOneRequiredWithoutCollaboratorsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  sheet: z.lazy(() => SheetUpdateOneRequiredWithoutCollaboratorsNestedInputObjectSchema).optional()
}).strict();
export const CollaboratorUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.CollaboratorUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorUpdateWithoutUserInput>;
export const CollaboratorUpdateWithoutUserInputObjectZodSchema = makeSchema();
