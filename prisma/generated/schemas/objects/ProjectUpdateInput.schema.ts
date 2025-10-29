import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutProjectsNestedInputObjectSchema as UserUpdateOneWithoutProjectsNestedInputObjectSchema } from './UserUpdateOneWithoutProjectsNestedInput.schema';
import { SheetUpdateManyWithoutProjectNestedInputObjectSchema as SheetUpdateManyWithoutProjectNestedInputObjectSchema } from './SheetUpdateManyWithoutProjectNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  User: z.lazy(() => UserUpdateOneWithoutProjectsNestedInputObjectSchema).optional(),
  sheets: z.lazy(() => SheetUpdateManyWithoutProjectNestedInputObjectSchema).optional()
}).strict();
export const ProjectUpdateInputObjectSchema: z.ZodType<Prisma.ProjectUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateInput>;
export const ProjectUpdateInputObjectZodSchema = makeSchema();
