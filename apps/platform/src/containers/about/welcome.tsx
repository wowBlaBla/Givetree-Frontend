import { FC } from "react";
import image from "../../temp/images/campaigns/mulgakongz-collection.png";

export const Welcome:FC = () => {
    return (
        <div className="grid grid-auto-fit gap-4">
            <div className="description flex justify-center">
                <div>
                    <h2 className="title text-3xl font-bold">Welcome</h2>
                    <p className="mt-4 text-xl leading-10">
                        What is GiveTree?<br className="hidden md:inline-block"/>
                        GiveTree is a NFT Marketplace<br className="hidden md:inline-block"/>
                        which makes it really easy to create<br className="hidden md:inline-block"/>
                        NFT fundraisers for the organisations<br className="hidden md:inline-block"/>
                        who help with causes you love.
                    </p>
                    <p className="text-xl leading-10">
                        We also enable you to make direct<br className="hidden md:inline-block"/>
                        donation of cryptocurrency.
                    </p>
                </div>
            </div>
            <div className="flex justify-center">
                <img
                    src={image.src}
                    alt="about-image"
                    className="w-100 h-100 rounded-lg"
                />
            </div>
        </div>
    )
}