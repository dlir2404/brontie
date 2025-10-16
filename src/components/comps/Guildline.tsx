import Image from "next/image"
import { GuildlineAccordion } from "./GuildlineAccordion"
import { Heading1 } from "./Heading1"

export const Guildline = () => {
    return (
        <div className="bg-primary text-white py-[56px] pl-[104px]">
            <Heading1 className="text-white text-center mb-6">Everything you need to go live and start earning</Heading1>
            <p className="text-xl font-[400] text-center mb-16">Want the nuts and bolts? Here’s how it all comes together</p>

            <div className="flex items-center justify-center">
                <GuildlineAccordion />

                <Image className="ml-16 w-[563px] h-[367px]" src="/images/tablet.png" alt="Tablet" width={543} height={367} />
            </div>
        </div>
    )
}