import * as z from 'zod';
// prettier-ignore
export const CollaboratorModelSchema = z.object({
    id: z.string(),
    sheetId: z.string(),
    userId: z.string(),
    role: z.string(),
    sheet: z.unknown(),
    user: z.unknown()
}).strict();

export type CollaboratorPureType = z.infer<typeof CollaboratorModelSchema>;
