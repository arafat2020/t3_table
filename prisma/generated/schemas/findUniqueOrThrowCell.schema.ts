import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CellSelectObjectSchema as CellSelectObjectSchema } from './objects/CellSelect.schema';
import { CellIncludeObjectSchema as CellIncludeObjectSchema } from './objects/CellInclude.schema';
import { CellWhereUniqueInputObjectSchema as CellWhereUniqueInputObjectSchema } from './objects/CellWhereUniqueInput.schema';

export const CellFindUniqueOrThrowSchema: z.ZodType<Prisma.CellFindUniqueOrThrowArgs> = z.object({ select: CellSelectObjectSchema.optional(), include: CellIncludeObjectSchema.optional(), where: CellWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CellFindUniqueOrThrowArgs>;

export const CellFindUniqueOrThrowZodSchema = z.object({ select: CellSelectObjectSchema.optional(), include: CellIncludeObjectSchema.optional(), where: CellWhereUniqueInputObjectSchema }).strict();