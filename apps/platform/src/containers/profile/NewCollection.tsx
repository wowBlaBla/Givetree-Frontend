import { FC, useState } from "react";
import cx from "classnames";
import { RequiredIcon } from "../../components/icons/RequiredIcon";
import { MintItemTitle } from "../../components/MintItemTitle";
import { MintArtPreview } from "../../components/MintArt";
import { ImageDefaultIcon } from "../../components/icons/ImageDefaultIcon";
import { WebsiteIcon } from "../../components/icons/WebsiteIcon";
import { DiscordSolidIcon } from "../../components/icons/DiscordIcon";
import { MediumIcon } from "../../components/icons/MediumIcon";
import { TelegramIcon } from "../../components/icons/TelegramIcon";

import PaddedCard from "../../assets/images/card-display-padded.svg";
import CoveredCard from "../../assets/images/card-display-cover.svg";
import ContainCard from "../../assets/images/card-display-contain.svg";

const themes = [
    {
        title: "Padded",
        text: "Recomended for assets with transparent background",
        icon: PaddedCard
    },
    {
        title: "Contained",
        text: "Recomended for assets that are not 1:1 ratio",
        icon: ContainCard
    },
    {
        title: "Covered",
        text: "Recomended for assets that can extend to the edge",
        icon: CoveredCard
    }
]

export const NewCollection:FC = () => {

    const [logo, setLogo] = useState<File>();
    const [featuredImage, setFeaturedImage] = useState<File>();
    const [bannerImage, setBannerImage] = useState<File>();

    const [isLoading, setLoading] = useState<boolean>(false);

    const handleFileSelect = (e:any, key: string) => {
        const file = e.target.files[0];
        if (file) {
          const type = file.type;
          if (type.indexOf("image") > -1) {
            switch(key) {
                case "logo":
                    setLogo(file);
                    break;
                case "featured":
                    setFeaturedImage(file);
                    break;
                case "banner":
                    setBannerImage(file);
                    break;
            }
          }
        }
    }

    return (
        <div className="upload-collection">
            <div className="p-8 max-w-[700px] text-black">
                <h1 className="font-bold text-black text-xl mb-2">Create an Collection</h1>
                <div className="flex items-center mb-[48px]">
                    <RequiredIcon />
                    <span className="text-sm ml-2">Required fields</span>
                </div>
                
                <div className="flex flex-col mb-[48px]">
                    <MintItemTitle
                        title="Logo image"
                        subTitle="This is image will also be used for navigation. 350 x 350 recommended."
                        required
                    />
                    <label
                        className={cx(
                        "!border-dashed border-base-content border-4 w-[150px] h-[150px] flex justify-center items-center mt-4 rounded-full bg-white overflow-hidden",
                        // {
                        //     "border-red-500": errors?.art
                        // }
                        )}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        {
                            logo ?
                            <MintArtPreview src={logo} type="image"/>
                            :
                            <ImageDefaultIcon className="text-base-content"/>
                        }
                        <input
                            readOnly={isLoading}
                            type="file"
                            hidden
                            onChange={(e) => handleFileSelect(e, "logo") }
                            accept=".jpg, .png, .gif, .svg"
                        />
                    </label>
                </div>

                <div className="flex flex-col mb-[48px]">
                    <MintItemTitle
                        title="Featured image"
                        subTitle="This image will be used for featuring your collection on the homepage, category pages, or other promotional areas of GiveTree. 600 x 400 recommended."
                        required
                    />
                    <label
                        className={cx(
                        "!border-dashed border-base-content border-4 w-[300px] h-[200px] flex justify-center items-center mt-4 rounded-lg bg-white overflow-hidden",
                        // {
                        //     "border-red-500": errors?.art
                        // }
                        )}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        {
                            featuredImage ?
                            <MintArtPreview src={featuredImage} type="image"/>
                            :
                            <ImageDefaultIcon className="text-base-content"/>
                        }
                        <input
                            readOnly={isLoading}
                            type="file"
                            hidden
                            onChange={(e) => handleFileSelect(e, "featured") }
                            accept=".jpg, .png, .gif, .svg"
                        />
                    </label>
                </div>

                <div className="flex flex-col mb-[48px]">
                    <MintItemTitle
                        title="Banner image"
                        subTitle="This image will appear at the top of your collection page. Avoid including too much text in this banner image, as the dimensions change on different devices. 1400 x 350 recommended."
                        required
                    />
                    <label
                        className={cx(
                        "!border-dashed border-base-content border-4 w-full max-w-[700px] h-[200px] flex justify-center items-center mt-4 rounded-lg bg-white overflow-hidden",
                        // {
                        //     "border-red-500": errors?.art
                        // }
                        )}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        {
                            bannerImage ?
                            <MintArtPreview src={bannerImage} type="image"/>
                            :
                            <ImageDefaultIcon className="text-base-content"/>
                        }
                        <input
                            readOnly={isLoading}
                            type="file"
                            hidden
                            onChange={(e) => handleFileSelect(e, "banner") }
                            accept=".jpg, .png, .gif, .svg"
                        />
                    </label>
                </div>
                
                <div className="flex flex-col gap-6">
                    <div>
                        <MintItemTitle
                            title="Name"
                            subTitle="This is the collection where your item will appear."
                            required
                        />
                        <input
                            readOnly={isLoading}
                            type="text"
                            className={cx(
                                "input input-bordered border-base-content profile-item block w-full outline-none mt-3",
                                // {
                                //     "border-red-500": errors.name
                                // }
                                )
                            }
                            // value={metadata.name}
                            // onChange={(e) => setMetadata({ ...metadata, name: e.target.value })}
                        />
                    </div>

                    <div>
                        <MintItemTitle
                            title="URL"
                            subTitle="Customise your URL on GiveTree. Must only contain lowercase letters, numbers, and hyphens."
                        />
                        <input
                            readOnly={isLoading}
                            type="text"
                            placeholder="https://givetree.io/collection/treasures-of-the-tree"
                            className={cx(
                                "input input-bordered border-base-content profile-item block w-full outline-none mt-3",
                                // {
                                //     "border-red-500": errors.name
                                // }
                                )
                            }
                            // value={metadata.name}
                            // onChange={(e) => setMetadata({ ...metadata, name: e.target.value })}
                        />
                    </div>

                    <div>
                        <MintItemTitle
                            title="Description"
                            subTitle="Markdown syntax is supported. 0 of 1000 characters used."
                        />
                        <textarea
                            readOnly={isLoading}
                            className={
                            cx(
                                "textarea textarea-bordered border-base-content profile-item block w-full outline-none focus:border-indigo-500 sm:text-sm p-4 h-[160px]",
                                // {
                                // "border-red-500": errors.description
                                // }
                            )
                            }
                            rows={4}
                            // value={metadata.description}
                            // onChange={(e) => setMetadata({ ...metadata, description: e.target.value })}
                        />
                    </div>

                    <div className="">
                        <MintItemTitle
                            title="Category"
                            subTitle="Adding a category will help make your item discoverable on OpenSea."
                        />
                        <div className="mt-3">
                            <button className="btn btn-outline inline-block">Add category</button>
                        </div>
                    </div>

                    <div className="">
                        <MintItemTitle
                            title="Links"
                        />
                        <div className="rounded-xl border-[1px] mb-4 border-base-content">
                            <div
                                key={`social-media-0`}
                                className="flex items-center p-4 border-b-[1px] border-base-content last:border-b-0 justify-between"
                            >
                                <div className="flex">
                                    <div className="w-[30px] h-[30px] flex items-center justify-center mr-4">
                                        <WebsiteIcon />
                                    </div>
                                </div>
                            </div>
                            <div
                                key={`social-media-0`}
                                className="flex items-center p-4 border-b-[1px] border-base-content last:border-b-0 justify-between"
                            >
                                <div className="flex">
                                    <div className="w-[30px] h-[30px] flex items-center justify-center mr-4">
                                        <DiscordSolidIcon/>
                                    </div>
                                </div>
                            </div>
                            <div
                                key={`social-media-0`}
                                className="flex items-center p-4 border-b-[1px] border-base-content last:border-b-0 justify-between"
                            >
                                <div className="flex">
                                    <div className="w-[30px] h-[30px] flex items-center justify-center mr-4">
                                        <MediumIcon/>
                                    </div>
                                </div>
                            </div>
                            <div
                                key={`social-media-0`}
                                className="flex items-center p-4 border-b-[1px] border-base-content last:border-b-0 justify-between"
                            >
                                <div className="flex">
                                    <div className="w-[30px] h-[30px] flex items-center justify-center mr-4">
                                        <TelegramIcon/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <MintItemTitle
                            title="Creator & charity earnings"
                            subTitle="Earn a percentage of the sale price every time one of your items is sold. Adding multiple addresses may increase gas fees for buyers. "
                        />
                        <div className="mt-3">
                            <button className="btn btn-outline border-base-content text-gray-500 inline-block">Add address</button>
                        </div>
                    </div>

                    <div>
                        <MintItemTitle
                            title="Blockchain"
                            subTitle="Select the blockchain where you’d like new items from this collection to be added by default. "
                            required
                        />
                        <select
                            className="select profile-item border-base-content outline-none block mt-1"
                            // onChange={(e) => setAccountType(e.target.value as AccountType)}
                        >
                            <option value="ethereum">Ethereum</option>
                        </select>
                    </div>
                    
                    <div>
                        <MintItemTitle
                            title="Payment tokens"
                            subTitle="These tokens can be used to buy and sell your items. "
                            required
                        />
                        <select
                            className="select profile-item border-base-content outline-none block mt-1"
                            // onChange={(e) => setAccountType(e.target.value as AccountType)}
                        >
                            <option>Add token</option>
                            <option value="ethereum">Ethereum</option>
                        </select>
                    </div>

                    <div>
                        <MintItemTitle
                            title="Display theme"
                            subTitle="Change how your items are shown."
                            required
                        />

                        <div className="themes grid md:grid-cols-3 grid-cols-1 gap-4 mt-2">
                            {
                                themes.map((item, idx) => (
                                    <div className="flex flex-col text-center p-4 border border-base-content rounded-lg cursor-pointer hover:shadow-card-theme hover:shadow-sky-500 hover:border-sky-500" key={idx}>
                                        <img
                                            src={item.icon.src}
                                            className="brightness-50"
                                        />
                                        <label className="font-bold mt-4">{item.title}</label>
                                        <p>{item.text}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="action-button mt-4">
                    <button className="btn btn-info text-white">Create</button>
                </div>
            </div>
        </div>
    )
}