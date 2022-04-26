import React, { FC } from "react";
import Head from "next/head";
import { DarkBlendTop } from "../../components/BoxBlends";
import { BackgroundImage } from "../../components/BackgroundImage";
import { SectionTitle } from "../../components/SectionTitle";
import { StatusBadge } from "../../components/StatusBadge";

import MulgaBgImg from "./../../assets/images/mulga-bg-image.png";
import MulgaTheArtistImg from "./../../assets/images/mulga-the-artist.png";
import Image from "next/image";
import { VerifiedIcon } from "../../components/icons/VerifiedIcon";
import { ExternalLinkIcon } from "../../components/icons/ExternalLinkIcon";

export const CollectionDetailsContainer: FC = () => {
  return (
    <div className="flex flex-col flex-1">
      <Head>
        <title>GiveTree - Mulgakongz</title>
      </Head>

      <div className="relative min-w-full h-72 xl:h-128 overflow-hidden">
        <BackgroundImage imageAsset={MulgaBgImg.src} />
        <DarkBlendTop className="z-0" xlarge />

        <div className="flex flex-col justify-end w-full max-w-screen-3xl min-h-full mx-auto py-6 sm:py-12">
          <div className="relative z-20">
            <StatusBadge className="px-4" status="Featured" left large />

            <div className="px-4 mt-10 sm:mt-16 text-white">
              <SectionTitle className="text-3xl sm:text-5xl text-left" xlarge>
                This is <span className="text-brand-orange">Mulgakongz</span>
              </SectionTitle>

              <div className="flex flex-col sm:flex-row sm:items-center sm: mt-2 space-y-1 sm:space-x-5 text-xl">
                <div className="text-lg sm:text-2xl">Total items 4557</div>
                <div className="text-lg sm:text-2xl">Starting from 2.00 SOL per mint</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-screen-3xl mx-auto py-6 sm:py-12 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 border-b border-gray-300 pb-12">
          <div className="flex flex-col sm:flex-row relative items-center w-full space-x-5">
            <div className="w-24 h-24 sm:w-32 sm:h-32">
              <Image
                className="min-w-full min-h-full rounded-full"
                src={MulgaTheArtistImg}
                alt="MulgaTheArtist"
              />
            </div>

            <div className="flex flex-col items-center sm:items-start relative">
              <p className="text-xl sm:text-2xl font-medium text-black">
                by <span className="text-brand-orange">MulgaTheArtist</span>
              </p>

              <div className="flex items-center space-x-1 mt-2 text-sm sm:text-lg text-brand-green-active">
                <VerifiedIcon className="w-4 h-4 sm:w-6 sm:h-6" />
                <p>Verified</p>
              </div>
            </div>
          </div>

          <div className="flex items-center col-span-3">
            <p className="text-xl sm:px-12">
              Inspired by Worms and Angry Birds, this new crazy videogame lets you
              challenge your friends with a barrage of carrots, exhausts and sperm whales!
            </p>
          </div>
        </div>

        <div className="flex my-12 sm:my-16">
          <div className="flex">
            <div className="max-w-4xl">
              <div className="border rounded-xl shadow-lg bg-white p-8 sm:p-10">
                <SectionTitle large>Mulgakongz</SectionTitle>

                <div className="flex space-x-6 mt-6">
                  <div className="grid grid-cols-2 w-full max-w-xs">
                    <div className="text-center rounded-l-md border-2 border-b-2 border-gray-900 py-2 px-5">
                      Total Items
                    </div>
                    <div className="text-center rounded-r-md border-r-2 border-t-2 border-b-2 border-gray-900 py-2 px-5">
                      8888
                    </div>
                  </div>

                  <div className="grid grid-cols-2 w-full max-w-xs">
                    <div className="text-center rounded-l-md border-2 border-b-2 border-gray-900 py-2 px-5">
                      Price
                    </div>
                    <div className="text-center rounded-r-md border-r-2 border-t-2 border-b-2 border-gray-900 py-2 px-5">
                      2.00 SOL
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 mt-6">
                  <a className="flex items-center space-x-2" href="#" target="_blank">
                    <ExternalLinkIcon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange" />
                    <span className="text-sm sm:text-lg">Website</span>
                  </a>
                  <a className="flex items-center space-x-2" href="#" target="_blank">
                    <ExternalLinkIcon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange" />
                    <span className="text-sm sm:text-lg">Discord</span>
                  </a>
                  <a className="flex items-center space-x-2" href="#" target="_blank">
                    <ExternalLinkIcon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange" />
                    <span className="text-sm sm:text-lg">Twitter</span>
                  </a>
                  <a className="flex items-center space-x-2" href="#" target="_blank">
                    <ExternalLinkIcon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange" />
                    <span className="text-sm sm:text-lg">Contract</span>
                  </a>
                </div>

                <div className="mt-5 text-base sm:text-lg">
                  <p>
                    Miners of Mars is a collection of 7000 algorithmically generated
                    characters hand-drawn on paper by Marvel comic artist Aleksa Gajic.
                  </p>
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
