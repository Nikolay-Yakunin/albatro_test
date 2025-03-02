"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  let errorMessage = "Произошла ошибка при авторизации";

  if (error === "CredentialsSignin") {
    errorMessage = "Неверный email или пароль";
  } else if (error === "OAuthSignin" || error === "OAuthCallback") {
    errorMessage = "Ошибка при входе через социальную сеть";
  } else if (error === "AccessDenied") {
    errorMessage = "Доступ запрещен";
  } else if (error === "Verification") {
    errorMessage = "Ссылка для верификации недействительна или истекла";
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-[var(--color-cream)] mb-4">
        Ошибка авторизации
      </h1>
      <div className="bg-[var(--color-orange)] text-white p-4 rounded-md mb-6">
        <p>{errorMessage}</p>
      </div>
      <div className="flex justify-center">
        <Link
          href="/login"
          className="px-4 py-2 bg-[var(--color-dark-blue)] text-[var(--color-cream)] rounded-md hover:bg-[var(--color-brown)] transition-colors"
        >
          Вернуться на страницу входа
        </Link>
      </div>
    </div>
  );
} 