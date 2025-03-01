import { HTMLAttributes } from "react"
import { Staatliches } from 'next/font/google'

const staatliches = Staatliches({
    weight: '400',
    subsets: ['latin'],
})

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
    className?: string
    size?: 'sm' | 'md' | 'lg'
    children: React.ReactNode
}

export const Title = ({ className = "", size = 'md', children, ...rest }: TitleProps) => {
    // Мобильная версия (базовый): 32px для всех
    // Планшет (md): sm – 32px, md – 50px, lg – 64px
    // Десктоп (lg): sm – 48px, md – 50px, lg – 80px
    const sizeClasses = {
        sm: "lg:text-[48px]",
        md: "md:text-[50px]",
        lg: "md:text-[64px] lg:text-[80px] leading-[1.1]",
      }[size];

    return (
        <h1 className={`font-bold select-none uppercase ${staatliches.className} text-3xl ${sizeClasses} ${className}`} {...rest}>
            {children}
        </h1>
    )
}