import * as z from 'zod';
export const CollaboratorAggregateResultSchema = z.object({  _count: z.object({
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
  }).nullable().optional()});