import Image from "next/image"
import { GuildlineAccordion } from "./GuildlineAccordion"
import { Heading1 } from "./Heading1"

export const Guildline = () => {
    return (
        <div className="bg-primary text-white p-6 pt-10 md:py-[56px] md:pl-[104px]">
            <Heading1 className="text-white text-center px-5 md:px-0 mb-2 md:mb-6">Everything you need to go live and start earning</Heading1>
            <p className="text-[16px] px-[50px] md:px-0 md:text-xl font-[400] text-center mb-8 md:mb-16">Want the nuts and bolts? Here’s how it all comes together</p>

            <div className="flex items-center justify-center">
                <GuildlineAccordion />

                <Image className="hidden md:block ml-16 w-[563px] h-[367px]" src="/images/tablet.png" alt="Tablet" width={543} height={367} />
            </div>
        </div>
    )
}