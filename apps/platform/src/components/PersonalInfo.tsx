import { FC } from "react";
import { useRoute } from "wouter";
import cx from "classnames";
import MulgaKongz from "../temp/images/campaigns/omgkirby-creator.png";
import { PlatformRoute } from "../configs/routes";

interface PersonalProps {
    avatar?: string;
    name?: string;
}

export const PersonalInfo:FC<PersonalProps> = ({ avatar, name }) => {
    const [match] = useRoute(PlatformRoute.CharityDetails);
    return (
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 py-10 items-center md:justify-start justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="flex flex-wrap md:flex-nowrap items-center gap-4 justify-center md:justify-start">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    alt="creator avatar"
                    className="w-37-1/2 aspect-square rounded-full border border-black"
                    src={avatar ? avatar : MulgaKongz.src}
                />
                <h1 className="md:text-[50px] md:leading-[3.5rem] text-center md:text-left text-base font-bold">{name}</h1>
            </div>

            <div className={cx("button-group", {
                "hidden": !match
            })}>
                <div className="flex gap-8 justify-center xl:justify-end">
                    <button className="outline-button w-33-1/2 h-12 rounded-2xl-1 text-black">Donate</button>
                    <button className="outline-button w-33-1/2 h-12 rounded-2xl-1 text-black">Fundraise</button>
                </div>
            </div>
        </div>
    )
}