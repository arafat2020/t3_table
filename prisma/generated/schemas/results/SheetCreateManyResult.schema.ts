import * as z from 'zod';
export const SheetCreateManyResultSchema = z.object({
  count: z.number()
});