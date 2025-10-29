import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { SheetFindManySchema as SheetFindManySchema } from '../findManySheet.schema';
import { ProjectCountOutputTypeArgsObjectSchema as ProjectCountOutputTypeArgsObjectSchema } from './ProjectCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  User: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  sheets: z.union([z.boolean(), z.lazy(() => SheetFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProjectCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProjectIncludeObjectSchema: z.ZodType<Prisma.ProjectInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProjectInclude>;
export const ProjectIncludeObjectZodSchema = makeSchema();
