"use client";

import { signOut } from "next-auth/react";
import { FaSignOutAlt } from "react-icons/fa";

export const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="text-[var(--color-orange)] hover:text-[var(--color-gold)] transition-colors"
      aria-label="Выйти"
    >
      <FaSignOutAlt />
    </button>
  );
}; 