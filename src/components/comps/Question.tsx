import Image from "next/image"
import { Heading1 } from "./Heading1"
import { QuestionCollapsible, QuestionCollapsibleProps } from "./QuestionCollapsible"

export const Question = () => {
    const questions: QuestionCollapsibleProps[] = [
        {
            title: "What is a Brontie voucher?",
            content: <p>Each Brontie voucher works like a flexible credit for your café. It lets customers choose any items up to the value shown (e.g. a ‘Coffee & Cake’ voucher represents an €8 value). It’s not tied to one product — it simply reflects that total value.</p>,
            open: true
        },
        {
            title: "If a customer orders a €3 tea but has an €8 voucher, do I refund them?",
            content: <></>
        },
        {
            title: "What if a customer wants extras like oat milk or syrup?",
            content: <></>
        },
        {
            title: "Am I liable for VAT?",
            content: <></>
        },
        {
            title: "Does it cost anything to join?",
            content: <></>
        },
        {
            title: "How and when do I get paid?",
            content: <></>
        }
    ]

    return (
        <div className="pt-8 pb-[56px] px-6 md:py-20 md:px-[104px] bg-main-white">
            <div className="flex flex-col items-center text-center md:text-start">
                <Heading1 className="md:-translate-x-50">Got questions? We&apos;ve got answers.</Heading1>
                <p className="text-xl text-text-main mb-8 md:mb-[57px] md:-translate-x-72">The most common questions we get from cafés — answered simply.</p>
            </div>

            <div className="flex justify-center items-center">
                <div>
                    {questions.map((item, index) => (
                        <QuestionCollapsible
                            className={index === questions.length - 1 ? "" : "mb-4"}
                            title={item.title}
                            content={item.content}
                            open={item.open}
                            key={index}
                        />
                    ))}
                </div>

                <Image
                    src="/images/question.jpg"
                    alt="Question Image"
                    width={552}
                    height={569}
                    className="hidden md:block ml-[56px] w-[552px] h-[569px] rounded-2xl object-cover object-[60%_90%]"
                />
            </div>
        </div>
    )
}