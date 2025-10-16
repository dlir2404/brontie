import { Button } from "../ui/button"
import { Heading1 } from "./Heading1"

export const Cta = () => {
    return (
        <div className="py-20 px-[104px] bg-third text-center">
            <div className="flex flex-col items-center">
                <Heading1 className="w-[660px]">Ready to Join Ireland's Café Community?</Heading1>
                <p className="text-xl text-text-main mb-8 w-[807px]">Start attracting new customers today with zero upfront costs. Join the cafés already using Brontie to grow their business.</p>
            </div>

            <div className="mb-6">
                <Button size="lg" className="mr-6">Start Listing (Free)</Button>
                <Button size="lg" variant="outline" className="text-[#747474]">Chat on WhatApp</Button>
            </div>

            <p className="text-text-main font-[400] text-[14px]">No setup fees • No monthly costs • You only pay when you earn</p>
        </div>
    )
}