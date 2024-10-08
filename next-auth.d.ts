import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      name: string;
      //   token: string;
    } & DefaultSession["user"];
  }

  interface User {
    token: string;
  }
}
