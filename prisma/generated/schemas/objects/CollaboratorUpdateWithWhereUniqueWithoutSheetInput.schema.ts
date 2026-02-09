import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollaboratorWhereUniqueInputObjectSchema as CollaboratorWhereUniqueInputObjectSchema } from './CollaboratorWhereUniqueInput.schema';
import { CollaboratorUpdateWithoutSheetInputObjectSchema as CollaboratorUpdateWithoutSheetInputObjectSchema } from './CollaboratorUpdateWithoutSheetInput.schema';
import { CollaboratorUncheckedUpdateWithoutSheetInputObjectSchema as CollaboratorUncheckedUpdateWithoutSheetInputObjectSchema } from './CollaboratorUncheckedUpdateWithoutSheetInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollaboratorWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CollaboratorUpdateWithoutSheetInputObjectSchema), z.lazy(() => CollaboratorUncheckedUpdateWithoutSheetInputObjectSchema)])
}).strict();
export const CollaboratorUpdateWithWhereUniqueWithoutSheetInputObjectSchema: z.ZodType<Prisma.CollaboratorUpdateWithWhereUniqueWithoutSheetInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorUpdateWithWhereUniqueWithoutSheetInput>;
export const CollaboratorUpdateWithWhereUniqueWithoutSheetInputObjectZodSchema = makeSchema();
