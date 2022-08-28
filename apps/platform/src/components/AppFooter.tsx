import React  from "react";
import { GiveTreeLogo } from "./GiveTreeLogo";
import { Link } from "wouter";

export const AppFooter = () => (
  <div className="text-gray-800 bg-gray-100 border-t border-black text-black">
    <div className="flex flex-col items-center justify-between gap-2 mx-auto pb-6">
      <div className="social-group grid grid-cols-1 md:justify-between flex-wrap gap-5 items-center w-full py-10 justify-center">
        <div className="mail-input-group flex justify-center">
          <div className="block text-center">
            <label className="text-xl">Join Our Newsletter</label>
            <input
              type="email"
              className="border border-black w-full max-w-[362px] h-[54px] p-4 rounded-lg-m mt-2 "
            />
          </div>
        </div>
      </div>
      <hr className="w-full border-black"/>

      <div className="text-lg grid md:grid-cols-2 grid-cols-1 gap-8 justify-between w-full mt-10 px-24">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 md:order-1 order-2 sm:text-left text-center">
          <div className="about-givetree flex flex-col gap-5">
            <label className="font-bold">About GiveTree</label>
            <ul className="list-none flex flex-col gap-3">
              <li>About</li>
              <li>Terms of use</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="marketplace-launches">
            <label className="font-bold">NFT Fundraisers</label>
            <ul className="list-none flex flex-col gap-3 mt-5">
              <li><Link href="/fundraiser/mint">Mints</Link></li>
              <li><Link href="/fundraiser/sale">Sales</Link></li>
              <li><Link href="/fundraiser/auction">Auctions</Link></li>
            </ul>
          </div>
          <div className="about-givetree flex flex-col gap-5">
            <label className="font-bold">Socials</label>
            <ul className="list-none flex flex-col gap-3">
              <li><a href="https://discord.gg/givetree" target="_blank" rel="noreferrer">Discord</a></li>
              <li><a href="https://twitter.com/GiveTreeWagmi" target="_blank" rel="noreferrer">Twitter</a></li>
              <li><a href="https://www.linkedin.com/company/givetreewagmi/" target="_blank" rel="noreferrer">Linkedin</a></li>
              <li><a href="https://www.youtube.com/channel/UCKX2iQ5HgL2Zg4PsaMtMfZg" target="_blank" rel="noreferrer">YouTube</a></li>
              <li><a href="https://givetree.medium.com/" target="_blank" rel="noreferrer">Medium</a></li>
              <li><a href="https://www.instagram.com/givetreewagmi/" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://www.facebook.com/GiveTree/" target="_blank" rel="noreferrer">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright flex flex-col gap-5 items-end md:order-2 order-1">
          <div className="w-32 mr-4">
            <GiveTreeLogo className="w-35 h-14-1/2 text-brand-black" withText />
          </div>
          <div className="flex gap-2">
            <span>2022 GiveTree PTY LTD. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
