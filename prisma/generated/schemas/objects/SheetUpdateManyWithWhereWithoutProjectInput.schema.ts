import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SheetScalarWhereInputObjectSchema as SheetScalarWhereInputObjectSchema } from './SheetScalarWhereInput.schema';
import { SheetUpdateManyMutationInputObjectSchema as SheetUpdateManyMutationInputObjectSchema } from './SheetUpdateManyMutationInput.schema';
import { SheetUncheckedUpdateManyWithoutProjectInputObjectSchema as SheetUncheckedUpdateManyWithoutProjectInputObjectSchema } from './SheetUncheckedUpdateManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SheetScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SheetUpdateManyMutationInputObjectSchema), z.lazy(() => SheetUncheckedUpdateManyWithoutProjectInputObjectSchema)])
}).strict();
export const SheetUpdateManyWithWhereWithoutProjectInputObjectSchema: z.ZodType<Prisma.SheetUpdateManyWithWhereWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.SheetUpdateManyWithWhereWithoutProjectInput>;
export const SheetUpdateManyWithWhereWithoutProjectInputObjectZodSchema = makeSchema();
