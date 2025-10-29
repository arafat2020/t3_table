import * as z from 'zod';
export const ColumnFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  sheetId: z.string(),
  index: z.number().int(),
  name: z.string().optional(),
  type: z.string().optional(),
  sheet: z.unknown()
}));