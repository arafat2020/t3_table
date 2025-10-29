import * as z from 'zod';
export const ColumnFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  sheetId: z.string(),
  index: z.number().int(),
  name: z.string().optional(),
  type: z.string().optional(),
  sheet: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});