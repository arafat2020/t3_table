import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectCreateWithoutSheetsInputObjectSchema as ProjectCreateWithoutSheetsInputObjectSchema } from './ProjectCreateWithoutSheetsInput.schema';
import { ProjectUncheckedCreateWithoutSheetsInputObjectSchema as ProjectUncheckedCreateWithoutSheetsInputObjectSchema } from './ProjectUncheckedCreateWithoutSheetsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProjectCreateWithoutSheetsInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutSheetsInputObjectSchema)])
}).strict();
export const ProjectCreateOrConnectWithoutSheetsInputObjectSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutSheetsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateOrConnectWithoutSheetsInput>;
export const ProjectCreateOrConnectWithoutSheetsInputObjectZodSchema = makeSchema();
