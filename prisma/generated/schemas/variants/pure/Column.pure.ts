import * as z from 'zod';
// prettier-ignore
export const ColumnModelSchema = z.object({
    id: z.string(),
    sheetId: z.string(),
    index: z.number().int(),
    name: z.string().nullable(),
    type: z.string().nullable(),
    sheet: z.unknown()
}).strict();

export type ColumnPureType = z.infer<typeof ColumnModelSchema>;
