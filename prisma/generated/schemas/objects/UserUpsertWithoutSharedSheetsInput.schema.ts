import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutSharedSheetsInputObjectSchema as UserUpdateWithoutSharedSheetsInputObjectSchema } from './UserUpdateWithoutSharedSheetsInput.schema';
import { UserUncheckedUpdateWithoutSharedSheetsInputObjectSchema as UserUncheckedUpdateWithoutSharedSheetsInputObjectSchema } from './UserUncheckedUpdateWithoutSharedSheetsInput.schema';
import { UserCreateWithoutSharedSheetsInputObjectSchema as UserCreateWithoutSharedSheetsInputObjectSchema } from './UserCreateWithoutSharedSheetsInput.schema';
import { UserUncheckedCreateWithoutSharedSheetsInputObjectSchema as UserUncheckedCreateWithoutSharedSheetsInputObjectSchema } from './UserUncheckedCreateWithoutSharedSheetsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutSharedSheetsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSharedSheetsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutSharedSheetsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSharedSheetsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutSharedSheetsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutSharedSheetsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutSharedSheetsInput>;
export const UserUpsertWithoutSharedSheetsInputObjectZodSchema = makeSchema();
