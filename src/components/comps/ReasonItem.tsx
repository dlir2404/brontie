export interface ReasonItemProps {
    icon: React.ReactNode;
    title: string;
    content: React.ReactNode;
}

export const ReasonItem = ({ icon, title, content }: ReasonItemProps) => {
    return (
        <div className="flex items-start gap-4">
            <div className="w-6 h-6 min-w-6 md:w-12 md:min-w-12 md:h-12 bg-third rounded-2xl flex items-center justify-center">{icon}</div>

            <div>
                <h3 className="font-bold mb-1 md:mb-2">{title}</h3>
                <div className="flex flex-col gap-3 font-[400] text-text-main text-[12px] md:text-[16px]">
                    {content}
                </div>
            </div>
        </div>
    )
}