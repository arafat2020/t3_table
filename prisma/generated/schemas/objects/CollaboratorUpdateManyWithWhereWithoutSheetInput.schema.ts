import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollaboratorScalarWhereInputObjectSchema as CollaboratorScalarWhereInputObjectSchema } from './CollaboratorScalarWhereInput.schema';
import { CollaboratorUpdateManyMutationInputObjectSchema as CollaboratorUpdateManyMutationInputObjectSchema } from './CollaboratorUpdateManyMutationInput.schema';
import { CollaboratorUncheckedUpdateManyWithoutSheetInputObjectSchema as CollaboratorUncheckedUpdateManyWithoutSheetInputObjectSchema } from './CollaboratorUncheckedUpdateManyWithoutSheetInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollaboratorScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CollaboratorUpdateManyMutationInputObjectSchema), z.lazy(() => CollaboratorUncheckedUpdateManyWithoutSheetInputObjectSchema)])
}).strict();
export const CollaboratorUpdateManyWithWhereWithoutSheetInputObjectSchema: z.ZodType<Prisma.CollaboratorUpdateManyWithWhereWithoutSheetInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorUpdateManyWithWhereWithoutSheetInput>;
export const CollaboratorUpdateManyWithWhereWithoutSheetInputObjectZodSchema = makeSchema();
