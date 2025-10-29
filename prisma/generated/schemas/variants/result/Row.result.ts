import * as z from 'zod';
// prettier-ignore
export const RowResultSchema = z.object({
    id: z.string(),
    sheetId: z.string(),
    index: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    cells: z.array(z.unknown()),
    Sheet: z.unknown()
}).strict();

export type RowResultType = z.infer<typeof RowResultSchema>;
