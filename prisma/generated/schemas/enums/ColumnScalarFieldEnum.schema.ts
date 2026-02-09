import * as z from 'zod';

export const ColumnScalarFieldEnumSchema = z.enum(['id', 'sheetId', 'index', 'width', 'name', 'type'])

export type ColumnScalarFieldEnum = z.infer<typeof ColumnScalarFieldEnumSchema>;