import { ArrowLeftIcon } from "@heroicons/react/solid";
import { FC } from "react";
import { Link } from "wouter";
import backgroundImage from "../../assets/images/background.png";
import { PolygonIcon } from "../../components/icons/cryptos/PolygonIcon";

export const AuctionContainer: FC = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[5rem] bg-deep-dark border-b border-base-content border-opacity-25 shadow-sm">
        <div className="flex items-center max-w-layout-xl mx-auto flex items-center h-full">
          <div className="flex items-center cursor-pointer text-white">
            <ArrowLeftIcon className="w-4 mr-2" />
            <span>Back to collection</span>
          </div>
        </div>
      </div>
      <div className="max-w-layout-xl mx-auto text-black py-8">
        <Link href="/">
          <span className="text-[#0085FF]">Fish in the sea</span>
        </Link>
        <h1 className="text-[40px] font-bold">Rainbow Fish #1820</h1>
        <div>
          <span className="mr-1">By</span>
          <span className="text-[#0085FF] mr-2">Mulga</span>
          <span className="mr-1">Owned by</span>
          <span className="text-[#0085FF] mr-2">9273923</span>
          <span className="mr-2">5 favorites</span>
          <span className="mr-2">108 views</span>
        </div>
        <div className="divider" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div>
            <img src={backgroundImage.src} className="rounded-2xl-1" />
            <div className="border border-black rounded-2xl-1 mt-3 bg-white">
              <div className="px-8 py-4 border-b border-black">Description</div>
              <div className="px-8 py-4 border-b border-black">Properties</div>
              <div className="px-8 py-4 border-b border-black">Stats</div>
              <div className="px-8 py-4 border-b border-black">Levels</div>
              <div className="px-8 py-4 border-b border-black">Boosts</div>
              <div className="px-8 py-4 border-b border-black">Dates</div>
              <div className="px-8 py-4">About charity</div>
            </div>
          </div>
          <div>
            <div className="border border-black rounded-t-2xl-1 p-8 bg-white">
              <h1 className="text-center font-bold text-[40px]">Sale</h1>
              <div className="flex items-center justify-center">
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.246 25.3353C31.8419 19.2372 31.4339 9.73752 25.3357 4.14165C19.2376 -1.45422 9.73791 -1.04619 4.14204 5.05196C-1.45383 11.1501 -1.0458 20.6498 5.05236 26.2456C11.1505 31.8415 20.6501 31.4335 26.246 25.3353ZM25.285 24.4534C20.1657 30.0322 11.513 30.4038 5.93424 25.2846C0.355475 20.1653 -0.0161768 11.5126 5.10309 5.93385C10.2224 0.355079 18.8751 -0.016572 24.4538 5.10269C30.0326 10.222 30.4042 18.8747 25.285 24.4534ZM23.8569 23.1291C23.9717 23 24.0306 22.8306 24.0206 22.6582C24.0107 22.4857 23.9327 22.3242 23.8038 22.2091L16.993 15.9593C17.1515 15.5873 17.1907 15.1753 17.1055 14.7801C17.0202 14.3848 16.8146 14.0257 16.5169 13.7521C16.3017 13.5554 16.0453 13.4094 15.7665 13.3245L15.5289 7.79394C15.5269 7.7072 15.5077 7.62171 15.4723 7.54249C15.4369 7.46328 15.386 7.39192 15.3227 7.33261C15.2594 7.27329 15.1848 7.22721 15.1035 7.19706C15.0221 7.16691 14.9355 7.1533 14.8488 7.15703C14.7622 7.16075 14.6771 7.18173 14.5986 7.21875C14.5201 7.25576 14.4498 7.30807 14.3918 7.37259C14.3338 7.43712 14.2892 7.51257 14.2607 7.59453C14.2323 7.67649 14.2204 7.76332 14.2259 7.84991L14.4634 13.3805C14.1929 13.4889 13.95 13.6565 13.7525 13.8708C13.4016 14.2531 13.217 14.7592 13.2393 15.2776C13.2616 15.796 13.4889 16.2844 13.8712 16.6352C14.1694 16.908 14.5447 17.0818 14.9456 17.1327C15.3465 17.1836 15.7533 17.1091 16.1102 16.9195L22.922 23.1702C22.9854 23.2301 23.0603 23.2766 23.1421 23.307C23.2239 23.3374 23.3109 23.3511 23.3981 23.3473C23.4853 23.3435 23.5708 23.3222 23.6496 23.2847C23.7284 23.2472 23.7989 23.1943 23.8569 23.1291Z"
                    fill="#434343"
                  />
                </svg>
                <span className="ml-2">
                  Sale ends November 11, 2022 at 10:50am GMT +11
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-black py-6">
                <span className="text-[20px] font-bold">Price</span>
                <div className="flex items-center">
                  <PolygonIcon />
                  <div className="flex items-end ml-2">
                    <span className="text-[40px] leading-[40px] mr-2">2.0</span>
                    <span>$2.86</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border-b border-black py-6">
                <span className="text-[20px] font-bold">Donating</span>
                <div className="flex items-center">
                  <div className="flex items-end ml-2">
                    <span className="text-[40px] leading-[40px] mr-2">5%</span>
                    <span>$0.10</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between py-6">
                <span className="text-[20px] font-bold">Supporting</span>
                <span className="text-[20px] font-bold">Charity name</span>
              </div>
              <button className="btn w-full h-[65px] bg-transparent text-[20px] capitalize text-[#407FDB] font-bold mt-4">
                Make an offer
              </button>
              <button className="btn w-full h-[65px] bg-[#407FDB] text-[20px] capitalize text-white font-bold mt-4">
                Add to cart{" "}
              </button>
            </div>
            <div className="bg-white mt-3">
              <div className="px-8 py-4 border-b border border-black rounded-t-2xl-1">
                Price history
              </div>
              <div className="bg-[#F3F3F3] border border-[#767373] h-[80px]"></div>
            </div>
            <div className="px-8 py-4 rounded-2xl-1 bg-white border border-black mt-3">
              <span>Listings</span>
            </div>
            <div className="px-8 py-4 rounded-2xl-1 bg-white border border-black mt-3">
              <span>Offers</span>
            </div>
          </div>
        </div>
        <div className="px-8 py-4 rounded-2xl-1 bg-white border border-black mt-8">
          <span>Item activity</span>
        </div>
      </div>
    </div>
  );
};
