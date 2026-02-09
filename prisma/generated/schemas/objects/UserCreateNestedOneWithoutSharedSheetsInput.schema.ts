import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutSharedSheetsInputObjectSchema as UserCreateWithoutSharedSheetsInputObjectSchema } from './UserCreateWithoutSharedSheetsInput.schema';
import { UserUncheckedCreateWithoutSharedSheetsInputObjectSchema as UserUncheckedCreateWithoutSharedSheetsInputObjectSchema } from './UserUncheckedCreateWithoutSharedSheetsInput.schema';
import { UserCreateOrConnectWithoutSharedSheetsInputObjectSchema as UserCreateOrConnectWithoutSharedSheetsInputObjectSchema } from './UserCreateOrConnectWithoutSharedSheetsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutSharedSheetsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSharedSheetsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSharedSheetsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutSharedSheetsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSharedSheetsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutSharedSheetsInput>;
export const UserCreateNestedOneWithoutSharedSheetsInputObjectZodSchema = makeSchema();
