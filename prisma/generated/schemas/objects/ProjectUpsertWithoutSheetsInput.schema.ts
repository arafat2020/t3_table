import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectUpdateWithoutSheetsInputObjectSchema as ProjectUpdateWithoutSheetsInputObjectSchema } from './ProjectUpdateWithoutSheetsInput.schema';
import { ProjectUncheckedUpdateWithoutSheetsInputObjectSchema as ProjectUncheckedUpdateWithoutSheetsInputObjectSchema } from './ProjectUncheckedUpdateWithoutSheetsInput.schema';
import { ProjectCreateWithoutSheetsInputObjectSchema as ProjectCreateWithoutSheetsInputObjectSchema } from './ProjectCreateWithoutSheetsInput.schema';
import { ProjectUncheckedCreateWithoutSheetsInputObjectSchema as ProjectUncheckedCreateWithoutSheetsInputObjectSchema } from './ProjectUncheckedCreateWithoutSheetsInput.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProjectUpdateWithoutSheetsInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutSheetsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProjectCreateWithoutSheetsInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutSheetsInputObjectSchema)]),
  where: z.lazy(() => ProjectWhereInputObjectSchema).optional()
}).strict();
export const ProjectUpsertWithoutSheetsInputObjectSchema: z.ZodType<Prisma.ProjectUpsertWithoutSheetsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpsertWithoutSheetsInput>;
export const ProjectUpsertWithoutSheetsInputObjectZodSchema = makeSchema();
