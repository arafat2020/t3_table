import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollaboratorScalarWhereInputObjectSchema as CollaboratorScalarWhereInputObjectSchema } from './CollaboratorScalarWhereInput.schema';
import { CollaboratorUpdateManyMutationInputObjectSchema as CollaboratorUpdateManyMutationInputObjectSchema } from './CollaboratorUpdateManyMutationInput.schema';
import { CollaboratorUncheckedUpdateManyWithoutUserInputObjectSchema as CollaboratorUncheckedUpdateManyWithoutUserInputObjectSchema } from './CollaboratorUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollaboratorScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CollaboratorUpdateManyMutationInputObjectSchema), z.lazy(() => CollaboratorUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const CollaboratorUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.CollaboratorUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorUpdateManyWithWhereWithoutUserInput>;
export const CollaboratorUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
