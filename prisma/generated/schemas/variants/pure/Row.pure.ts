import * as z from 'zod';
// prettier-ignore
export const RowModelSchema = z.object({
    id: z.string(),
    sheetId: z.string(),
    index: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    cells: z.array(z.unknown()),
    Sheet: z.unknown()
}).strict();

export type RowPureType = z.infer<typeof RowModelSchema>;
