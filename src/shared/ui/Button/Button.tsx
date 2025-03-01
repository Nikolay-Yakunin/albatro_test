import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    onClick?: () => void;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary';
    children?: React.ReactNode;
}

export const Button = ({ className, size = 'md', variant = 'primary', children, ...rest }: ButtonProps) => {
    const sizeClasses = {
        sm: "px-2 py-1 rounded-sm text-sm",
        md: "px-4 py-3 rounded-md text-base",
        lg: "px-6 py-3 rounded-lg text-lg",
    }[size];

    const variantClasses = {
        primary: "bg-blue-500 text-white",
        secondary: "bg-gray-200 text-gray-800",
    }[variant];


    return (
        <button className={`${className} ${sizeClasses} ${variantClasses}`} {...rest}>{children}</button>
    )
}