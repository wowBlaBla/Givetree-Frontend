import { FC } from "react";
import { RequiredIcon } from "./icons/RequiredIcon";

interface Props{
    title: string;
    subTitle?: string;
    required?: boolean;
}

export const MintItemTitle:FC<Props> = ({ title, subTitle, required }) => (
    <>
        <div className="flex items-center gap-x-2">
            <label className="text-lg text-black font-bold">
                {title}
            </label>
            { required ? <RequiredIcon /> : "" }
        </div>
        <span className="text-sm text-black mb-1">
            {subTitle}
        </span>
    </>
) 