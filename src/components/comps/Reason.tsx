import { Heading1 } from "./Heading1"
import ChartSvg from "@/assets/icons/chart.svg"
import TeamSvg from "@/assets/icons/team.svg"
import ClockSvg from "@/assets/icons/clock.svg"
import EuroSvg from "@/assets/icons/euro.svg"
import CharitySvg from "@/assets/icons/charity.svg"
import { ReasonItem, ReasonItemProps } from "./ReasonItem"
import Image from "next/image"


export const Reason = () => {
    const reason1: ReasonItemProps[] = [
        {
            icon: <ChartSvg className="w-4 h-4" />,
            title: "New Revenue Stream",
            content: <p className="text-text-main">Brontie is more than a gift card — it&apos;s a new way to earn from your café. Unlike traditional vouchers, Brontie gifts are small, impulse- driven, and often shared. They bring in customers who may not have visited before and encourage repeat visits.</p>
        },
        {
            icon: <TeamSvg />,
            title: "Bring in New Faces, Every Week",
            content: <>
                <p>Recipients often bring a friend when redeeming their gift — meaning one voucher often brings two customers through your door.</p>
                <div className="bg-third text-primary border-l-4 border-primary rounded-tr-2xl rounded-br-2xl py-[18px] px-5">
                    <p>&ldquo;This has brought in new faces curious to see how they can</p>
                    <p>redeem their gift.&rdquo;</p>
                    <p className="mt-2">— Barista, Willow & Wild Café</p>
                </div>
            </>
        },
        {
            icon: <ClockSvg />,
            title: "Turn Gifts Into Visits, Fast",
            content: <p>Bronties don&apos;t linger. On average, they&apos;re redeemed within 13 days — giving your café a steady, consistent stream of new visitors.</p>
        }
    ]

    const reason2: ReasonItemProps[] = [
        {
            icon: <EuroSvg className="w-4 h-4" />,
            title: "Higher-Value Treats",
            content: <>
                <p className="text-text-main mb-4">57% of Brontie customers choose a two coffees + cake option instead of a single drink. The average Brontie order value is €7.67* (based on 100 data points), showing that people are generous and happy to spend a little more when gifting.</p>
                <div className="py-[18px] pl-4 rounded-2xl bg-third text-primary">That means higher revenue potential for cafés.</div>
            </>
        },
        {
            icon: <CharitySvg />,
            title: "No Hassle, No Costs",
            content: <p>Free to join, no setup fees, no monthly subscriptions. You only pay when you earn. We handle all the technical complexity while you focus on what you do best — making great coffee.</p>
        }
    ]

    return (
        <div className="py-[56px] px-6 md:py-20 md:px-[104px] bg-main-white">
            <Heading1 className="text-center">Why Cafés Love Brontie</Heading1>
            <p className="px-[18px] md:px-0 text-xl text-text-main mb-8 md:mb-[57px] text-center">Discover how Brontie can transform your café&apos;s customer acquisition and revenue streams.</p>

            <div className="flex flex-col md:flex-row justify-center mb-6 md:mb-16">
                <div className="md:w-[584px] md:h-[484px] flex flex-col gap-8 mb-6 md:mb-0">
                    {reason1.map((item, index) => (
                        <ReasonItem icon={item.icon} title={item.title} content={item.content} key={index} />
                    ))}
                </div>

                <Image src="/images/reason1.png" alt="Reason 1 Image" width={584} height={491} className="md:ml-16 md:w-[584px] md:h-[491px] bg-white rounded-2xl" />
            </div>

            <div className="flex flex-col-reverse md:flex-row justify-center">
                <Image src="/images/reason2.png" alt="Reason 2 Image" width={584} height={384} className="md:w-[584px] md:h-[384px] bg-white rounded-2xl" />

                <div className="md:w-[584px] flex flex-col gap-8 mb-6 md:mb-0 md:ml-16">
                    {reason2.map((item, index) => (
                        <ReasonItem icon={item.icon} title={item.title} content={item.content} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}