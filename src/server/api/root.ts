import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { projectRouter } from "./routers/project.controller";
import { sheetRouter } from "./routers/sheet.controller";
import { authRouter } from "./routers/auth.controller";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    project: projectRouter,
    sheet: sheetRouter,
    auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
