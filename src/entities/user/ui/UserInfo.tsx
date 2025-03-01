"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export const UserInfo = () => {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";

  if (isLoading) {
    return <div className="animate-pulse h-10 w-10 rounded-full bg-gray-700"></div>;
  }

  if (!session) {
    return (
      <div className="flex space-x-4">
        <Link
          href="/auth/login"
          className="text-sm font-medium hover:text-white transition-colors"
        >
          Войти
        </Link>
        <Link
          href="/auth/signup"
          className="text-sm font-medium hover:text-white transition-colors"
        >
          Регистрация
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <button
          className="flex items-center space-x-2 focus:outline-none"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image
              src={session.user.image || "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"}
              alt={session.user.name || "Пользователь"}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-sm font-medium">{session.user.name}</span>
        </button>
      </div>
    </div>
  );
}; 