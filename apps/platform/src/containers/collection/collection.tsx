import { useQuery } from "@apollo/client";
import { FC } from "react";
import { Link } from "wouter";
import cx from "classnames";
import { ErrorContainer } from "../../components/ErrorContainer";
import { LoadingContainer } from "../../components/LoadingContainer";
import { SectionSubtitle } from "../../components/SectionSubtitle";
import { SectionTitle } from "../../components/SectionTitle";
import {
  GetCampaignDetailsDataQuery,
  GET_CAMPAIGN_DETAILS_DATA,
} from "../campaigns/detail/DetailsData";
import { Fundraisers } from "../../components/Fundraisers";
import { FilterListIcon } from "../../components/icons/FilterListIcon";
import { ShowMore } from "../../components/ShowMore";
import Image from "next/image";

interface Props {
  collectionName: string;
}

const navs = ["Items", "Activity"];

export const CollectionContainer: FC<Props> = ({ collectionName }) => {
  const { data, loading, error } = useQuery<GetCampaignDetailsDataQuery>(
    GET_CAMPAIGN_DETAILS_DATA,
    {
      variables: { slug: collectionName },
    }
  );

  if (loading) {
    ``;
    return <LoadingContainer message="Loading mints..." />;
  }

  if (error) {
    return <ErrorContainer message="Could not load mints." />;
  }

  if (!data) {
    return <ErrorContainer message="Could not load mints." />;
  }

  return (
    <div className="public-profile">
      <div className="profile-banner">
        <div className="flex flex-col items-center px-10 mx-auto md:flex-row">
          <div className="collection-avatar-container">
            <div className="relative w-full h-full">
              <Image
                src={data.campaign.creators[0].media.previewUrl}
                layout="fill"
                objectFit="contain"
                alt="charity"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 my-10 px-10 text-black">
        <div className="collection-brand flex flex-wrap gap-2">
          <div className="max-w-xl">
            <div className="flex flex-col my-3 space-y-3 text-left w-full md:w-auto">
              <SectionTitle className={""}>{data.campaign.title}</SectionTitle>
              <SectionSubtitle className="text-lg">
                By {data.campaign.creators[0].name}
              </SectionSubtitle>
            </div>
            <div className="description">
              <ShowMore text={data.campaign.creators[0].description} />
            </div>
          </div>
        </div>
        <div className="collection-specifications grid md:grid-cols-2 gap-2 mt-10 items-center">
          <div className="flex flex-wrap gap-10 text-lg">
            <div className="flex flex-col gap-1">
              <span>5.6K</span>
              <span>Items</span>
            </div>
            <div className="flex flex-col gap-1">
              <span>1.5K</span>
              <span>Owners</span>
            </div>
            <div className="flex flex-col gap-1">
              <span>45.5K</span>
              <span>Total volume</span>
            </div>
            <div className="flex flex-col gap-1">
              <span>2.59</span>
              <span>Floor price</span>
            </div>
            <div className="flex flex-col gap-1">
              <span>25K</span>
              <span>Raised</span>
            </div>
          </div>
          <div className="hidden md:flex gap-4 justify-end">
            <Link
              href="#"
              className="border border-black w-10 h-8 rounded-2xl-1 inline-block"
            ></Link>
            <Link
              href="#"
              className="border border-black w-10 h-8 rounded-2xl-1 inline-block"
            ></Link>
            <Link
              href="#"
              className="border border-black w-10 h-8 rounded-2xl-1 inline-block"
            ></Link>
            <Link
              href="#"
              className="border border-black w-10 h-8 rounded-2xl-1 inline-block"
            ></Link>
          </div>
        </div>
      </div>
      <div className="border-b border-black overflow-x-auto scroll-pb-5">
        <div className="px-6">
          <ul
            className="nav nav-tabs flex gap-2 list-none border-b-0 pl-0 items-center"
            id="tabs-tab"
            role="tablist"
          >
            <li className={cx("nav-item hidden md:list-item")} role="presentation">
              <span className="nav-link block text-lg leading-tight capitalize hover:border-b-brand-orange">
                <svg
                  width="32"
                  height="18"
                  viewBox="0 0 32 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="4" fill="#919191" />
                  <rect x="4" y="7" width="23" height="4" fill="#919191" />
                  <rect x="10" y="14" width="12" height="4" fill="#919191" />
                </svg>
              </span>
            </li>
            {navs.map((item, idx) => (
              <li
                className={cx("border-b-4 nav-item p-2 ml-2 cursor-pointer text-black", {
                  "active-nav": idx == 0,
                  "border-transparent": idx != 0,
                })}
                role="presentation"
                key={idx}
              >
                <span className="nav-link block text-lg capitalize">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex min-h-[800px]">
        <div className="sidebar border-r border-black w-full max-w-[300px] hidden lg:block">
          <ul className="cursor-pointer text-black">
            <li className="text-lg px-3 py-2 border-b border-black">Buy Now</li>
            <li className="text-lg px-3 py-2 border-b border-black">Price</li>
            <li className="text-lg px-3 py-2 border-b border-black">Accessory</li>
            <li className="text-lg px-3 py-2 border-b border-black">Background</li>
            <li className="text-lg px-3 py-2 border-b border-black">Ears</li>
            <li className="text-lg px-3 py-2 border-b border-black">Extra</li>
            <li className="text-lg px-3 py-2 border-b border-black">Eyes</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 w-full p-4">
          <div className="md:grid grid-cols-3 items-center hidden gap-2 text-black">
            <div>
              <span>Updated 5mins ago</span>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search"
                className="rounded-2xl-1 h-10 px-4 border border-black w-full outline-0"
              />
            </div>
            <div className="flex gap-2 justify-end">
              <span className="border border-black rounded-2xl-1 cursor-pointer p-2">
                Price high to low{" "}
              </span>
              <span className="border border-black rounded-2xl-1 cursor-pointer p-2 px-4">
                View
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:hidden block text-black">
            <div>
              <input
                type="text"
                placeholder="Search"
                className="rounded-2xl-1 h-10 px-3 border border-black w-full outline-0"
              />
            </div>
            <div className="grid grid-cols-2 gap-1">
              <button className="border border-black rounded-lg p-2 cursor-pointer bg-base-100 btn">
                Filter
              </button>
              <button className="border border-black rounded-lg p-2 cursor-pointer bg-base-100 btn">
                Sort
              </button>
            </div>
          </div>
          <div className="md:flex items-end justify-between hidden text-black">
            <div className="active-filters flex gap-1">
              <span className="py-1 px-2 border border-black">Clear All</span>
              <span className="py-1 px-2 border border-black">Head: Mustache</span>
            </div>
            <div>
              <span className="">50 items</span>
            </div>
          </div>

          <Fundraisers />
        </div>
      </div>
    </div>
  );
};
