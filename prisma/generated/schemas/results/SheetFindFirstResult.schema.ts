import * as z from 'zod';
export const SheetFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  ownerId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  Project: z.unknown().optional(),
  projectId: z.string().optional(),
  rows: z.array(z.unknown()),
  Column: z.array(z.unknown())
}));