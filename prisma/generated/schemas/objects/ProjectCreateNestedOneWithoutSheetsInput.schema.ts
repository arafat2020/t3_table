import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateWithoutSheetsInputObjectSchema as ProjectCreateWithoutSheetsInputObjectSchema } from './ProjectCreateWithoutSheetsInput.schema';
import { ProjectUncheckedCreateWithoutSheetsInputObjectSchema as ProjectUncheckedCreateWithoutSheetsInputObjectSchema } from './ProjectUncheckedCreateWithoutSheetsInput.schema';
import { ProjectCreateOrConnectWithoutSheetsInputObjectSchema as ProjectCreateOrConnectWithoutSheetsInputObjectSchema } from './ProjectCreateOrConnectWithoutSheetsInput.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutSheetsInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutSheetsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutSheetsInputObjectSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProjectCreateNestedOneWithoutSheetsInputObjectSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutSheetsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateNestedOneWithoutSheetsInput>;
export const ProjectCreateNestedOneWithoutSheetsInputObjectZodSchema = makeSchema();
