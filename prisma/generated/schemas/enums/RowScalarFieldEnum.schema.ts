import * as z from 'zod';

export const RowScalarFieldEnumSchema = z.enum(['id', 'sheetId', 'index', 'height', 'createdAt', 'updatedAt'])

export type RowScalarFieldEnum = z.infer<typeof RowScalarFieldEnumSchema>;