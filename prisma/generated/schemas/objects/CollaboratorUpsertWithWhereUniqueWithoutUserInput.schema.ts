import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollaboratorWhereUniqueInputObjectSchema as CollaboratorWhereUniqueInputObjectSchema } from './CollaboratorWhereUniqueInput.schema';
import { CollaboratorUpdateWithoutUserInputObjectSchema as CollaboratorUpdateWithoutUserInputObjectSchema } from './CollaboratorUpdateWithoutUserInput.schema';
import { CollaboratorUncheckedUpdateWithoutUserInputObjectSchema as CollaboratorUncheckedUpdateWithoutUserInputObjectSchema } from './CollaboratorUncheckedUpdateWithoutUserInput.schema';
import { CollaboratorCreateWithoutUserInputObjectSchema as CollaboratorCreateWithoutUserInputObjectSchema } from './CollaboratorCreateWithoutUserInput.schema';
import { CollaboratorUncheckedCreateWithoutUserInputObjectSchema as CollaboratorUncheckedCreateWithoutUserInputObjectSchema } from './CollaboratorUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollaboratorWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CollaboratorUpdateWithoutUserInputObjectSchema), z.lazy(() => CollaboratorUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => CollaboratorCreateWithoutUserInputObjectSchema), z.lazy(() => CollaboratorUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const CollaboratorUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.CollaboratorUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorUpsertWithWhereUniqueWithoutUserInput>;
export const CollaboratorUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
