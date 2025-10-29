import * as z from 'zod';
// prettier-ignore
export const CellModelSchema = z.object({
    id: z.string(),
    rowId: z.string(),
    colIndex: z.number().int(),
    value: z.string().nullable(),
    type: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    row: z.unknown()
}).strict();

export type CellPureType = z.infer<typeof CellModelSchema>;
