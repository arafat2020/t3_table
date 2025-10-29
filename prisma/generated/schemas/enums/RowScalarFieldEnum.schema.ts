import * as z from 'zod';

export const RowScalarFieldEnumSchema = z.enum(['id', 'sheetId', 'index', 'createdAt', 'updatedAt'])

export type RowScalarFieldEnum = z.infer<typeof RowScalarFieldEnumSchema>;