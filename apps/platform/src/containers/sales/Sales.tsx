import { FC } from "react";
import cx from "classnames";
import { CollectionBadge } from "../../components/badges/CollectionBadge";
import { PolygonIcon } from "../../components/icons/cryptos/PolygonIcon";
import MulgaKongz from "../../temp/images/campaigns/mulgakongz-collection.png";
import { CampaignDescription, PriceDescription } from "../../configs/collectionText";

interface Props {
    campaignName: string
}

export const SalesContainer:FC<Props> = ({ campaignName }) => {

    return (
        <div className="w-full py-10 px-10">
            <div className="w-full max-w-[1280px] flex flex-wrap lg:flex-nowrap  justify-center mx-auto gap-10">
                <div className="lg:w-[487px] flex flex-col md:w-[508px] w-full aspect-square">
                    <div className="preview-art w-inherit">
                        <img
                            src={MulgaKongz.src}
                            alt="art-work"
                            className="w-full rounded-2xl-1 border border-base-content border-opacity-25"
                        />
                    </div>
                    <div className="meta-panel mt-5 dark:text-white">
                        <div className="border border-base-content border-opacity-25 border-b-0 rounded-t-2xl-1 p-5">
                            <span className="text-base">Description</span>
                        </div>
                        <div className="border border-base-content border-opacity-25 border-b-0 p-5">
                            <span className="text-base">Properties</span>
                        </div>
                        <div className="border border-base-content border-opacity-25 border-b-0 p-5">
                            <span className="text-base">About Artist</span>
                        </div>
                        <div className="border border-base-content border-opacity-25 rounded-b-2xl-1 p-5">
                            <span className="text-base">About Charity</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full dark:text-white">
                    <h1 className="text-6xl font-bold">Rainbow Fish</h1>
                    <ul className="list-none text-[18px] my-2">
                        <li>
                            <span className="uppercase">created by:</span>
                            <span className="font-bold ml-1">Mulga the artist</span>
                        </li>
                        <li>
                            <span className="uppercase">supporting:</span>
                            <span className="font-bold ml-1">HalfCut</span>
                        </li>
                        <li>
                            <span className="uppercase">donating:</span>
                            <span className="font-bold ml-1">75%</span>
                        </li>
                    </ul>
                    <div className="shadow-lg rounded-2xl-1">
                        <div className="grid grid-cols-1 gap-1 pl-7 pr-4 pt-2 pb-6 border-[3px] border-base-content border-opacity-25 rounded-t-2xl-1">
                            <div className="text-right">
                                <CollectionBadge campaignName={campaignName}/>
                            </div>
                            <div>
                                <label className="md:text-xl text-base">{CampaignDescription[campaignName]} date x at time x</label>
                            </div>
                            <div className="">
                                <label className="md:text-3xl text-xl">2 days 3 hours 45 min 55 sec</label>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-1 pl-7 p-5 border-t-0 border-[3px] border-base-content border-opacity-25 rounded-b-2xl-1">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                                <div className="grid grid-cols-1">
                                    <label className="text-xl">{PriceDescription[campaignName]}</label>
                                    <div className="flex items-center mt-2">
                                        <PolygonIcon
                                            className="w-9 h-9 inline-block"
                                        />
                                        <span className="text-3xl ml-2 mr-6">2.0</span>
                                        <span className="text-xl">($2.86 AUD)</span>
                                    </div>
                                </div>
                                <div
                                    className={cx("grid grid-cols-1",
                                        {"hidden": campaignName == 'mint' ? false : true}
                                    )}
                                >
                                    <label className="text-xl">Supply</label>
                                    <div className="flex items-center mt-2">
                                        <span className="text-3xl ml-2 mr-6">5/20</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-7">
                                {
                                    campaignName == "mint" ? (
                                        <button type="button" className="w-39 rounded-2xl-1 text-xl py-6 outline-button text-black">Mint</button>
                                    ) : (
                                        campaignName == "sale" ? (
                                            <button type="button" className="w-39 rounded-2xl-1 text-xl py-6 primary-button text-white">Buy now</button>
                                        )
                                        : (
                                            <button type="button" className="w-39 rounded-2xl-1 text-xl py-6 primary-button text-white">Bid</button>
                                        )
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}