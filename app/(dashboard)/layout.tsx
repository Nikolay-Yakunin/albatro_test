import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import { FaHome, FaChartBar, FaUser, FaCog } from "react-icons/fa";
import { UserInfo } from "@/src/entities/user/ui/UserInfo";
import { LogoutButton } from "@/src/features/auth/ui/LogoutButton";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession();

    if (!session) {
        redirect("/auth/login");
    }

    return (
        <div className="flex h-full">
            {/* Боковая панель */}
            <aside className="w-64 bg-[var(--color-dark-blue)] h-screen fixed left-0 top-0 overflow-y-auto">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-[var(--color-gold)]">Панель управления</h2>
                </div>
                <nav className="mt-6">
                    <ul className="space-y-2 px-4">
                        <li>
                            <Link
                                href="/dashboard"
                                className="flex items-center p-3 text-[var(--color-cream)] hover:bg-[var(--color-teal)] rounded-md transition-colors"
                            >
                                <FaHome className="mr-3" />
                                <span>Главная</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/dashboard/analytics"
                                className="flex items-center p-3 text-[var(--color-cream)] hover:bg-[var(--color-teal)] rounded-md transition-colors"
                            >
                                <FaChartBar className="mr-3" />
                                <span>Аналитика</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/dashboard/profile"
                                className="flex items-center p-3 text-[var(--color-cream)] hover:bg-[var(--color-teal)] rounded-md transition-colors"
                            >
                                <FaUser className="mr-3" />
                                <span>Профиль</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/dashboard/settings"
                                className="flex items-center p-3 text-[var(--color-cream)] hover:bg-[var(--color-teal)] rounded-md transition-colors"
                            >
                                <FaCog className="mr-3" />
                                <span>Настройки</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="absolute bottom-0 w-full p-4 border-t border-[var(--color-teal)]">
                    <div className="flex items-center justify-between">
                        <UserInfo />
                        <LogoutButton />
                    </div>
                </div>
            </aside>

            {/* Основной контент */}
            <main className="ml-64 w-[calc(100%-16rem)] p-8 bg-[var(--color-cream)] min-h-screen text-[var(--color-dark-blue)]">
                {children}
            </main>
        </div>
    );
}
