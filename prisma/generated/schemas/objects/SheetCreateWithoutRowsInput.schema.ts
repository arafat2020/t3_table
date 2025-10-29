import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateNestedOneWithoutSheetsInputObjectSchema as ProjectCreateNestedOneWithoutSheetsInputObjectSchema } from './ProjectCreateNestedOneWithoutSheetsInput.schema';
import { ColumnCreateNestedManyWithoutSheetInputObjectSchema as ColumnCreateNestedManyWithoutSheetInputObjectSchema } from './ColumnCreateNestedManyWithoutSheetInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Project: z.lazy(() => ProjectCreateNestedOneWithoutSheetsInputObjectSchema).optional(),
  Column: z.lazy(() => ColumnCreateNestedManyWithoutSheetInputObjectSchema).optional()
}).strict();
export const SheetCreateWithoutRowsInputObjectSchema: z.ZodType<Prisma.SheetCreateWithoutRowsInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetCreateWithoutRowsInput>;
export const SheetCreateWithoutRowsInputObjectZodSchema = makeSchema();
