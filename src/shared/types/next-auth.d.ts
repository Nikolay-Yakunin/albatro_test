// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth"; // Эта штука нужна

declare module "next-auth" {
  interface User {
    id: string;
  }

  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
} 