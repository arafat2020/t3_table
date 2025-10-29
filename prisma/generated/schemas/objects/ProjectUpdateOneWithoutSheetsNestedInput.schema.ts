import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateWithoutSheetsInputObjectSchema as ProjectCreateWithoutSheetsInputObjectSchema } from './ProjectCreateWithoutSheetsInput.schema';
import { ProjectUncheckedCreateWithoutSheetsInputObjectSchema as ProjectUncheckedCreateWithoutSheetsInputObjectSchema } from './ProjectUncheckedCreateWithoutSheetsInput.schema';
import { ProjectCreateOrConnectWithoutSheetsInputObjectSchema as ProjectCreateOrConnectWithoutSheetsInputObjectSchema } from './ProjectCreateOrConnectWithoutSheetsInput.schema';
import { ProjectUpsertWithoutSheetsInputObjectSchema as ProjectUpsertWithoutSheetsInputObjectSchema } from './ProjectUpsertWithoutSheetsInput.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateToOneWithWhereWithoutSheetsInputObjectSchema as ProjectUpdateToOneWithWhereWithoutSheetsInputObjectSchema } from './ProjectUpdateToOneWithWhereWithoutSheetsInput.schema';
import { ProjectUpdateWithoutSheetsInputObjectSchema as ProjectUpdateWithoutSheetsInputObjectSchema } from './ProjectUpdateWithoutSheetsInput.schema';
import { ProjectUncheckedUpdateWithoutSheetsInputObjectSchema as ProjectUncheckedUpdateWithoutSheetsInputObjectSchema } from './ProjectUncheckedUpdateWithoutSheetsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutSheetsInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutSheetsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutSheetsInputObjectSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutSheetsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ProjectWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ProjectWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProjectUpdateToOneWithWhereWithoutSheetsInputObjectSchema), z.lazy(() => ProjectUpdateWithoutSheetsInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutSheetsInputObjectSchema)]).optional()
}).strict();
export const ProjectUpdateOneWithoutSheetsNestedInputObjectSchema: z.ZodType<Prisma.ProjectUpdateOneWithoutSheetsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateOneWithoutSheetsNestedInput>;
export const ProjectUpdateOneWithoutSheetsNestedInputObjectZodSchema = makeSchema();
