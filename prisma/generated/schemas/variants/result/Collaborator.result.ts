import * as z from 'zod';
// prettier-ignore
export const CollaboratorResultSchema = z.object({
    id: z.string(),
    sheetId: z.string(),
    userId: z.string(),
    role: z.string(),
    sheet: z.unknown(),
    user: z.unknown()
}).strict();

export type CollaboratorResultType = z.infer<typeof CollaboratorResultSchema>;
