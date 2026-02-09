import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutSharedSheetsInputObjectSchema as UserCreateWithoutSharedSheetsInputObjectSchema } from './UserCreateWithoutSharedSheetsInput.schema';
import { UserUncheckedCreateWithoutSharedSheetsInputObjectSchema as UserUncheckedCreateWithoutSharedSheetsInputObjectSchema } from './UserUncheckedCreateWithoutSharedSheetsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutSharedSheetsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSharedSheetsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutSharedSheetsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSharedSheetsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutSharedSheetsInput>;
export const UserCreateOrConnectWithoutSharedSheetsInputObjectZodSchema = makeSchema();
