import { AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export interface AccordionItem {
    index: number;
    icon: React.ReactNode;
    title: string;
    content: React.ReactNode;
}

export const GuildlineAccordionItem = ({ index, icon, title, content }: AccordionItem) => {
    return (
        <AccordionItem value={`item-${index}`} className="px-10">
            <AccordionTrigger className="text-primary min-h-[56px] items-center">
                <div className="flex items-center gap-4 [&>svg>path]:fill-primary">
                    {icon}
                    <div className="font-medium text-2xl">{title}</div>
                </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance text-black">
                {content}
            </AccordionContent>
        </AccordionItem>
    )
}