"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  let errorMessage = "Произошла ошибка при авторизации";

  if (error === "CredentialsSignin") {
    errorMessage = "Неверный email или пароль";
  } else if (error === "OAuthSignin" || error === "OAuthCallback") {
    errorMessage = "Ошибка при входе через социальную сеть";
  } else if (error === "AccessDenied") {
    errorMessage = "Доступ запрещен";
  }

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-red-500">
          Ошибка авторизации
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-black py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <p className="mb-6">{errorMessage}</p>
            <Link
              href="/auth/login"
              className="inline-block px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700"
            >
              Вернуться на страницу входа
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 