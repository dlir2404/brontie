import { AccordionItem, GuildlineAccordionItem } from "./GuildlineAccordionItem"
import LauncherSvg from "@/assets/icons/launcher.svg"
import EuroSvg from "@/assets/icons/euro.svg"
import ChartSvg from "@/assets/icons/chart.svg"
import SuppportSvg from "@/assets/icons/support.svg"
import QrSvg from "@/assets/icons/qr.svg"
import { Accordion } from "../ui/accordion"

export const GuildlineAccordion = () => {
    const items: AccordionItem[] = [
        {
            index: 1,
            icon: <LauncherSvg />,
            title: "Onboarding",
            content: (
                <>
                    <ul className="list-disc ml-4">
                        <li className="mb-2">Click the link to get started — add your café details and first product (optional).</li>
                        <li className="mb-2">
                            Brontie reviews your application within 24 hours. Once approved, you can:
                            <ul className="list-decimal ml-4">
                                <li className="mb-2">Update your profile</li>
                                <li className="mb-2">Add your IBAN for payouts</li>
                                <li className="mb-2">Manage products and prices</li>
                            </ul>
                        </li>
                        <li className="mb-2">✅ And that’s it — your café is live and ready for gifting!</li>
                    </ul>
                </>
            )
        },
        {
            index: 2,
            icon: <ChartSvg />,
            title: "Dashboard",
            content: (<></>),
        },
        {
            index: 3,
            icon: <QrSvg />,
            title: "Redeeming",
            content: (<></>)
        },
        {
            index: 4,
            icon: <EuroSvg />,
            title: "Getting Paid",
            content: (<></>)
        },
        {
            index: 5,
            icon: <SuppportSvg />,
            title: "Support & Next Steps",
            content: (<></>)
        }
    ]

    return (
        <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="bg-white w-[729px] rounded-2xl"
        >
            {items.map((item) => (
                <GuildlineAccordionItem key={item.index} index={item.index} icon={item.icon} title={item.title} content={item.content} />
            ))}
        </Accordion>
    )
}