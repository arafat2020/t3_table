import * as z from 'zod';
// prettier-ignore
export const SheetModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    ownerId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    Project: z.unknown().nullable(),
    projectId: z.string().nullable(),
    rows: z.array(z.unknown()),
    Column: z.array(z.unknown())
}).strict();

export type SheetPureType = z.infer<typeof SheetModelSchema>;
