import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string | null;
      avatar?: string | null;
    };
  }

  interface User {
    id: string;
    email: string;
    username?: string | null;
    avatar?: string | null;
  }
}
