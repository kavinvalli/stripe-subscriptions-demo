import { DefaultSession, NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/lib/db";
import { User } from "@prisma/client";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: User & DefaultSession["user"];
  }
}

const getCredentials = () => {
  const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
    throw new Error("Missing Google credentials");
  }

  return { clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET };
};

export const authOptions: NextAuthOptions = {
  providers: [GoogleProvider(getCredentials())],
  callbacks: {
    session: ({ session, user }) => {
      session.user = user as User & DefaultSession["user"];

      return session;
    },
  },
  adapter: PrismaAdapter(db),
};

export const getAuthSession = async () => {
  return getServerSession(authOptions);
};
