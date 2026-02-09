import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollaboratorWhereUniqueInputObjectSchema as CollaboratorWhereUniqueInputObjectSchema } from './CollaboratorWhereUniqueInput.schema';
import { CollaboratorUpdateWithoutUserInputObjectSchema as CollaboratorUpdateWithoutUserInputObjectSchema } from './CollaboratorUpdateWithoutUserInput.schema';
import { CollaboratorUncheckedUpdateWithoutUserInputObjectSchema as CollaboratorUncheckedUpdateWithoutUserInputObjectSchema } from './CollaboratorUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollaboratorWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CollaboratorUpdateWithoutUserInputObjectSchema), z.lazy(() => CollaboratorUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const CollaboratorUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.CollaboratorUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorUpdateWithWhereUniqueWithoutUserInput>;
export const CollaboratorUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
