import * as z from 'zod';
export const RowAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    sheetId: z.number(),
    index: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    cells: z.number(),
    Sheet: z.number()
  }).optional(),
  _sum: z.object({
    index: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    index: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    sheetId: z.string().nullable(),
    index: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    sheetId: z.string().nullable(),
    index: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});