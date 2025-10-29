import * as z from 'zod';
export const ProjectCreateResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  User: z.unknown().optional(),
  userId: z.string().optional(),
  sheets: z.array(z.unknown())
});