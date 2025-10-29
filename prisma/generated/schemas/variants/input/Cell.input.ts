import * as z from 'zod';
// prettier-ignore
export const CellInputSchema = z.object({
    id: z.string(),
    rowId: z.string(),
    colIndex: z.number().int(),
    value: z.string().optional().nullable(),
    type: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    row: z.unknown()
}).strict();

export type CellInputType = z.infer<typeof CellInputSchema>;
