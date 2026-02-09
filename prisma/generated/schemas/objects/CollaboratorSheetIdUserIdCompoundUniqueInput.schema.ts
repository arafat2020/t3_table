import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  sheetId: z.string(),
  userId: z.string()
}).strict();
export const CollaboratorSheetIdUserIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.CollaboratorSheetIdUserIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorSheetIdUserIdCompoundUniqueInput>;
export const CollaboratorSheetIdUserIdCompoundUniqueInputObjectZodSchema = makeSchema();
