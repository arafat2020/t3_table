import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollaboratorSheetIdUserIdCompoundUniqueInputObjectSchema as CollaboratorSheetIdUserIdCompoundUniqueInputObjectSchema } from './CollaboratorSheetIdUserIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  sheetId_userId: z.lazy(() => CollaboratorSheetIdUserIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const CollaboratorWhereUniqueInputObjectSchema: z.ZodType<Prisma.CollaboratorWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorWhereUniqueInput>;
export const CollaboratorWhereUniqueInputObjectZodSchema = makeSchema();
