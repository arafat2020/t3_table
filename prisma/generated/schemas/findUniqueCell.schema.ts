import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CellSelectObjectSchema as CellSelectObjectSchema } from './objects/CellSelect.schema';
import { CellIncludeObjectSchema as CellIncludeObjectSchema } from './objects/CellInclude.schema';
import { CellWhereUniqueInputObjectSchema as CellWhereUniqueInputObjectSchema } from './objects/CellWhereUniqueInput.schema';

export const CellFindUniqueSchema: z.ZodType<Prisma.CellFindUniqueArgs> = z.object({ select: CellSelectObjectSchema.optional(), include: CellIncludeObjectSchema.optional(), where: CellWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CellFindUniqueArgs>;

export const CellFindUniqueZodSchema = z.object({ select: CellSelectObjectSchema.optional(), include: CellIncludeObjectSchema.optional(), where: CellWhereUniqueInputObjectSchema }).strict();