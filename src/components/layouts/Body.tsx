import { Guildline } from "../comps/Guildline"
import { Hero } from "../comps/Hero"
import { Question } from "../comps/Question"
import { Reason } from "../comps/Reason"

export const Body = () => {
    return (
        <>
            <Hero />
            <Guildline />
            <Reason />
            <Question />
        </>
    )
}