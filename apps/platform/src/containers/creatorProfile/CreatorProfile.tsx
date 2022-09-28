import { FC } from "react";
import cx from "classnames";
import { PersonalInfo } from "../../components/PersonalInfo";
import { ProfileBanner } from "../../components/ProfileBanner";
import { Fundraisers } from "../../components/Fundraisers";

interface CreatorProfileProps {
    creatorName?: string
}

const navs = [
    "Fundraiser",
    "About",
];

export const CreatorProfile:FC<CreatorProfileProps> = () => {

    return (
        <div className="grid grid-cols-1 gap-3 mb-2">
            <ProfileBanner/>
            <div className="max-w-layout mx-auto w-full">
                <PersonalInfo
                    name={"Mulga The Artist"}
                />
            </div>
            <div className="border-b border-black overflow-x-auto scroll-pb-5">
                <div className="max-w-layout mx-auto w-full">
                    <ul
                        className="nav nav-tabs flex gap-2 list-none border-b-0 pl-0"
                        id="tabs-tab"
                        role="tablist"
                    >
                        {
                            navs.map((item, idx) => (
                                <li
                                    className={cx("border-b-4 nav-item", {
                                        "active-nav": idx == 0,
                                        "border-transparent": idx != 0
                                    })}
                                    role="presentation"
                                    key={idx}
                                >
                                    <a
                                        href="#tabs-home"
                                        className="nav-link block text-lg leading-tight capitalize px-6 py-3 hover:border-b-brand-orange hover:bg-gray-100 focus:border-transparent active"
                                        id="tabs-home-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#tabs-home"
                                        role="tab"
                                        aria-controls="tabs-home"
                                        aria-selected="true"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <Fundraisers/>
        </div>
    )
}