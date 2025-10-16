import { cn } from "@/lib/utils"

export const Heading1 = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <h1 className={cn(`font-poppins font-bold text-5xl mb-8`, className)}>
            {children}
        </h1>
    )
}
