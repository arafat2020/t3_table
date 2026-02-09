import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollaboratorWhereUniqueInputObjectSchema as CollaboratorWhereUniqueInputObjectSchema } from './CollaboratorWhereUniqueInput.schema';
import { CollaboratorUpdateWithoutSheetInputObjectSchema as CollaboratorUpdateWithoutSheetInputObjectSchema } from './CollaboratorUpdateWithoutSheetInput.schema';
import { CollaboratorUncheckedUpdateWithoutSheetInputObjectSchema as CollaboratorUncheckedUpdateWithoutSheetInputObjectSchema } from './CollaboratorUncheckedUpdateWithoutSheetInput.schema';
import { CollaboratorCreateWithoutSheetInputObjectSchema as CollaboratorCreateWithoutSheetInputObjectSchema } from './CollaboratorCreateWithoutSheetInput.schema';
import { CollaboratorUncheckedCreateWithoutSheetInputObjectSchema as CollaboratorUncheckedCreateWithoutSheetInputObjectSchema } from './CollaboratorUncheckedCreateWithoutSheetInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollaboratorWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CollaboratorUpdateWithoutSheetInputObjectSchema), z.lazy(() => CollaboratorUncheckedUpdateWithoutSheetInputObjectSchema)]),
  create: z.union([z.lazy(() => CollaboratorCreateWithoutSheetInputObjectSchema), z.lazy(() => CollaboratorUncheckedCreateWithoutSheetInputObjectSchema)])
}).strict();
export const CollaboratorUpsertWithWhereUniqueWithoutSheetInputObjectSchema: z.ZodType<Prisma.CollaboratorUpsertWithWhereUniqueWithoutSheetInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorUpsertWithWhereUniqueWithoutSheetInput>;
export const CollaboratorUpsertWithWhereUniqueWithoutSheetInputObjectZodSchema = makeSchema();
