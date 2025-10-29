import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CellSelectObjectSchema as CellSelectObjectSchema } from './objects/CellSelect.schema';
import { CellIncludeObjectSchema as CellIncludeObjectSchema } from './objects/CellInclude.schema';
import { CellWhereUniqueInputObjectSchema as CellWhereUniqueInputObjectSchema } from './objects/CellWhereUniqueInput.schema';

export const CellDeleteOneSchema: z.ZodType<Prisma.CellDeleteArgs> = z.object({ select: CellSelectObjectSchema.optional(), include: CellIncludeObjectSchema.optional(), where: CellWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CellDeleteArgs>;

export const CellDeleteOneZodSchema = z.object({ select: CellSelectObjectSchema.optional(), include: CellIncludeObjectSchema.optional(), where: CellWhereUniqueInputObjectSchema }).strict();