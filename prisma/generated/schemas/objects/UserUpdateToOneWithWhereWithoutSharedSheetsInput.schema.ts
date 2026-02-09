import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutSharedSheetsInputObjectSchema as UserUpdateWithoutSharedSheetsInputObjectSchema } from './UserUpdateWithoutSharedSheetsInput.schema';
import { UserUncheckedUpdateWithoutSharedSheetsInputObjectSchema as UserUncheckedUpdateWithoutSharedSheetsInputObjectSchema } from './UserUncheckedUpdateWithoutSharedSheetsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutSharedSheetsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSharedSheetsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutSharedSheetsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSharedSheetsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSharedSheetsInput>;
export const UserUpdateToOneWithWhereWithoutSharedSheetsInputObjectZodSchema = makeSchema();
