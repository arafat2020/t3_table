import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollaboratorWhereUniqueInputObjectSchema as CollaboratorWhereUniqueInputObjectSchema } from './CollaboratorWhereUniqueInput.schema';
import { CollaboratorCreateWithoutSheetInputObjectSchema as CollaboratorCreateWithoutSheetInputObjectSchema } from './CollaboratorCreateWithoutSheetInput.schema';
import { CollaboratorUncheckedCreateWithoutSheetInputObjectSchema as CollaboratorUncheckedCreateWithoutSheetInputObjectSchema } from './CollaboratorUncheckedCreateWithoutSheetInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollaboratorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CollaboratorCreateWithoutSheetInputObjectSchema), z.lazy(() => CollaboratorUncheckedCreateWithoutSheetInputObjectSchema)])
}).strict();
export const CollaboratorCreateOrConnectWithoutSheetInputObjectSchema: z.ZodType<Prisma.CollaboratorCreateOrConnectWithoutSheetInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorCreateOrConnectWithoutSheetInput>;
export const CollaboratorCreateOrConnectWithoutSheetInputObjectZodSchema = makeSchema();
