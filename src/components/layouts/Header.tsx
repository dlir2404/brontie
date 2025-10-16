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
                className="w-[166px] h-[56px] object-cover object-[0px_-10px] absolute top-8 left-[104px]"
            />
            <Navigation />
            <div className="absolute top-[41px] right-[104px] flex gap-4">
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