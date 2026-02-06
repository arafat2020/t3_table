import * as z from 'zod';
export const UserUpsertResultSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  email: z.string().optional(),
  emailVerified: z.date().optional(),
  image: z.string().optional(),
  password: z.string().optional(),
  accounts: z.array(z.unknown()),
  sessions: z.array(z.unknown()),
  Projects: z.array(z.unknown())
});