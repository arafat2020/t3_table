import * as z from 'zod';
export const SheetAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    ownerId: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    Project: z.number(),
    projectId: z.number(),
    rows: z.number(),
    Column: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    ownerId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    projectId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    ownerId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    projectId: z.string().nullable()
  }).nullable().optional()});