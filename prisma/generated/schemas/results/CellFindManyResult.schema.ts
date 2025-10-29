import * as z from 'zod';
export const CellFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  rowId: z.string(),
  colIndex: z.number().int(),
  value: z.string().optional(),
  type: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  row: z.unknown()
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