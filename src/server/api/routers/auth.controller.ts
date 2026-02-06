import { TRPCError } from "@trpc/server";
import { z } from "zod";
import bcrypt from "bcryptjs";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";

export const authRouter = createTRPCRouter({
    signup: publicProcedure
        .input(
            z.object({
                email: z.string().email(),
                password: z.string().min(6),
                name: z.string().optional(),
            })
        )
        .mutation(async ({ input }) => {
            const { email, password, name } = input;

            const existingUser = await db.user.findUnique({
                where: { email },
            });

            if (existingUser) {
                throw new TRPCError({
                    code: "CONFLICT",
                    message: "User already exists.",
                });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await db.user.create({
                data: {
                    email,
                    name,
                    password: hashedPassword,
                },
            });

            return {
                id: user.id,
                name: user.name,
                email: user.email,
            };
        }),
});
