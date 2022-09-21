import { useQuery } from "@apollo/client";
import { FC } from "react";
import { Link } from "wouter";
import cx from "classnames";
import { ErrorContainer } from "../../components/ErrorContainer";
import { LoadingContainer } from "../../components/LoadingContainer";
import { SectionSubtitle } from "../../components/SectionSubtitle";
import { SectionTitle } from "../../components/SectionTitle";
import { GetCampaignDetailsDataQuery, GET_CAMPAIGN_DETAILS_DATA } from "../campaigns/detail/DetailsData";
import { Fundraisers } from "../../components/Fundraisers";
import { FilterListIcon } from "../../components/icons/FilterListIcon";
import { ShowMore } from "../../components/ShowMore";

interface Props {
    collectionName: string
}

const navs = [
    "Items",
    "Activity",
];

export const CollectionContainer:FC<Props> = ({ collectionName }) => {
    const { data, loading, error } = useQuery<GetCampaignDetailsDataQuery>(
        GET_CAMPAIGN_DETAILS_DATA,
        {
            variables: { slug: collectionName },
        }
    );

    if (loading) {``
        return <LoadingContainer message="Loading mints..." />;
    }

    if (error) {
        return <ErrorContainer message="Could not load mints." />;
    }

    if (!data) {
        return <ErrorContainer message="Could not load mints." />;
    }

    return (
        <div>
            <div className="flex flex-col gap-2 my-10 px-10">
                <div className="collection-brand flex flex-wrap gap-2">
                    <img
                        src={data.campaign.creators[0].media.previewUrl}
                        className="w-50 h-50 rounded-2xl-1 border border-base-content border-opacity-25"
                        alt="collection-brand"
                    />
                    <div className="max-w-xl">
                        <div className="flex flex-col px-1 my-3 space-y-3 text-left w-full md:w-auto">
                            <SectionTitle className={""}>{data.campaign.title}</SectionTitle>
                            <SectionSubtitle className="text-gray-600 text-lg">by {data.campaign.creators[0].name}</SectionSubtitle>
                        </div>
                        <div className="description">
                            <ShowMore
                                text={data.campaign.creators[0].description}
                            />
                        </div>
                    </div>
                </div>
                <div className="collection-specifications grid md:grid-cols-2 gap-2 mt-10 items-center dark:text-white">
                    <div className="flex flex-wrap gap-10 text-lg">
                        <div className="flex flex-col gap-1">
                            <span className="font-bold">5.6K</span>
                            <span>Items</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-bold">1.5K</span>
                            <span>Owners</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-bold">45.5K</span>
                            <span>Total volume</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-bold">2.59</span>
                            <span>Floor price</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-bold">25K</span>
                            <span>Raised</span>
                        </div>
                    </div>
                    <div className="hidden md:flex gap-4 justify-end">
                        <Link
                            href="#"
                            className="border border-base-content border-opacity-25 w-10 h-8 rounded-2xl-1 inline-block"
                        ></Link>
                        <Link
                            href="#"
                            className="border border-base-content border-opacity-25 w-10 h-8 rounded-2xl-1 inline-block"
                        ></Link>
                        <Link
                            href="#"
                            className="border border-base-content border-opacity-25 w-10 h-8 rounded-2xl-1 inline-block"
                        ></Link>
                        <Link
                            href="#"
                            className="border border-base-content border-opacity-25 w-10 h-8 rounded-2xl-1 inline-block"
                        ></Link>
                    </div>
                </div>
            </div>
            <div className="border-b border-base-content border-opacity-25 overflow-x-auto scroll-pb-5">
                <div className="mx-auto w-full md:px-10 px-4">
                    <ul
                        className="nav nav-tabs flex gap-2 list-none border-b-0 pl-0"
                        id="tabs-tab"
                        role="tablist"
                    >
                        <li
                            className={cx("nav-item hidden md:list-item")}
                            role="presentation"
                        >
                            <a
                                href="javascript:void(0);"
                                className="nav-link block text-lg leading-tight capitalize p-3 hover:border-b-brand-orange hover:bg-gray-100 focus:border-transparent active dark:hover:bg-deep-dark"
                                id="tabs-home-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#tabs-home"
                                role="tab"
                                aria-controls="tabs-home"
                                aria-selected="true"
                            >
                                <FilterListIcon className="w-8 h-8 dark:text-white"/>
                            </a>
                        </li>
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
                                        className="nav-link block text-lg leading-tight capitalize px-6 py-3 hover:border-b-brand-orange hover:bg-gray-100 focus:border-transparent active dark:text-white dark:hover:bg-deep-dark"
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
            <div className="flex min-h-[800px]">
                <div className="sidebar border-r border-base-content border-opacity-25 w-full max-w-[300px] hidden xl:block">
                    <ul className="cursor-pointer dark:text-white">
                        <li className="text-lg px-3 py-2 border-b border-base-content border-opacity-25">Buy Now</li>
                        <li className="text-lg px-3 py-2 border-b border-base-content border-opacity-25">Price</li>
                        <li className="text-lg px-3 py-2 border-b border-base-content border-opacity-25">Accessory</li>
                        <li className="text-lg px-3 py-2 border-b border-base-content border-opacity-25">Background</li>
                        <li className="text-lg px-3 py-2 border-b border-base-content border-opacity-25">Ears</li>
                        <li className="text-lg px-3 py-2 border-b border-base-content border-opacity-25">Extra</li>
                        <li className="text-lg px-3 py-2 border-b border-base-content border-opacity-25">Eyes</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3 w-full p-4">
                    <div className="md:grid grid-cols-3 items-center hidden gap-2 dark:text-white">
                        <div>
                            <span>Updated 5mins ago</span>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Search"
                                className="rounded-2xl-1 h-10 px-4 border border-base-content border-opacity-25 dark:bg-deep-dark w-full outline-0 focus:border-indigo-500"
                            />
                        </div>
                        <div className="flex gap-2 justify-end">
                            <span className="border border-base-content border-opacity-25 rounded-2xl-1 p-2">Price high to low </span>
                            <span className="border border-base-content border-opacity-25 rounded-2xl-1 p-2 px-4">View</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 md:hidden block">
                        <div>
                            <input
                                type="text"
                                placeholder="Search"
                                className="rounded-2xl-1 h-10 px-3 border border-black w-full outline-0 focus:border-indigo-500"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                            <button className="border border-black rounded-lg p-2 cursor-pointer dark:bg-white dark:border-white dark:hover:bg-mid-dark dark:hover:text-white">Filter</button>
                            <button className="border border-black rounded-lg p-2 cursor-pointer dark:bg-white dark:border-white dark:hover:bg-mid-dark dark:hover:text-white">Sort</button>
                        </div>
                    </div>
                    <div className="md:flex items-end justify-between hidden">
                        <div className="active-filters flex gap-1 dark:text-white">
                            <span className="py-1 px-2 border border-base-content border-opacity-25">Clear All</span>
                            <span className="py-1 px-2 border border-base-content border-opacity-25">Head: Mustache</span>
                        </div>
                        <div>
                            <span className="dark:text-white">50 items</span>
                        </div>
                    </div>

                    <Fundraisers/>
                </div>
            </div>
        </div>
    )
}