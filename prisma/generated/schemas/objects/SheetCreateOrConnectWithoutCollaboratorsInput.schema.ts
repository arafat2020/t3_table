import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetWhereUniqueInputObjectSchema as SheetWhereUniqueInputObjectSchema } from './SheetWhereUniqueInput.schema';
import { SheetCreateWithoutCollaboratorsInputObjectSchema as SheetCreateWithoutCollaboratorsInputObjectSchema } from './SheetCreateWithoutCollaboratorsInput.schema';
import { SheetUncheckedCreateWithoutCollaboratorsInputObjectSchema as SheetUncheckedCreateWithoutCollaboratorsInputObjectSchema } from './SheetUncheckedCreateWithoutCollaboratorsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SheetWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SheetCreateWithoutCollaboratorsInputObjectSchema), z.lazy(() => SheetUncheckedCreateWithoutCollaboratorsInputObjectSchema)])
}).strict();
export const SheetCreateOrConnectWithoutCollaboratorsInputObjectSchema: z.ZodType<Prisma.SheetCreateOrConnectWithoutCollaboratorsInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetCreateOrConnectWithoutCollaboratorsInput>;
export const SheetCreateOrConnectWithoutCollaboratorsInputObjectZodSchema = makeSchema();
