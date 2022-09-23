import { FC } from "react";
import cx from "classnames";
import { PersonalInfo } from "../../components/PersonalInfo";
import { ProfileBanner } from "../../components/ProfileBanner";
import { GetCharityDetailsDataQuery, GET_CHARITY_DETAILS_DATA } from "./detail/DetailsData";
import { useQuery } from "@apollo/client";
import { LoadingContainer } from "../../components/LoadingContainer";
import { ErrorContainer } from "../../components/ErrorContainer";
import { Fundraisers } from "../../components/Fundraisers";

interface CreatorProfileProps {
    charityName: string
}

const navs = [
    "Fundraiser",
    "Donations",
    "About",
];

export const CharityProfileContainer:FC<CreatorProfileProps> = ({ charityName }) => {

    const { data, loading, error } = useQuery<GetCharityDetailsDataQuery>(
        GET_CHARITY_DETAILS_DATA,
        {
          variables: { slug: charityName },
        }
    );

    if (loading) {
        return <LoadingContainer message="Loading charity details..." />;
    }

    if (error) {
        return <ErrorContainer message="Could not load charity details." />;
    }

    if (!data) {
        return <ErrorContainer message="Could not load charity details." />;
    }
    
    return (
        <div className="grid grid-cols-1 gap-3 mb-2">
            <ProfileBanner/>
            <div className="max-w-screen-2xl mx-auto w-full md:px-20 px-4">
                <PersonalInfo
                    avatar={data.charity.media.tileUrl}
                    name={data.charity.name}
                />
            </div>
            <div className="border-b border-base-content border-opacity-25 overflow-x-auto scroll-pb-5">
                <div className="max-w-screen-2xl mx-auto w-full md:px-20 px-4">
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
                                        href="javascript:void(0);"
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
            <Fundraisers className="max-w-layout-xl w-full my-10"/>
        </div>
    )
}