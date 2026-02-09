import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutSharedSheetsInputObjectSchema as UserCreateWithoutSharedSheetsInputObjectSchema } from './UserCreateWithoutSharedSheetsInput.schema';
import { UserUncheckedCreateWithoutSharedSheetsInputObjectSchema as UserUncheckedCreateWithoutSharedSheetsInputObjectSchema } from './UserUncheckedCreateWithoutSharedSheetsInput.schema';
import { UserCreateOrConnectWithoutSharedSheetsInputObjectSchema as UserCreateOrConnectWithoutSharedSheetsInputObjectSchema } from './UserCreateOrConnectWithoutSharedSheetsInput.schema';
import { UserUpsertWithoutSharedSheetsInputObjectSchema as UserUpsertWithoutSharedSheetsInputObjectSchema } from './UserUpsertWithoutSharedSheetsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutSharedSheetsInputObjectSchema as UserUpdateToOneWithWhereWithoutSharedSheetsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutSharedSheetsInput.schema';
import { UserUpdateWithoutSharedSheetsInputObjectSchema as UserUpdateWithoutSharedSheetsInputObjectSchema } from './UserUpdateWithoutSharedSheetsInput.schema';
import { UserUncheckedUpdateWithoutSharedSheetsInputObjectSchema as UserUncheckedUpdateWithoutSharedSheetsInputObjectSchema } from './UserUncheckedUpdateWithoutSharedSheetsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutSharedSheetsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSharedSheetsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSharedSheetsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSharedSheetsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutSharedSheetsInputObjectSchema), z.lazy(() => UserUpdateWithoutSharedSheetsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSharedSheetsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutSharedSheetsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSharedSheetsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutSharedSheetsNestedInput>;
export const UserUpdateOneRequiredWithoutSharedSheetsNestedInputObjectZodSchema = makeSchema();
