import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollaboratorWhereUniqueInputObjectSchema as CollaboratorWhereUniqueInputObjectSchema } from './CollaboratorWhereUniqueInput.schema';
import { CollaboratorCreateWithoutUserInputObjectSchema as CollaboratorCreateWithoutUserInputObjectSchema } from './CollaboratorCreateWithoutUserInput.schema';
import { CollaboratorUncheckedCreateWithoutUserInputObjectSchema as CollaboratorUncheckedCreateWithoutUserInputObjectSchema } from './CollaboratorUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollaboratorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CollaboratorCreateWithoutUserInputObjectSchema), z.lazy(() => CollaboratorUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const CollaboratorCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.CollaboratorCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorCreateOrConnectWithoutUserInput>;
export const CollaboratorCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
