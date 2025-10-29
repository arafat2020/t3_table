import * as z from 'zod';

export const SheetScalarFieldEnumSchema = z.enum(['id', 'name', 'ownerId', 'createdAt', 'updatedAt', 'projectId'])

export type SheetScalarFieldEnum = z.infer<typeof SheetScalarFieldEnumSchema>;