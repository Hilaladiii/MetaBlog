import { DefaultSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "@/common/db/user";

declare module "next-auth" {
  interface User {
    username: string;
    role: string;
  }
  interface Session extends DefaultSession {
    user: {
      username: string;
      role: string;
      image: string;
    } & DefaultSession["user"];
  }
}

export const authOption: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "credentials",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user: any = await signIn({ email, password });
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account?.provider == "credentials") {
        token.email = user.email;
        token.username = user.username;
        token.picture = user.image;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          username: token.username as string,
          email: token.email,
          role: token.role as string,
          image: token.picture as string,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/sign-in",
  },
};
