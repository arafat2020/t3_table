import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateNestedOneWithoutSheetsInputObjectSchema as ProjectCreateNestedOneWithoutSheetsInputObjectSchema } from './ProjectCreateNestedOneWithoutSheetsInput.schema';
import { RowCreateNestedManyWithoutSheetInputObjectSchema as RowCreateNestedManyWithoutSheetInputObjectSchema } from './RowCreateNestedManyWithoutSheetInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Project: z.lazy(() => ProjectCreateNestedOneWithoutSheetsInputObjectSchema).optional(),
  rows: z.lazy(() => RowCreateNestedManyWithoutSheetInputObjectSchema).optional()
}).strict();
export const SheetCreateWithoutColumnInputObjectSchema: z.ZodType<Prisma.SheetCreateWithoutColumnInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetCreateWithoutColumnInput>;
export const SheetCreateWithoutColumnInputObjectZodSchema = makeSchema();
