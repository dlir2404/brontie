import { Navigation } from "../comps/Navigation"
import CartIcon from "@/assets/icons/cart.svg"
import UserIcon from "@/assets/icons/user.svg"
import { Badge } from "@/components/ui/badge"

export const Header = () => {
    return (
        <header className="h-[68px] md:h-[120px] bg-primary text-primary-foreground relative flex items-center justify-center">
            <img
                src="./images/all-assets.png"
                alt="Logo"
                className="w-[106px] h-[36px] md:w-[166px] md:h-[56px] object-cover object-[0px_-6px] md:object-[0px_-10px] md:absolute md:top-8 md:left-[104px]"
            />
            <Navigation className="hidden md:block"/>
            <div className="hidden absolute top-[41px] right-[104px] md:flex gap-4">
                <div className="relative">
                    <CartIcon />
                    <Badge className="h-[18px] w-[18px] rounded-full px-1 tabular-nums bg-secondary text-black absolute -top-1 -right-1">
                        8
                    </Badge>
                </div>
                <UserIcon />
            </div>
        </header>
    )
}