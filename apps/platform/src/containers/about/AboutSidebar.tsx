import { FC } from "react";
import { Link, useRoute } from "wouter";
import { PlatformRoute } from "../../configs/routes";

const navs = [
  {
    category: "welcome",
    title: "Welcome",
  },
  {
    category: "about-us",
    title: "About us",
  },
  {
    category: "faqs",
    title: "FAQs",
  },
  {
    category: "tutorials",
    title: "Tutorials",
  },
  {
    category: "team",
    title: "Team",
  },
  {
    category: "contact-us",
    title: "Contact us",
  },
  {
    category: "terms-of-use",
    title: "Terms of use",
  },
  {
    category: "privacy-policy",
    title: "Privacy Policy",
  },
];

export const AboutSideBar: FC = () => {
  const [, params] = useRoute(PlatformRoute.About);

  console.log("==========", params);

  return (
    <div className="side-bar hidden sm:flex flex-col min-w-[240px] max-w-[240px] py-8 bg-white border-r border-base-content border-opacity-25 dark:bg-mid-dark">
      <div className="flex flex-col flex-1 mt-2 px-4">
        <span className="text-white font-bold text-[24px] pl-[1.5rem] mb-8">ABOUT</span>
        <nav>
          {navs.map((item, idx) => (
            <Link
              className={`flex items-center p-2 transition-colors duration-300 transform dark:text-white`}
              href={"/about/" + item.category}
              key={idx}
            >
              <div
                className={`cursor-pointer px-2 py-2 ${
                  item.category == params?.category
                    ? "rounded-2xl-1 bg-light-dark text-white"
                    : " text-gray-600 "
                }`}
              >
                <span className={`text-white mx-4 font-medium `}>{item.title}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
