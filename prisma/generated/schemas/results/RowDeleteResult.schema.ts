import * as z from 'zod';
export const RowDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  sheetId: z.string(),
  index: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  cells: z.array(z.unknown()),
  Sheet: z.unknown()
}));