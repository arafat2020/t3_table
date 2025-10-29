import * as z from 'zod';
export const CellFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  rowId: z.string(),
  colIndex: z.number().int(),
  value: z.string().optional(),
  type: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  row: z.unknown()
}));