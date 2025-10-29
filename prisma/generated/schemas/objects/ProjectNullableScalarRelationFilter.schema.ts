import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ProjectWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => ProjectWhereInputObjectSchema).optional().nullable()
}).strict();
export const ProjectNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ProjectNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ProjectNullableScalarRelationFilter>;
export const ProjectNullableScalarRelationFilterObjectZodSchema = makeSchema();
