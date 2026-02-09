import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetCreateWithoutCollaboratorsInputObjectSchema as SheetCreateWithoutCollaboratorsInputObjectSchema } from './SheetCreateWithoutCollaboratorsInput.schema';
import { SheetUncheckedCreateWithoutCollaboratorsInputObjectSchema as SheetUncheckedCreateWithoutCollaboratorsInputObjectSchema } from './SheetUncheckedCreateWithoutCollaboratorsInput.schema';
import { SheetCreateOrConnectWithoutCollaboratorsInputObjectSchema as SheetCreateOrConnectWithoutCollaboratorsInputObjectSchema } from './SheetCreateOrConnectWithoutCollaboratorsInput.schema';
import { SheetWhereUniqueInputObjectSchema as SheetWhereUniqueInputObjectSchema } from './SheetWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SheetCreateWithoutCollaboratorsInputObjectSchema), z.lazy(() => SheetUncheckedCreateWithoutCollaboratorsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SheetCreateOrConnectWithoutCollaboratorsInputObjectSchema).optional(),
  connect: z.lazy(() => SheetWhereUniqueInputObjectSchema).optional()
}).strict();
export const SheetCreateNestedOneWithoutCollaboratorsInputObjectSchema: z.ZodType<Prisma.SheetCreateNestedOneWithoutCollaboratorsInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetCreateNestedOneWithoutCollaboratorsInput>;
export const SheetCreateNestedOneWithoutCollaboratorsInputObjectZodSchema = makeSchema();
