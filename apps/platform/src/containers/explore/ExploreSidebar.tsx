import { FC, useState } from "react";
import { Link, useRoute } from "wouter";
import { PlatformRoute } from "../../configs/routes";
import { CheckBox } from "../../components/CheckBox";
import { InputBox } from "../../components/InputBox";
import { NavItem } from "../profile/ProfileSidebar";
import { useExplore } from "../../context/ExploreContext";

const mainNavs: NavItem[] = [
  {
    category: "home",
    title: "Home",
  },
  {
    category: "nfts",
    title: "NFTs",
    hasChild: true,
  },
  // {
  //   category: "collections",
  //   title: "Collections",
  //   hasChild: true
  // },
  {
    category: "charities",
    title: "Charities",
    hasChild: true,
  },
  {
    category: "creators",
    title: "Creators",
    hasChild: true,
  },
  // {
  //   category: "mint-pages",
  //   title: "Mint events",
  //   hasChild: true
  // },
  // {
  //   category: "causes",
  //   title: "Causes",
  //   hasChild: true
  // },
  // {
  //   category: "leader-borders",
  //   title: "Leaderboards",
  //   hasChild: true
  // },
  {
    category: "about-welcome",
    title: "About GiveTree",
    hasChild: true,
    children: [
      {
        category: "about-welcome",
        title: "Welcome",
      },
      {
        category: "about-faqs",
        title: "FAQs",
      },
      {
        category: "about-socials",
        title: "Socials",
      },
      {
        category: "about-contact-us",
        title: "Contact us",
      },
      {
        category: "about-terms-of-us",
        title: "Terms of use",
      },
      {
        category: "about-privacy-policy",
        title: "Privacy policy",
      },
    ],
  },
];

interface ExploreSideBarProps {
  visible?: boolean;
  setVisible?: (visible: boolean) => void;
}

export const ExploreSideBar: FC<ExploreSideBarProps> = ({ visible, setVisible }) => {
  const [mainNav, setMainNav] = useState<NavItem>();
  const [_, params] = useRoute(PlatformRoute.ExploreDetails);
  const { category, toggleCategory } = useExplore();

  return (
    <div
      className={`side-bar ${
        visible ? "absolute" : "hidden lg:flex sticky"
      } top-[80px] lg:top-0 left-0 flex-col w-full lg:min-w-[240px] lg:max-w-[240px] border-r border-base-content border-opacity-25 bg-mid-dark z-10`}
    >
      {!mainNav ? null : (
        <div className="text-[#BABABA] border-t border-b border-[#696969] px-6 py-4 sticky">
          <Link
            className="flex items-center cursor-pointer"
            href="/explore"
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
          </Link>
        </div>
      )}

      <div className="bg-mid-dark main-menu-bar">
        {!mainNav ? (
          mainNavs.map((item, idx) => (
            <Link
              className={`flex transition-colors duration-300 transform`}
              href={"/explore/" + item.category}
              key={`main-side-item-${idx}`}
              onClick={() => (idx && setMainNav(item))}
            >
              <div
                className={`flex justify-between items-center cursor-pointer px-6 py-3 border-b border-[#686868] ${
                  item.category == params?.category ? "text-[#00EF8B]" : "text-[#C4C4C4]"
                }`}
              >
                {item.icon && <item.icon />}
                <span className={`font-medium text-inherit`}>{item.title}</span>
                {item.hasChild ? (
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
                ) : (
                  ""
                )}
              </div>
            </Link>
          ))
        ) : mainNav.children?.length ? (
          mainNav.children.map((subItem, idx) => (
            <Link
              className={`flex transition-colors duration-300 transform`}
              href={"/explore/" + subItem.category}
              key={`sub-side-item-${idx}`}
            >
              <div
                className={`flex justify-between items-center cursor-pointer px-6 py-3 border-b border-[#686868] ${
                  subItem.category == params?.category ? "text-[#00EF8B]" : "text-[#C4C4C4]"
                }`}
              >
                {subItem.icon && <subItem.icon />}
                <span className={`font-medium text-inherit`}>{subItem.title}</span>
                {subItem.hasChild ? (
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
                ) : (
                  ""
                )}
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
                {category.map((item, idx) => (
                  <CheckBox
                    key={idx}
                    className="w-full mb-2 justify-between"
                    title={item.title}
                    count={item.count}
                    checked={item.checked}
                    onChanged={() => toggleCategory(idx)}
                    direction={"right"}
                  />
                ))}
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
                <CheckBox
                  title="All"
                  className="mb-2 justify-between"
                  count={0}
                  direction={"right"}
                />
                <CheckBox
                  title="Australia"
                  className="mb-2 justify-between"
                  count={2}
                  direction={"right"}
                />
                <CheckBox
                  title="Japan"
                  className="mb-2 justify-between"
                  count={3}
                  direction={"right"}
                />
                <CheckBox
                  title="New Zealand"
                  className="mb-2 justify-between"
                  count={10}
                  direction={"right"}
                />
                <CheckBox
                  title="USA"
                  className="mb-4 justify-between"
                  count={10}
                  direction={"right"}
                />
                <CheckBox
                  title="England"
                  className="mb-4 justify-between"
                  count={10}
                  direction={"right"}
                />
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
