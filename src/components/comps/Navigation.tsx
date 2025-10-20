import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "../ui/navigation-menu";

export const Navigation = ({ className }: { className?: string }) => {
    const navs: { title: string, href: string }[] = [
        {
            title: "Gift",
            href: "/gift",
        },
        {
            title: "How it Works",
            href: "/how-it-works",
        },
        {
            title: "About us",
            href: "/about-us",
        },
        {
            title: "Benefits",
            href: "/benefits",
        },
        {
            title: "Featured In",
            href: "/featured-in",
        }
    ];

    return (
        <NavigationMenu className={className} viewport={false}>
            <NavigationMenuList>
                {navs.map((nav) => (
                    <NavigationMenuItem key={nav.title} className="relative">
                        <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} relative after:absolute after:w-full after:h-[2px] after:-bottom-2 after:bg-secondary after:rounded-full after:scale-0 hover:after:scale-100 after:transition-transform`}>
                            <Link href={nav.href}>{nav.title}</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}