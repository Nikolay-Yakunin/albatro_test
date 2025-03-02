import Link from "next/link";
import { ReactNode } from "react";

type NavigationItem = {
    label?: string | React.ReactNode;
    href: string;
}

interface NavigationProps {
    links: NavigationItem[];
    children?: ReactNode;
}

export const Navigation = ({ links, children }: NavigationProps) => {
    return (
        <nav className="w-full">
            <ul className="flex gap-10 justify-between items-center">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link href={`${link.href}`} className="hover:underline">
                            {link.label}
                        </Link>
                    </li>
                ))}
                {children}
            </ul>
        </nav>
    );
};
