import * as z from 'zod';
// prettier-ignore
export const ProjectResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    User: z.unknown().nullable(),
    userId: z.string().nullable(),
    sheets: z.array(z.unknown())
}).strict();

export type ProjectResultType = z.infer<typeof ProjectResultSchema>;
