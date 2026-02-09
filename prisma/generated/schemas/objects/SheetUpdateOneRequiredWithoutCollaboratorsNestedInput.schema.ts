import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetCreateWithoutCollaboratorsInputObjectSchema as SheetCreateWithoutCollaboratorsInputObjectSchema } from './SheetCreateWithoutCollaboratorsInput.schema';
import { SheetUncheckedCreateWithoutCollaboratorsInputObjectSchema as SheetUncheckedCreateWithoutCollaboratorsInputObjectSchema } from './SheetUncheckedCreateWithoutCollaboratorsInput.schema';
import { SheetCreateOrConnectWithoutCollaboratorsInputObjectSchema as SheetCreateOrConnectWithoutCollaboratorsInputObjectSchema } from './SheetCreateOrConnectWithoutCollaboratorsInput.schema';
import { SheetUpsertWithoutCollaboratorsInputObjectSchema as SheetUpsertWithoutCollaboratorsInputObjectSchema } from './SheetUpsertWithoutCollaboratorsInput.schema';
import { SheetWhereUniqueInputObjectSchema as SheetWhereUniqueInputObjectSchema } from './SheetWhereUniqueInput.schema';
import { SheetUpdateToOneWithWhereWithoutCollaboratorsInputObjectSchema as SheetUpdateToOneWithWhereWithoutCollaboratorsInputObjectSchema } from './SheetUpdateToOneWithWhereWithoutCollaboratorsInput.schema';
import { SheetUpdateWithoutCollaboratorsInputObjectSchema as SheetUpdateWithoutCollaboratorsInputObjectSchema } from './SheetUpdateWithoutCollaboratorsInput.schema';
import { SheetUncheckedUpdateWithoutCollaboratorsInputObjectSchema as SheetUncheckedUpdateWithoutCollaboratorsInputObjectSchema } from './SheetUncheckedUpdateWithoutCollaboratorsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SheetCreateWithoutCollaboratorsInputObjectSchema), z.lazy(() => SheetUncheckedCreateWithoutCollaboratorsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SheetCreateOrConnectWithoutCollaboratorsInputObjectSchema).optional(),
  upsert: z.lazy(() => SheetUpsertWithoutCollaboratorsInputObjectSchema).optional(),
  connect: z.lazy(() => SheetWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SheetUpdateToOneWithWhereWithoutCollaboratorsInputObjectSchema), z.lazy(() => SheetUpdateWithoutCollaboratorsInputObjectSchema), z.lazy(() => SheetUncheckedUpdateWithoutCollaboratorsInputObjectSchema)]).optional()
}).strict();
export const SheetUpdateOneRequiredWithoutCollaboratorsNestedInputObjectSchema: z.ZodType<Prisma.SheetUpdateOneRequiredWithoutCollaboratorsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetUpdateOneRequiredWithoutCollaboratorsNestedInput>;
export const SheetUpdateOneRequiredWithoutCollaboratorsNestedInputObjectZodSchema = makeSchema();
