import * as z from 'zod';
// prettier-ignore
export const SheetInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    ownerId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    Project: z.unknown().optional().nullable(),
    projectId: z.string().optional().nullable(),
    rows: z.array(z.unknown()),
    Column: z.array(z.unknown())
}).strict();

export type SheetInputType = z.infer<typeof SheetInputSchema>;
