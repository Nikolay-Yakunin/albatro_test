import Link from "next/link";

type NavigationItem = {
    label?: string | React.ReactNode;
    href: string;
}

interface NavigationProps {
    links: NavigationItem[];
}

export const Navigation = ({ links }: NavigationProps) => {
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
            </ul>
        </nav>
    );
};
