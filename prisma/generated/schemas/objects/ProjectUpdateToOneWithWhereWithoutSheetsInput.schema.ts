import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema';
import { ProjectUpdateWithoutSheetsInputObjectSchema as ProjectUpdateWithoutSheetsInputObjectSchema } from './ProjectUpdateWithoutSheetsInput.schema';
import { ProjectUncheckedUpdateWithoutSheetsInputObjectSchema as ProjectUncheckedUpdateWithoutSheetsInputObjectSchema } from './ProjectUncheckedUpdateWithoutSheetsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProjectUpdateWithoutSheetsInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutSheetsInputObjectSchema)])
}).strict();
export const ProjectUpdateToOneWithWhereWithoutSheetsInputObjectSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutSheetsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutSheetsInput>;
export const ProjectUpdateToOneWithWhereWithoutSheetsInputObjectZodSchema = makeSchema();
