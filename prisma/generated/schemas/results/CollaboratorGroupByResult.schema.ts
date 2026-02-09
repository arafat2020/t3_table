import * as z from 'zod';
export const CollaboratorGroupByResultSchema = z.array(z.object({
  id: z.string(),
  sheetId: z.string(),
  userId: z.string(),
  role: z.string(),
  _count: z.object({
    id: z.number(),
    sheetId: z.number(),
    userId: z.number(),
    role: z.number(),
    sheet: z.number(),
    user: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    sheetId: z.string().nullable(),
    userId: z.string().nullable(),
    role: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    sheetId: z.string().nullable(),
    userId: z.string().nullable(),
    role: z.string().nullable()
  }).nullable().optional()
}));