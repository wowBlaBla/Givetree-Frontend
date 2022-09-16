import { FC, useState } from "react";

interface Props {
    text: string;
}

export const ShowMore:FC<Props> = ({ text }) => {
    const [expand, setExpand] = useState(false);
    return (
        <div className="flex flex-col gap-2 dark:text-white">
            <span>
                {
                    text.length > 100 ? (
                        <>
                            {
                                !expand ? text.slice(0, 100) + '...'  : text
                            }
                        </>
                    ) : text
                }
            </span>
            {
                text.length > 100 && (
                    <span
                        className="font-bold cursor-pointer hover:text-sky-300"
                        onClick={() => setExpand(!expand)}
                    >Read {expand ? "less": "more"}</span>
                )
            }
        </div>
    )
}