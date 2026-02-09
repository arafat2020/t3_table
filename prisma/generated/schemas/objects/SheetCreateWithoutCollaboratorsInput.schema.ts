import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateNestedOneWithoutSheetsInputObjectSchema as ProjectCreateNestedOneWithoutSheetsInputObjectSchema } from './ProjectCreateNestedOneWithoutSheetsInput.schema';
import { RowCreateNestedManyWithoutSheetInputObjectSchema as RowCreateNestedManyWithoutSheetInputObjectSchema } from './RowCreateNestedManyWithoutSheetInput.schema';
import { ColumnCreateNestedManyWithoutSheetInputObjectSchema as ColumnCreateNestedManyWithoutSheetInputObjectSchema } from './ColumnCreateNestedManyWithoutSheetInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Project: z.lazy(() => ProjectCreateNestedOneWithoutSheetsInputObjectSchema).optional(),
  rows: z.lazy(() => RowCreateNestedManyWithoutSheetInputObjectSchema).optional(),
  Column: z.lazy(() => ColumnCreateNestedManyWithoutSheetInputObjectSchema).optional()
}).strict();
export const SheetCreateWithoutCollaboratorsInputObjectSchema: z.ZodType<Prisma.SheetCreateWithoutCollaboratorsInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetCreateWithoutCollaboratorsInput>;
export const SheetCreateWithoutCollaboratorsInputObjectZodSchema = makeSchema();
