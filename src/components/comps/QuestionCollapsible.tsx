"use client";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import ExpandSvg from "../../assets/icons/expand.svg";
import CloseSvg from "../../assets/icons/close.svg";
import { cn } from "@/lib/utils";

export interface QuestionCollapsibleProps {
    title: string;
    content: React.ReactNode;
    className?: string;
    open?: boolean;
}

export const QuestionCollapsible = ({ title, content, className, open }: QuestionCollapsibleProps) => {
    const [isOpen, setIsOpen] = useState(open || false);

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className={cn("border border-border rounded-2xl w-[624px]", className)}
        >
            <CollapsibleTrigger asChild>
                <div className="flex my-5 mx-6 items-center justify-between cursor-pointer group" >
                    <h3 className="font-[600] text-[16px] group-hover:underline">{title}</h3>
                    {isOpen ? <ExpandSvg /> : <CloseSvg />}
                </div>
            </CollapsibleTrigger>
            <CollapsibleContent asChild>
                <div className="text-text-main m-6 mt-0 text-[14px] font-[400] w-[576px]">{content}</div>
            </CollapsibleContent>
        </Collapsible>
    )
}