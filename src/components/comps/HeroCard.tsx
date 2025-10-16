import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import Image from "next/image";

export interface HeroCardProps {
    type?: "primary" | "secondary";
    mainIcon: React.ReactNode;
    title: string;
    description: string;
    items: {
        title: string;
        icon: React.ReactNode;
        description: string;
    }[];
    image: {
        url: string;
        alt: string;
    };
}

const heroCardStyles = cva("rounded-[16px] shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_16px_rgba(0,0,0,0.1)] px-8 py-10 w-[592px]", {
    variants: {
        type: {
            primary: "bg-third",
            secondary: "bg-white",
        },
    },
    defaultVariants: {
        type: "primary",
    },
});

const iconStyles = cva("w-16 h-16 rounded-full flex items-center justify-center text-white mb-8", {
    variants: {
        type: {
            primary: "bg-primary",
            secondary: "bg-secondary",
        },
    },
    defaultVariants: {
        type: "primary",
    },
});

export const HeroCard = ({
    type = "primary",
    mainIcon,
    title,
    description,
    items,
    image
}: HeroCardProps) => {
    return (
        <div className={cn(heroCardStyles({ type }))}>
            <div className="flex flex-col items-center mb-8">
                <div className={iconStyles({ type })}>
                    {mainIcon}
                </div>

                <h2 className="font-bold text-2xl mb-2">{title}</h2>
                <p className="text-text-main">{description}</p>
            </div>

            <div className="mb-2">
                {items.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 mb-6 max-w-[457px]">
                        <div className={cn(iconStyles({ type }), "w-10 h-10 min-w-10 [&>svg>path]:fill-white")}>
                            {item.icon}
                        </div>

                        <div className="text-left">
                            <h3 className="font-semibold text-[16px] mb-2">{item.title}</h3>
                            <p className="text-text-main text-[14px] font-[400] max-w-[457px]">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Image
                src={image.url}
                alt={image.alt}
                width={528}
                height={224}
                className="w-full rounded-[16px] object-cover mb-2"
            />
            <p className="text-text-main text-[12px] text-left italic mb-12">{description}</p>
        </div>
    )
}