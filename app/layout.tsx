import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "@/app/globals.css";

import { Header } from '@/src/widgets/Header/ui'
import { Footer } from '@/src/widgets/Footer/ui'
import { AuthProvider } from '@/src/app/providers';


const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Сайт-визитка",
  description: "Сайт-визитка, созданный с использованием Next.js и TypeScript",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">

      <body
        className={`${archivo.className} w-full min-h-full box-border antialiased flex flex-col`}
      >
        <AuthProvider>
          <Header />
          <div className="flex-grow">
            <main>
              {children}
            </main>
          </div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
