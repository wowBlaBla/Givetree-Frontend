import { FC } from "react";

interface Props{
    title: string;
}

export const MintItemTitle:FC<Props> = ({ title }) => (
    <label className="mb-1 text-lg text-black font-bold">
        {title}
    </label>
) 