import { FC, useMemo, useState } from "react";
import { Link, useRoute } from "wouter";
import { PlatformRoute } from "../../configs/routes";
import { CheckBox } from "../../components/CheckBox";
import { InputBox } from "../../components/InputBox";
import { NavItem } from "../profile/ProfileSidebar";

const mainNavs: NavItem[] = [
  {
    category: "nfts",
    title: "NFTs",
  },
  {
    category: "collections",
    title: "Collections",
  },
  {
    category: "charities",
    title: "Charities",
  },
  {
    category: "creators",
    title: "Creators",
  },
  {
    category: "mint-pages",
    title: "Mint pages",
  },
  {
    category: "causes",
    title: "Causes",
  },
  {
    category: "leader-borders",
    title: "Leaderboards",
  },
];

interface ExploreSideBarProps {
  visible?: boolean;
  setVisible?: (visible: boolean) => void;
}

export const ExploreSideBar: FC<ExploreSideBarProps> = ({ visible, setVisible }) => {
  const [mainNav, setMainNav] = useState<NavItem>();
  const [_, params] = useRoute(PlatformRoute.ExploreDetails);

  return (
    <div
      className={`side-bar ${
        visible ? "absolute" : "hidden lg:flex"
      } top-[80px] lg:top-0 left-0 flex-col w-full lg:min-w-[240px] lg:max-w-[240px] border-r border-base-content border-opacity-25 bg-mid-dark z-10`}
    >
      <div className="text-[#BABABA] bg-[#1E2126] border-t border-b border-[#696969] px-6 py-4">
        {!mainNav ? (
          <div className="flex flex-col">
            <span className="text-[16px] font-bold">EXPLORE</span>
            <span className="text-[20px] font-bold">GIVETREE</span>
          </div>
        ) : (
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setMainNav(undefined)}
          >
            <svg
              width="10"
              height="19"
              viewBox="0 0 10 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.2069 0L0.37931 8.82759L0 9.22414L0.37931 9.62069L9.2069 18.4483L10 17.6552L1.56897 9.22414L10 0.793103L9.2069 0Z"
                fill="#F3F3F3"
              />
            </svg>
            <span className="text-[16px] font-bold ml-4">Main Menu</span>
          </div>
        )}
      </div>
      <div className="bg-mid-dark">
        {!mainNav ? (
          mainNavs.map((item, idx) => (
            <Link
              className={`flex transition-colors duration-300 transform`}
              href={"/explore/" + item.category}
              key={`main-side-item-${idx}`}
              onClick={() => setMainNav(item)}
            >
              <div
                className={`flex justify-between items-center cursor-pointer px-6 py-3 border-b border-[#686868] ${
                  item.category == params?.category ? "bg-[#5A5A5A]" : ""
                }`}
              >
                {item.icon && <item.icon />}
                <span className={`font-medium text-[#C4C4C4]`}>{item.title}</span>
                <svg
                  width="10"
                  height="19"
                  viewBox="0 0 10 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.793103 18.4484L9.62051 9.62066L9.99981 9.2241L9.62049 8.82756L0.79273 0.000152806L-0.000357427 0.793272L8.43085 9.22414L-1.60207e-05 17.6553L0.793103 18.4484Z"
                    fill="#F3F3F3"
                  />
                </svg>
              </div>
            </Link>
          ))
        ) : (
          <div className="flex flex-col text-white">
            <div className="flex flex-col px-6 pt-4 pb-6">
              <span className="text-[20px] font-bold mb-4">{mainNav.title}</span>
              <InputBox
                Icon={() => (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.99698 0C2.24314 0 0 2.24314 0 4.99698C0 7.75082 2.24314 9.99396 4.99698 9.99396C6.19451 9.99396 7.29429 9.56871 8.15621 8.86281L11.1398 11.8464C11.1858 11.8943 11.241 11.9326 11.302 11.959C11.363 11.9854 11.4287 11.9993 11.4952 12C11.5616 12.0007 11.6276 11.9881 11.6891 11.9629C11.7507 11.9378 11.8066 11.9006 11.8536 11.8536C11.9006 11.8066 11.9378 11.7507 11.9629 11.6891C11.9881 11.6276 12.0007 11.5616 12 11.4952C11.9993 11.4287 11.9854 11.363 11.959 11.302C11.9326 11.241 11.8943 11.1858 11.8464 11.1398L8.86281 8.15621C9.56871 7.29429 9.99396 6.19451 9.99396 4.99698C9.99396 2.24314 7.75082 0 4.99698 0ZM4.99698 0.999396C7.21071 0.999396 8.99457 2.78326 8.99457 4.99698C8.99457 7.21071 7.21071 8.99457 4.99698 8.99457C2.78326 8.99457 0.999396 7.21071 0.999396 4.99698C0.999396 2.78326 2.78326 0.999396 4.99698 0.999396Z"
                      fill="#F3F3F3"
                    />
                  </svg>
                )}
                className="text-white"
                placeholder="Search All"
              />
            </div>
            <div className="collapse collapse-plus border-t border-[#696969] px-6">
              <input type="checkbox" />
              <div className="collapse-title !px-0">
                <span className={`font-medium text-[#C4C4C4]`}>Category</span>
              </div>
              <div className="collapse-content">
                <InputBox className="text-white mb-4" placeholder="Search" />
                <CheckBox title="All" className="mb-2" count={100} />
                <CheckBox title="Top" className="mb-2" count={2} />
                <CheckBox title="Art" className="mb-2" count={2} />
                <CheckBox title="Collectibles" className="mb-2" count={30} />
                <CheckBox title="Domain names" className="mb-2" count={20} />
                <CheckBox title="Music" className="mb-2" count={1} />
                <CheckBox title="Photography" className="mb-2" count={0} />
                <CheckBox title="Sports" className="mb-2" count={2} />
                <CheckBox title="Trading cards" className="mb-2" count={3} />
                <CheckBox title="Utility" className="mb-2" count={20} />
                <CheckBox title="Virtual worlds" className="mb-4" count={10} />
              </div>
            </div>
            <div className="collapse collapse-plus border-t border-[#696969] px-6">
              <input type="checkbox" />
              <div className="collapse-title !px-0">
                <span className={`font-medium text-[#C4C4C4]`}>Status</span>
              </div>
              <div className="collapse-content">
                <InputBox className="text-white mb-4" placeholder="Search" />
              </div>
            </div>
            <div className="collapse collapse-plus border-t border-[#696969] px-6">
              <input type="checkbox" />
              <div className="collapse-title !px-0">
                <span className={`font-medium text-[#C4C4C4]`}>Price</span>
              </div>
              <div className="collapse-content">
                <InputBox className="text-white mb-4" placeholder="Search" />
              </div>
            </div>
            <div className="collapse collapse-plus border-t border-[#696969] px-6">
              <input type="checkbox" />
              <div className="collapse-title !px-0">
                <span className={`font-medium text-[#C4C4C4]`}>Quantity</span>
              </div>
              <div className="collapse-content">
                <InputBox className="text-white mb-4" placeholder="Search" />
              </div>
            </div>
            <div className="collapse collapse-plus border-t border-[#696969] px-6">
              <input type="checkbox" />
              <div className="collapse-title !px-0">
                <span className={`font-medium text-[#C4C4C4]`}>Collections</span>
              </div>
              <div className="collapse-content">
                <InputBox className="text-white mb-4" placeholder="Search" />
              </div>
            </div>
            <div className="collapse collapse-plus border-t border-[#696969] px-6">
              <input type="checkbox" />
              <div className="collapse-title !px-0">
                <span className={`font-medium text-[#C4C4C4]`}>Blockchain</span>
              </div>
              <div className="collapse-content">
                <InputBox className="text-white mb-4" placeholder="Search" />
              </div>
            </div>
            <div className="collapse collapse-plus border-t border-[#696969] px-6">
              <input type="checkbox" />
              <div className="collapse-title !px-0">
                <span className={`font-medium text-[#C4C4C4]`}>Currency</span>
              </div>
              <div className="collapse-content">
                <InputBox className="text-white mb-4" placeholder="Search" />
              </div>
            </div>
            <div className="collapse collapse-plus border-t border-[#696969] px-6">
              <input type="checkbox" />
              <div className="collapse-title !px-0">
                <span className={`font-medium text-[#C4C4C4]`}>Cryptocurrency</span>
              </div>
              <div className="collapse-content">
                <InputBox className="text-white mb-4" placeholder="Search" />
              </div>
            </div>
            <div className="collapse collapse-plus border-t border-[#696969] px-6">
              <input type="checkbox" />
              <div className="collapse-title !px-0">
                <span className={`font-medium text-[#C4C4C4]`}>Cause</span>
              </div>
              <div className="collapse-content">
                <InputBox className="text-white mb-4" placeholder="Search" />
              </div>
            </div>
            <div className="collapse collapse-plus border-t border-[#696969] px-6">
              <input type="checkbox" />
              <div className="collapse-title !px-0">
                <span className={`font-medium text-[#C4C4C4]`}>Location</span>
              </div>
              <div className="collapse-content">
                <InputBox className="text-white mb-4" placeholder="Search" />
                <CheckBox title="All" className="mb-2" count={0} />
                <CheckBox title="Australia" className="mb-2" count={2} />
                <CheckBox title="Japan" className="mb-2" count={3} />
                <CheckBox title="New Zealand" className="mb-2" count={10} />
                <CheckBox title="USA" className="mb-4" count={10} />
                <CheckBox title="England" className="mb-4" count={10} />
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <div>
        {mainNavs.map((item, idx) =>
          item.children ? (
            <div className="collapse collapse-plus" key={`default-side-sub-${idx}`}>
              <input type="checkbox" />
              <div className="collapse-title !px-2 !py-2 border-b border-t border-[#686868]">
                <span className={`mx-4 font-medium text-[#C4C4C4]`}>{item.title}</span>
              </div>
              <div className="collapse-content">
                {item.children.map((subItem, sIdx) => (
                  <Link
                    className={`flex items-center transition-colors duration-300 transform`}
                    href={"/explore/" + subItem.category}
                    key={`default-side-sub-nav-${sIdx}`}
                  >
                    <div
                      className={`cursor-pointer px-6 py-2 border-b border-[#686868] ${
                        subItem.category == params?.category ? "bg-[#5A5A5A]" : ""
                      }`}
                    >
                      <span className={`mx-4 font-medium text-[#C4C4C4]`}>
                        {subItem.title}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              className={`flex items-center transition-colors duration-300 transform`}
              href={"/explore/" + item.category}
              key={`default-side-sub-${idx}`}
              onClick={() => setVisible && setVisible(false)}
            >
              <div
                className={`flex items-center cursor-pointer px-4 py-3 border-b border-[#686868] ${
                  idx === 0 ? "border-t" : ""
                } ${item.category == params?.category ? "bg-[#5A5A5A]" : ""}`}
              >
                {item.icon && <item.icon />}
                <span className={`mx-4 font-medium text-[#C4C4C4]`}>{item.title}</span>
              </div>
            </Link>
          )
        )}
      </div> */}
    </div>
  );
};
