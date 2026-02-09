import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetUpdateWithoutCollaboratorsInputObjectSchema as SheetUpdateWithoutCollaboratorsInputObjectSchema } from './SheetUpdateWithoutCollaboratorsInput.schema';
import { SheetUncheckedUpdateWithoutCollaboratorsInputObjectSchema as SheetUncheckedUpdateWithoutCollaboratorsInputObjectSchema } from './SheetUncheckedUpdateWithoutCollaboratorsInput.schema';
import { SheetCreateWithoutCollaboratorsInputObjectSchema as SheetCreateWithoutCollaboratorsInputObjectSchema } from './SheetCreateWithoutCollaboratorsInput.schema';
import { SheetUncheckedCreateWithoutCollaboratorsInputObjectSchema as SheetUncheckedCreateWithoutCollaboratorsInputObjectSchema } from './SheetUncheckedCreateWithoutCollaboratorsInput.schema';
import { SheetWhereInputObjectSchema as SheetWhereInputObjectSchema } from './SheetWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SheetUpdateWithoutCollaboratorsInputObjectSchema), z.lazy(() => SheetUncheckedUpdateWithoutCollaboratorsInputObjectSchema)]),
  create: z.union([z.lazy(() => SheetCreateWithoutCollaboratorsInputObjectSchema), z.lazy(() => SheetUncheckedCreateWithoutCollaboratorsInputObjectSchema)]),
  where: z.lazy(() => SheetWhereInputObjectSchema).optional()
}).strict();
export const SheetUpsertWithoutCollaboratorsInputObjectSchema: z.ZodType<Prisma.SheetUpsertWithoutCollaboratorsInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetUpsertWithoutCollaboratorsInput>;
export const SheetUpsertWithoutCollaboratorsInputObjectZodSchema = makeSchema();
