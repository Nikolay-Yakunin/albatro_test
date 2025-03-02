"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

interface UserInfoProps {
  className?: string;
}

export const UserInfo = (className: UserInfoProps) => {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";

  if (isLoading) {
    return <div className="animate-pulse h-10 w-10 rounded-full bg-[var(--color-teal)] opacity-50"></div>;
  }

  if (!session) {
    return (
      <div className="flex space-x-0.5">
        <Link
          href="/login"
          className="text-sm font-medium text-[var(--color-orange)] hover:text-[var(--color-gold)] transition-colors text-nowrap"
        >
          Log in
        </Link>
        <span className="text-(--color-orange)">/</span>
        <Link
          href="/signup"
          className="text-sm font-medium text-[var(--color-orange)] hover:text-[var(--color-gold)] transition-colors text-nowrap"
        >
          Sign up
        </Link>
      </div>
    );
  }

  return (
    <div className={`${className} flex items-center space-x-4`}>
      <div className="relative">
        <button
          className="flex items-center space-x-2 focus:outline-none"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          <div className="w-10 h-10 relative rounded-full overflow-hidden border-2 border-[var(--color-gold)]">
            <Image
              src={session.user.image || "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"}
              alt={session.user.name || "Пользователь"}
              fill
              className="object-cover"
            />
          </div>
          <span className="hidden md:block text-sm font-medium text-[var(--color-cream)]">{session.user.name}</span>
        </button>
      </div>
    </div>
  );
}; 