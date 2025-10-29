import * as z from 'zod';
export const ColumnAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    sheetId: z.number(),
    index: z.number(),
    name: z.number(),
    type: z.number(),
    sheet: z.number()
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
    name: z.string().nullable(),
    type: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    sheetId: z.string().nullable(),
    index: z.number().int().nullable(),
    name: z.string().nullable(),
    type: z.string().nullable()
  }).nullable().optional()});