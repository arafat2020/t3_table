import * as z from 'zod';
export const SheetDeleteManyResultSchema = z.object({
  count: z.number()
});