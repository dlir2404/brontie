export interface ReasonItemProps {
    icon: React.ReactNode;
    title: string;
    content: React.ReactNode;
}

export const ReasonItem = ({ icon, title, content }: ReasonItemProps) => {
    return (
        <div className="flex items-start gap-4">
            <div className="w-12 min-w-12 h-12 bg-third rounded-2xl flex items-center justify-center">{icon}</div>

            <div>
                <h3 className="font-bold mb-2">{title}</h3>
                <div className="flex flex-col gap-3 font-[400] text-text-main text-[16px]">
                    {content}
                </div>
            </div>
        </div>
    )
}