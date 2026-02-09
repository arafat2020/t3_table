import * as z from 'zod';
export const CollaboratorCreateResultSchema = z.object({
  id: z.string(),
  sheetId: z.string(),
  userId: z.string(),
  role: z.string(),
  sheet: z.unknown(),
  user: z.unknown()
});