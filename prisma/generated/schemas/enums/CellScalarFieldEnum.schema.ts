import * as z from 'zod';

export const CellScalarFieldEnumSchema = z.enum(['id', 'rowId', 'colIndex', 'value', 'type', 'createdAt', 'updatedAt'])

export type CellScalarFieldEnum = z.infer<typeof CellScalarFieldEnumSchema>;