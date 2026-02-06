import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'emailVerified', 'image', 'password'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;