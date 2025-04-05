import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from '@/server/db'
import bcrypt from "bcrypt";
import { AuthOptions } from "next-auth";

export const option: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("FieldRequired");
                }

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                });

                if (!user || !user.password) {
                    throw new Error("UserNotFound");
                }

                const passwordMatch = await bcrypt.compare(credentials.password, user.password);
                if (!passwordMatch) {
                    throw new Error("InvalidCredentials");
                }

                return { id: user.id, email: user.email, name: user.name };
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
};