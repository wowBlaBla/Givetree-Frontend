import React  from "react";
import { GiveTreeLogo } from "./GiveTreeLogo";
import { Link } from "wouter";
import { PrimaryButton } from "./PrimaryCta";

export const AppFooter = () => (
  <div className="text-gray-800 bg-gray-100 border-t border-base-content border-opacity-25 text-black dark:text-white dark:bg-deep-dark">
    <div className="flex flex-col items-center justify-between gap-2 mx-auto pb-6 max-w-screen-xl px-5 ">
      <div className="text-lg grid md:grid-cols-2 grid-cols-1 gap-8 justify-between w-full mt-10">
        <div className="gap-5 md:order-1 order-2 sm:text-left text-center">
          <div className="about-givetree flex flex-col gap-5">
            <GiveTreeLogo className="w-10 text-brand-black"/>
            <ul className="list-none flex flex-col gap-3">
              <li>Blog</li>
              <li><a href="https://linktr.ee/givetree" target="_blank" rel="noreferrer">Socials</a></li>
              <li>About</li>
              <li>Terms of use</li>
              <li>Privacy policy</li>
            </ul>
          </div>
        </div>
        <div className="copyright flex flex-col gap-5 items-end md:order-2 order-1">
          <div className="flex flex-col gap-2">
            <label className="text-xl font-bold">Join our growing community</label>
            <div>
              <label className="text-xs">Sign up for news and updates about Givetree</label>
              <div className="flex md:flex-row flex-col gap-2 items-center">
                <input
                  type="email"
                  className="border border-black w-full max-w-[362px] h-[54px] p-4 rounded-lg-m mt-2 outline-0"
                />
                <PrimaryButton className="rounded-full py-4 px-6 md:w-auto w-full">Subscribe</PrimaryButton>
              </div>
              <label className="text-xs">I understand I can unsubscribe at any time <Link href="#" className="text-blue-600 font-bold">Privacy Policy</Link></label>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright py-5 mt-3 w-full">
        <p className="text-start text-md text-base-content">&copy; Givetree 2022</p>
      </div>
    </div>
  </div>
);