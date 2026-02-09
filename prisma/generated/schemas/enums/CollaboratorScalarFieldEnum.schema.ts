import * as z from 'zod';

export const CollaboratorScalarFieldEnumSchema = z.enum(['id', 'sheetId', 'userId', 'role'])

export type CollaboratorScalarFieldEnum = z.infer<typeof CollaboratorScalarFieldEnumSchema>;