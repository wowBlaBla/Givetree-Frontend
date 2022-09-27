import { FC } from "react";
import image from "../../temp/images/campaigns/mulgakongz-collection.png";

export const Welcome:FC = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-[4rem]">
                <div className="description flex justify-center">
                    <div>
                        <h2 className="title text-3xl font-bold">Welcome</h2>
                        <p className="mt-4 text-xl leading-10">
                            What is GiveTree?<br/>
                            GiveTree is a NFT Marketplace
                            which makes it really easy to create
                            NFT fundraisers for the organisations
                            who help with causes you love.
                        </p>
                        <p className="text-xl leading-10">
                            We also enable you to make direct
                            donation of cryptocurrency.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center sm:justify-end">
                    <img
                        src={image.src}
                        alt="about-image"
                        className="w-100 h-100 rounded-lg"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-[4rem]">
                <div className="description flex justify-center">
                    <div>
                        <p className="mt-4 text-xl leading-10">
                            What is GiveTree?<br/>
                            GiveTree is a NFT Marketplace
                            which makes it really easy to create
                            NFT fundraisers for the organisations
                            who help with causes you love.
                        </p>
                        <p className="text-xl leading-10">
                            We also enable you to make direct
                            donation of cryptocurrency.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center sm:justify-end">
                    <img
                        src={image.src}
                        alt="about-image"
                        className="w-100 h-100 rounded-lg"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-[4rem]">
                <div className="description flex justify-center">
                    <div>
                        <p className="mt-4 text-xl leading-10">
                            What is GiveTree?<br/>
                            GiveTree is a NFT Marketplace
                            which makes it really easy to create
                            NFT fundraisers for the organisations
                            who help with causes you love.
                        </p>
                        <p className="text-xl leading-10">
                            We also enable you to make direct
                            donation of cryptocurrency.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center sm:justify-end">
                    <img
                        src={image.src}
                        alt="about-image"
                        className="w-100 h-100 rounded-lg"
                    />
                </div>
            </div>
        </>
    )
}