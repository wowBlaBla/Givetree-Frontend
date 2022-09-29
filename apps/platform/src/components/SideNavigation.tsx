import HomeIcon from "../assets/images/home.png";
import ExploreIcon from "../assets/images/explore.png";
import CreateIcon from "../assets/images/create.png";
import AboutIcon from "../assets/images/about.png";

import React, { FC, ReactElement, useEffect, useRef, useState } from "react";
import cx from "classnames";
import { PlatformRoute } from "../configs/routes";
// import matcherType from "wouter/types/matcher";
import { Link, Match, MatcherFn, useLocation } from "wouter";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_USER, IStore } from "../store/reducers/auth.reducer";
import avatar from "../temp/images/campaigns/mulgakongz-collection.png";
import { openModal, openSidebar } from "../store/actions/auth.action";
import makeMatcher from "../utils/matcher";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      ElemBefore: React.ReactNode;
    }
  }
}

interface Dropdown {
  title: string;
  href: string;
  onClick?: () => void;
}

interface AppHeaderNavLink {
  title: string;
  href: string;
  disabled?: boolean;
  icon?: ReactElement;
  childrens?: Array<Dropdown>;
  iconColor?: string;
  openSidebar?: boolean;
}

const list: AppHeaderNavLink[] = [
  {
    title: "Home",
    href: PlatformRoute.Home,
    disabled: false,
    icon: (
      <img src={HomeIcon.src} className="w-5 h-5 text-white" />
    ),
    childrens: undefined,
    iconColor: "bg-sky-500",
  },
  {
    title: "Explore",
    href: PlatformRoute.FundraiserDetails,
    disabled: true,
    icon: (
      <img src={ExploreIcon.src} className="w-5 h-5 text-white" />
    ),
    iconColor: "bg-orange-500",
  },
  {
    title: "Create",
    href: PlatformRoute.Static,
    disabled: false,
    icon: (
      <img src={CreateIcon.src} className="w-5 h-5 text-white" />
    ),
    iconColor: "bg-red-500",
    childrens: undefined,
  },
  {
    title: "About",
    href: "/about/welcome",
    disabled: false,
    icon: <img src={AboutIcon.src} className="w-5 h-5 text-white" />,
    iconColor: "bg-yellow-500",
    childrens: undefined,
  },
];

const exploreSub: Dropdown[] = [
  {
    title: "NFT Fundraisers",
    href: PlatformRoute.FundraiserDetails,
  },
  {
    title: "Charities",
    href: PlatformRoute.CharityListing,
  },
  {
    title: "Creators",
    href: PlatformRoute.CreatorListing,
  },
];

const aboutSub: Dropdown[] = [
  {
    title: "Welcome",
    href: "/about/welcome",
  },
  {
    title: "Our story",
    href: "",
  },
  {
    title: "Our technology",
    href: "",
  },
  {
    title: "Our partners",
    href: "",
  },
  {
    title: "Risk management",
    href: "",
  },
  {
    title: "Media enquiries",
    href: "",
  },
  {
    title: "Blog",
    href: "",
  },
  {
    title: "Socials",
    href: "",
  },
  {
    title: "Terms of use",
    href: "",
  },
  {
    title: "Privacy policy",
    href: "",
  },
];

const _home = PlatformRoute.Home;
const _explore = ["/fundraisers", "/charities", "/creators", "/mints"];
const _about = PlatformRoute.About;
const _create = "/profile/:role/mint";
const _profile = PlatformRoute.ProfileDetails;

export const SideNavigation: FC = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useLocation();

  const [activeTab, setActiveTab] = useState(-1);
  const [activeSub, setActiveSub] = useState(-1);
  const [subList, setSubList] = useState<Dropdown[]>([]);

  const authedUser = useSelector<IStore, AUTH_USER | undefined>(
    (state) => state.auth.authedUser
  );
  const openSideMenu = useSelector<IStore, boolean>(
    (state) => state.auth.openSidebarMenu
  );

  const appHeaderNavLinks = React.useMemo<AppHeaderNavLink[]>(() => {
    if (authedUser) {
      return [
        ...list,
        {
          title: "Profile",
          href: "/profile/creator/home",
          disabled: false,
          iconColor: "",
        },
      ];
    } else {
      return list;
    }
  }, [authedUser]);

  useEffect(() => {
    setSubList([]);

    const list = [_home, _explore, _create, _about, _profile];

    list.map((link, idx) => {
      let matched: Match = [false, null];
      const matcher = makeMatcher() as MatcherFn;

      if (typeof link == "string") {
        matched = matcher(link, location);
        if (link == _about && matched[0]) {
          setActiveSub(0);
          setSubList(aboutSub);
        }
      } else {
        link.map((item, index) => {
          const _matched = matcher(item, location);
          if (_matched[0]) {
            matched = _matched;
            setActiveSub(index);
            setSubList(exploreSub);
            return;
          }
        });
      }

      if (matched[0]) {
        setActiveTab(idx);
        return;
      }
    });
    if (typeof window !== undefined) {
      if (window.innerWidth < 1023) {
        dispatch(openSidebar(false));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div
      className={cx("flex absolute z-50 top-20 bottom-0 xl:static", {
        hidden: !openSideMenu,
      })}
    >
      <div className="vertical-navbar scroll-none">
        {appHeaderNavLinks.map((item, idx) => (
          <div
            className={`nav-item px-2 ${activeTab == idx ? "active" : ""}`}
            key={idx}
            onClick={() =>
              item.title == "Create" && item.href == PlatformRoute.Static
                ? authedUser
                  ? setLocation("/profile/creator/mint")
                  : dispatch(openModal(true))
                : setLocation(item.href)
            }
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full bg-cover ${item.iconColor}`}
              style={
                authedUser !== undefined && item.title == "Profile"
                  ? {
                      backgroundImage: `url(${avatar.src})`,
                    }
                  : {}
              }
            >
              {item.icon}
            </div>
            <p className="mt-1 text-center text-xs uppercase font-side-menu">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      {subList.length ? (
        <div className="extra-panel">
          <div
            className={cx(
              "h-screen duration-200 bottom-0 left-[81px] bg-white overflow-hidden origin-left w-60 border-r dark:bg-mid-dark border-base-content border-opacity-25",
              {
                "-translate-x-full": !true,
                "translate-x-0": false,
              }
            )}
          >
            <div className="flex flex-col flex-1 h-screen w-full text-gray-500 dark:text-white">
              {subList.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className={`py-4 px-6 sub-nav-item border-b border-base-content border-opacity-25 ${
                    activeSub == index ? "active text-white" : ""
                  }`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
