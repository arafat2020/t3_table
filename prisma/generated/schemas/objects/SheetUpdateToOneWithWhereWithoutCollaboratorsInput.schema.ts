import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetWhereInputObjectSchema as SheetWhereInputObjectSchema } from './SheetWhereInput.schema';
import { SheetUpdateWithoutCollaboratorsInputObjectSchema as SheetUpdateWithoutCollaboratorsInputObjectSchema } from './SheetUpdateWithoutCollaboratorsInput.schema';
import { SheetUncheckedUpdateWithoutCollaboratorsInputObjectSchema as SheetUncheckedUpdateWithoutCollaboratorsInputObjectSchema } from './SheetUncheckedUpdateWithoutCollaboratorsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SheetWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SheetUpdateWithoutCollaboratorsInputObjectSchema), z.lazy(() => SheetUncheckedUpdateWithoutCollaboratorsInputObjectSchema)])
}).strict();
export const SheetUpdateToOneWithWhereWithoutCollaboratorsInputObjectSchema: z.ZodType<Prisma.SheetUpdateToOneWithWhereWithoutCollaboratorsInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetUpdateToOneWithWhereWithoutCollaboratorsInput>;
export const SheetUpdateToOneWithWhereWithoutCollaboratorsInputObjectZodSchema = makeSchema();
