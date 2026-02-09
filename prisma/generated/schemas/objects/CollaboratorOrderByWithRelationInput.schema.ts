import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SheetOrderByWithRelationInputObjectSchema as SheetOrderByWithRelationInputObjectSchema } from './SheetOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sheetId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  sheet: z.lazy(() => SheetOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const CollaboratorOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CollaboratorOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CollaboratorOrderByWithRelationInput>;
export const CollaboratorOrderByWithRelationInputObjectZodSchema = makeSchema();
