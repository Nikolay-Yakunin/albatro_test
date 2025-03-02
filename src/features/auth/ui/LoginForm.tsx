"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError("Неверный email или пароль");
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (error) {
      setError("Произошла ошибка при входе");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    signIn(provider, { callbackUrl: "/dashboard" });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--color-cream)]">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 bg-[var(--color-dark-blue)] border border-[var(--color-teal)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)] text-[var(--color-cream)]"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-[var(--color-cream)]">
            Пароль
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 bg-[var(--color-dark-blue)] border border-[var(--color-teal)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)] text-[var(--color-cream)]"
          />
        </div>

        {error && (
          <div className="text-[var(--color-orange)] text-sm font-medium">{error}</div>
        )}

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[var(--color-cream)] bg-[var(--color-teal)] hover:bg-[var(--color-dark-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] disabled:opacity-50 transition-colors"
          >
            {isLoading ? "Вход..." : "Войти"}
          </button>
        </div>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[var(--color-teal)]"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-[var(--color-dark-blue)] text-[var(--color-cream)]">
              Или продолжить с
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={() => handleSocialLogin("github")}
            className="w-full flex items-center justify-center px-4 py-2 border border-[var(--color-teal)] rounded-md shadow-sm text-sm font-medium text-[var(--color-cream)] bg-[var(--color-dark-blue)] hover:bg-[var(--color-teal)] transition-colors"
          >
            <FaGithub className="mr-2" />
            GitHub
          </button>
          <button
            onClick={() => handleSocialLogin("google")}
            className="w-full flex items-center justify-center px-4 py-2 border border-[var(--color-teal)] rounded-md shadow-sm text-sm font-medium text-[var(--color-cream)] bg-[var(--color-dark-blue)] hover:bg-[var(--color-teal)] transition-colors"
          >
            <FaGoogle className="mr-2" />
            Google
          </button>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-[var(--color-cream)]">
          Нет аккаунта?{" "}
          <Link
            href="/signup"
            className="font-medium text-[var(--color-gold)] hover:text-[var(--color-orange)] transition-colors"
          >
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  );
}; 