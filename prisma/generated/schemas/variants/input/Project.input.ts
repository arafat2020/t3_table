import * as z from 'zod';
// prettier-ignore
export const ProjectInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    User: z.unknown().optional().nullable(),
    userId: z.string().optional().nullable(),
    sheets: z.array(z.unknown())
}).strict();

export type ProjectInputType = z.infer<typeof ProjectInputSchema>;
