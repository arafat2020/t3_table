import * as z from 'zod';
// prettier-ignore
export const ColumnInputSchema = z.object({
    id: z.string(),
    sheetId: z.string(),
    index: z.number().int(),
    name: z.string().optional().nullable(),
    type: z.string().optional().nullable(),
    sheet: z.unknown()
}).strict();

export type ColumnInputType = z.infer<typeof ColumnInputSchema>;
