import NextAuth, { AuthOptions } from "next-auth"
import bcrypt from "bcrypt"
import CredentialsProvider from "next-auth/providers/credentials"
import { prismadb } from "@/lib/db"

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("missing email or password")
                }

                const user = await prismadb.user.findUnique({ 
                    where: { email: credentials.email } 
                })

                if (!user || !user.hashedPassword) {
                    throw new Error("No user found with this email.")
                }

                const isPasswordValid = await bcrypt.compare(
                    credentials.password, 
                    user.hashedPassword
                )

                if (!isPasswordValid) {
                    throw new Error("Incorrect pass!")
                }

                
                return {
                    id: user.id,
                    email: user.email,
                    username: user.username 
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
           
            if (user) {
                token.id = user.id;
                token.username = user.username;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
                session.user.username = token.username as string;
            }
            return session;
        }
    },
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };