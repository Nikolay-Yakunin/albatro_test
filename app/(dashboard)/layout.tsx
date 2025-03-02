"use client";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import { FaHome, FaChartBar, FaUser, FaCog, FaBars, FaTimes } from "react-icons/fa";
import { UserInfo } from "@/src/entities/user/ui/UserInfo";
import { LogoutButton } from "@/src/features/auth/ui/LogoutButton";
import { useState } from "react";

const MobileNavigation = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (state: boolean) => void }) => {
  return (
    <>
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-[var(--color-teal)] text-[var(--color-cream)]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

// Navigation links component
const NavigationLinks = ({ mobile = false, onLinkClick = () => {} }: { mobile?: boolean; onLinkClick?: () => void }) => {
  return (
    <ul className={`space-y-2 ${mobile ? 'px-2' : 'px-4'}`}>
      <li>
        <Link
          href="/dashboard"
          className="flex items-center p-3 text-[var(--color-cream)] hover:bg-[var(--color-teal)] rounded-md transition-colors"
          onClick={onLinkClick}
        >
          <FaHome className="mr-3" />
          <span>Главная</span>
        </Link>
      </li>
      <li>
        <Link
          href="/dashboard/analytics"
          className="flex items-center p-3 text-[var(--color-cream)] hover:bg-[var(--color-teal)] rounded-md transition-colors"
          onClick={onLinkClick}
        >
          <FaChartBar className="mr-3" />
          <span>Аналитика</span>
        </Link>
      </li>
      <li>
        <Link
          href="/dashboard/profile"
          className="flex items-center p-3 text-[var(--color-cream)] hover:bg-[var(--color-teal)] rounded-md transition-colors"
          onClick={onLinkClick}
        >
          <FaUser className="mr-3" />
          <span>Профиль</span>
        </Link>
      </li>
      <li>
        <Link
          href="/dashboard/settings"
          className="flex items-center p-3 text-[var(--color-cream)] hover:bg-[var(--color-teal)] rounded-md transition-colors"
          onClick={onLinkClick}
        >
          <FaCog className="mr-3" />
          <span>Настройки</span>
        </Link>
      </li>
    </ul>
  );
};

const DashboardLayoutClient = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <MobileNavigation isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      
      <aside className={`
        bg-[var(--color-dark-blue)] overflow-y-auto
        lg:w-64 lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:block
        fixed z-40 top-0 h-screen w-64 transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-4 lg:p-6">
          <h2 className="text-xl lg:text-2xl font-bold text-[var(--color-gold)]">Панель управления</h2>
        </div>
        
        <nav className="mt-4 lg:mt-6">
          <NavigationLinks mobile={false} onLinkClick={() => setIsMobileMenuOpen(false)} />
        </nav>
        
        <div className="absolute bottom-0 w-full p-4 border-t border-[var(--color-teal)]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
            <UserInfo />
            <LogoutButton />
          </div>
        </div>
      </aside>

      <main className="
        flex-1 bg-[var(--color-cream)] text-[var(--color-dark-blue)]
        p-4 sm:p-6 lg:p-8 
        lg:ml-64 w-full lg:w-[calc(100%-16rem)]
        min-h-screen
        pt-16 lg:pt-4
      ">
        {children}
      </main>
    </div>
  );
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = getServerSession();

  if (!session) {
    redirect("/auth/login");
  }

  return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
}