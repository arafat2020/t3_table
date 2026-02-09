import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CollaboratorUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.CollaboratorUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorUpdateManyMutationInput>;
export const CollaboratorUpdateManyMutationInputObjectZodSchema = makeSchema();
