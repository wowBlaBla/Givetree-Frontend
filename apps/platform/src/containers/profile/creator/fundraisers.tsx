import { FC } from "react";
import cx from "classnames";

const navs = [
    "Active",
    "Completed",
    "Archived"
];

export const Fundraisers:FC = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="p-8">
                <h2 className="text-2xl font-bold py-7 dark:text-white">My Fundraisers</h2>
                <button className="mt-3 border border-base-content border-opacity-25 bg-base-100 p-3">Create Fundraisers</button>
            </div>
            <div className="border-b border-base-content border-opacity-25 overflow-x-auto scroll-pb-5 mt-4">
                <div className="w-full md:px-20 px-4">
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
            <div className="text-center p-52">
                <div className="uppercase font-medium flex flex-col">
                    <span className="dark:text-white">oops no active</span>
                    <span className="dark:text-white">fundraisers yet</span>
                </div>
            </div>
        </div>
    )
}