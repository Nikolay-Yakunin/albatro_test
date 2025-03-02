import { Suspense } from "react";
import ErrorContent from "./ErrorContent";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-[var(--color-teal)] rounded-lg shadow-lg">
        <Suspense fallback={<div>Загрузка...</div>}>
          <ErrorContent />
        </Suspense>
      </div>
    </div>
  );
} 