import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CellSelectObjectSchema as CellSelectObjectSchema } from './objects/CellSelect.schema';
import { CellIncludeObjectSchema as CellIncludeObjectSchema } from './objects/CellInclude.schema';
import { CellCreateInputObjectSchema as CellCreateInputObjectSchema } from './objects/CellCreateInput.schema';
import { CellUncheckedCreateInputObjectSchema as CellUncheckedCreateInputObjectSchema } from './objects/CellUncheckedCreateInput.schema';

export const CellCreateOneSchema: z.ZodType<Prisma.CellCreateArgs> = z.object({ select: CellSelectObjectSchema.optional(), include: CellIncludeObjectSchema.optional(), data: z.union([CellCreateInputObjectSchema, CellUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CellCreateArgs>;

export const CellCreateOneZodSchema = z.object({ select: CellSelectObjectSchema.optional(), include: CellIncludeObjectSchema.optional(), data: z.union([CellCreateInputObjectSchema, CellUncheckedCreateInputObjectSchema]) }).strict();