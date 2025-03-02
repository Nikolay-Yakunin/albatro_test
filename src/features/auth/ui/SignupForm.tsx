"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";

export const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Ошибка при регистрации");
        setIsLoading(false);
      }

      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError("Учетная запись создана, но возникла ошибка при автоматическом входе. Пожалуйста, войдите вручную.");
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Произошла ошибка при регистрации");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider: string) => {
    const result = await signIn(provider, { callbackUrl: "/dashboard" });
    if (result?.error) {
      setError("Ошибка входа через социальную сеть");
    } else {
      router.refresh();
    }
  };
  
  

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[var(--color-cream)]">
            Имя
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 bg-[var(--color-dark-blue)] border border-[var(--color-teal)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)] text-[var(--color-cream)]"
          />
        </div>

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

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-[var(--color-cream)]">
            Подтвердите пароль
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            {isLoading ? "Регистрация..." : "Зарегистрироваться"}
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
          Уже есть аккаунт?{" "}
          <Link
            href="/login"
            className="font-medium text-[var(--color-gold)] hover:text-[var(--color-orange)] transition-colors"
          >
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}; 