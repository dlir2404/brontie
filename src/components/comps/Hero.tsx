import { Button } from "@/components/ui/button";
import { HeroCard, HeroCardProps } from "./HeroCard";
import HeartSvg from "@/assets/icons/heart.svg";
import PhoneSvg from "@/assets/icons/phone.svg";
import CupSvg from "@/assets/icons/cup.svg";
import QrSvg from "@/assets/icons/qr.svg";
import StoreSvg from "@/assets/icons/store.svg";
import PlusSvg from "@/assets/icons/plus.svg";
import WalletSvg from "@/assets/icons/wallet.svg";
import { Heading1 } from "./Heading1";

export const Hero = () => {

    const cards: HeroCardProps[] = [
        {
            type: "secondary",
            mainIcon: <HeartSvg/>,
            title: "For Customers",
            description: "Gift experiences, not just vouchers",
            items: [
                {
                    title: "Buy a Treat",
                    description: `A customer visits brontie.ie and chooses a product (e.g. “2
Coffees &amp; Cake”) from your café’s listing.`,
                    icon: <CupSvg />
                },
                {
                    title: "Send Instantly",
                    description: `They pay online and get a unique link they can send to a
friend via WhatsApp, text, or email.`,
                    icon: <PhoneSvg />
                },
                {
                    title: "Simple Redemption",
                    description: `The recipient visits your café and scans your café’s QR
block displayed on the counter.`,
                    icon: <QrSvg />
                }
            ],
            image: {
                url: "/images/hero-customer.png",
                alt: '“No apps. No accounts. Just thoughtful gifting.”'
            }
        },
        {
            type: "primary",
            mainIcon: <StoreSvg/>,
            title: "For Cafés",
            description: "Grow your business effortlessly",
            items: [
                {
                    title: "List Your Café for Free",
                    description: `Sign up in minutes, add your first product (like
“Coffee & Cake”).`,
                    icon: <PlusSvg />
                },
                {
                    title: "Redeem Instantly In-Store",
                    description: `Customers scan your café’s QR block (or your
POS scanner). We handle all the verification automatically.`,
                    icon: <QrSvg />
                },
                {
                    title: "Get Paid, Hassle-Free",
                    description: `Payouts via Stripe Connect every 2 weeks with a
full summary report of sales and redemptions.`,
                    icon: <WalletSvg />
                }
            ],
            image: {
                url: "/images/hero-cafe.png",
                alt: '“No setup fees. No subscription. You only pay when you earn.”'
            }
        }
    ]

    return (
        <div className="p-6 pb-[56px] md:px-[104px] md:py-20 text-center bg-main-white">
            <Heading1 className="text-primary">How Brontie <span className="relative after:absolute after:w-full after:h-[2px] after:-bottom-2 after:left-0 after:bg-secondary after:rounded-full">Works</span></Heading1>
            <p className="md:text-xl text-text-main mb-6 md:mb-8">Simple for customers. Seamless for cafés.</p>

            <div className="mb-6 md:mb-20">
                <Button className="mr-6">Start Listing (Free)</Button>
                <Button variant="outline">Chat on WhatApp</Button>
            </div>

            <div className="flex flex-col md:flex-row gap-12 justify-center">
                {cards.map((card, index) => (
                    <HeroCard key={index} {...card} />
                ))}
            </div>
        </div>
    )
}