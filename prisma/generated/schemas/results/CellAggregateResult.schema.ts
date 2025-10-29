import * as z from 'zod';
export const CellAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    rowId: z.number(),
    colIndex: z.number(),
    value: z.number(),
    type: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    row: z.number()
  }).optional(),
  _sum: z.object({
    colIndex: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    colIndex: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    rowId: z.string().nullable(),
    colIndex: z.number().int().nullable(),
    value: z.string().nullable(),
    type: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    rowId: z.string().nullable(),
    colIndex: z.number().int().nullable(),
    value: z.string().nullable(),
    type: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});