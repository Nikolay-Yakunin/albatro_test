import { LoginForm } from "@/src/features/auth/ui/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вход | Мой сайт",
  description: "Войдите в свой аккаунт",
};

export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold">
          Вход в аккаунт
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-(--color-dark-blue) py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <LoginForm />
        </div>
      </div>
    </div>
  );
} 