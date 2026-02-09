import * as z from 'zod';
// prettier-ignore
export const CollaboratorInputSchema = z.object({
    id: z.string(),
    sheetId: z.string(),
    userId: z.string(),
    role: z.string(),
    sheet: z.unknown(),
    user: z.unknown()
}).strict();

export type CollaboratorInputType = z.infer<typeof CollaboratorInputSchema>;
