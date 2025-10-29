import * as z from 'zod';
export const CellCreateManyResultSchema = z.object({
  count: z.number()
});