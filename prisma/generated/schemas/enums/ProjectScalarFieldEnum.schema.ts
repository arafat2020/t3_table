import * as z from 'zod';

export const ProjectScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'createdAt', 'updatedAt', 'userId'])

export type ProjectScalarFieldEnum = z.infer<typeof ProjectScalarFieldEnumSchema>;