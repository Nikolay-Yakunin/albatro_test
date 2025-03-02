import { SignupForm } from "@/src/features/auth/ui/SignupForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Регистрация | Мой сайт",
  description: "Создайте новый аккаунт",
};

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold">
          Создание аккаунта
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-(--color-dark-blue) py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <SignupForm />
        </div>
      </div>
    </div>
  );
} 