import * as z from 'zod';
export const CellDeleteManyResultSchema = z.object({
  count: z.number()
});