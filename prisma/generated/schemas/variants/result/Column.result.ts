import * as z from 'zod';
// prettier-ignore
export const ColumnResultSchema = z.object({
    id: z.string(),
    sheetId: z.string(),
    index: z.number().int(),
    name: z.string().nullable(),
    type: z.string().nullable(),
    sheet: z.unknown()
}).strict();

export type ColumnResultType = z.infer<typeof ColumnResultSchema>;
