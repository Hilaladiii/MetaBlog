import { SignIn } from "@/common/db/user";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
        const user: any = await SignIn({ email, password });
        console.log(user);
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account?.provider == "credentials") {
        token.email = user.email;
        token.name = user.name;
      }
      console.log(token);
      return token;
    },
    async session({ session, token }) {
      session.user = session.user || {};
      console.log(session);
      return session;
    },
  },
  pages: {
    signIn: "/auth/sign-in",
  },
};
