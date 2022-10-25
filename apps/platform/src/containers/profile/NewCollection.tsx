import { FC, useEffect, useState } from "react";
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
import { Categories, Category } from "../../configs/constants";
import { XIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import Web3 from "web3";
import { Contracts, IStore } from "../../store/reducers/mvp.reducer";
import { AUTH_USER, IStore as IStoreAuth } from "../../store/reducers/auth.reducer";
import axios from "axios";
import { toast } from "react-toastify";

enum theme {
    Padded = "padded",
    Contained = "contained",
    Covered = "covered"
}

const themes = [
    {
        title: theme.Padded,
        text: "Recomended for assets with transparent background",
        icon: PaddedCard
    },
    {
        title: theme.Contained,
        text: "Recomended for assets that are not 1:1 ratio",
        icon: ContainCard
    },
    {
        title: theme.Covered,
        text: "Recomended for assets that can extend to the edge",
        icon: CoveredCard
    }
];

interface Charity {
    address: string;
    percent: string;
}

interface Royalty {
    charity: string;
    charityPercent: string;
    creator: string;
    creatorPercent: string;
}

interface LinkData {
    website?: string;
    discord?: string;
    medium?: string;
    telegram?: string;
}

interface Errors {
    logo?: boolean;
    name?: boolean;
    symbol?: boolean;
    pattern?: boolean;
    maxSupply?: boolean;
    metadataURI?: boolean;
    charity?: boolean;
    royalty?: boolean;
    prevealURI?: boolean;
    mintPrice?: boolean;
}

const defaultCharity: Charity = {
    address: "",
    percent: ""
};

const defaultRoyalty: Royalty = {
    charity: "",
    charityPercent: "",
    creator: "",
    creatorPercent: "",
};

const defaultErrors: Errors = {
    logo: false,
    name: false,
    symbol: false,
    pattern: false,
    maxSupply: false,
    metadataURI: false,
    charity: false,
    royalty: false,
    prevealURI: false,
    mintPrice: false,
};

export const NewCollection:FC = () => {

    const authedUser = useSelector<IStoreAuth, AUTH_USER | undefined>(
        (state) => state.auth.authedUser
    );
    const mvp = useSelector<IStore, Contracts>((state) => state.mvp.contracts);
    const provider = useSelector<IStore, Web3 | undefined>((state) => state.mvp.provider);
    const waleltAddress = useSelector<IStoreAuth, string>((state) => state.auth.walletAddress);

    const [logo, setLogo] = useState<File>();
    const [featuredImage, setFeaturedImage] = useState<File>();
    const [bannerImage, setBannerImage] = useState<File>();
    const [name, setName] = useState<string>('');
    const [symbol, setSymbol] = useState<string>('');
    const [pattern, setPattern] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [maxSupply, setMaxSupply] = useState<string>('');
    const [metadataURI, setMetadataURI] = useState<string>('');
    const [revealEnabled, setRevealEnabled] = useState<boolean>(false);
    const [revealURI, setRevealURI] = useState<string>('');
    const [mintPrice, setMintPrice] = useState<string>('');
    const [charityDonation, setCharityDonation] = useState<Charity>(defaultCharity);
    const [royalty, setRoyalty] = useState<Royalty>(defaultRoyalty);

    const [activeCategory, setActiveCategory] = useState<Category | undefined>();
    const [activeTheme, setActiveTheme] = useState<theme>(theme.Contained);
    const [socials, setSocials] = useState<LinkData>({});

    const [openCategoryDropdown, setOpenCategoryDropdown] = useState<boolean>(false);
    const [charities, setCharities] = useState<string[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<Errors>(defaultErrors);

    useEffect(() => {
        async function fetchCharity() {
          if (mvp.marketplaceContract) {
            const contract = mvp.marketplaceContract;
            const charities = await contract.methods.getCharityList().call();
            setCharities(charities);
          }
        }
    
        if (mvp) fetchCharity();
    }, [mvp]);

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

    const toggleCategory = () => {
        if (activeCategory) setOpenCategoryDropdown(false);
        else setOpenCategoryDropdown(!openCategoryDropdown);
    }

    const createCollection = async() => {
        if (mvp) {
            if (mvp.factoryContract) {
                try {
                    const valid = validateForm();
                    if (!valid) return;
                    setLoading(true);
                    const contract = mvp.factoryContract;
                    const deployData = [
                        name,
                        symbol,
                        maxSupply,
                        metadataURI,
                        revealURI,
                        revealEnabled,
                        provider?.utils.toWei(mintPrice.toString(), "ether"),
                        charityDonation.address,
                        charityDonation.percent,
                        royalty
                    ];

                    const deployRes = await contract.methods.createCollection(...deployData).send({
                        from: waleltAddress
                    });
                    toast.success("Collection is deployed successfully!");
                    const res = await axios.post(
                        `${process.env.API_URL}/api/collections/`,
                        {
                            name,
                            description,
                            pattern,
                            theme:activeTheme,
                            address: deployRes?.events?.returnValues?.collection,
                            category: activeCategory?.value
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${authedUser?.accessToken}`,
                            }
                        }
                    );
                    toast.success("Collection is uploaded to platform successfully!")
                    const formData = new FormData();
                    if (logo) formData.append('logo', logo);
                    if (featuredImage) formData.append('featured', featuredImage);
                    if (bannerImage) formData.append('banner', bannerImage);
                    await axios.put(
                        `${process.env.API_URL}/api/collections/upload/${res.data.id}`,
                        formData,
                        {
                            headers: {
                                Authorization: `Bearer ${authedUser?.accessToken}`,
                                "Content-Type": "multipart/form-data"
                            }
                        }
                    );
                    let _socials = [];
                    type social_index = "discord" | "website" | "telegram" | "medium";
                    if (Object.keys(socials).length) {
                        for (let key in socials) {
                            if (socials[key as social_index]) {
                                _socials.push({
                                    social: key,
                                    link: socials[key as social_index]
                                });
                            }
                        }
                        if (_socials.length) {
                            await axios.put(
                                `${process.env.API_URL}/api/collections/${res.data.id}`,
                                {
                                    socials: _socials
                                },
                                {
                                    headers: {
                                        Authorization: `Bearer ${authedUser?.accessToken}`,
                                    }
                                }
                            );
                        }
                    }

                } catch(err) {
                    console.log(err);
                }
                setLoading(false);
            }
        }
    }

    const controlRoyaltyPercents = (val: string, key: string) => {
        if (val == '') val = '0';
        let percent = Math.floor(parseInt(val));
        switch(key) {
          case "charity":
            if (percent < 1) percent = 1;
            else if (percent >= 10) percent = 10;
            setRoyalty({ ...royalty, charityPercent: percent.toString(), creatorPercent: (10 - percent).toString() });
            break;
          case "creator":
            if (percent >= 10) percent = 9;
            else if (percent <= 0) percent = 0;
            setRoyalty({ ...royalty, creatorPercent: percent.toString(), charityPercent: (10 - percent).toString() });
            break;
        }
    }

    const controlCharityPercent = (val:string) => {
        if (val == '') val = '1';
        let percent = Math.floor(parseInt(val));
        if (percent < 1) percent = 1;
        else if (percent >= 10) percent = 10;
        setCharityDonation({...charityDonation, percent: percent.toString() });
    }

    const validateForm = () => {
        let _errors = { ...errors };

        _errors.logo = !logo ? true : false;
        _errors.name = !name.trim().length ? true : false;
        _errors.symbol = !symbol.trim().length ? true : false;
        _errors.pattern = !pattern.trim().length ? true : false;
        _errors.maxSupply = Number(maxSupply) < 1 ? true : false;
        _errors.metadataURI = !metadataURI.trim().length ? true : false;
        
        if (!charityDonation.address || (Number(charityDonation.percent) < 1 || Number(charityDonation.percent) > 100)) _errors.charity = true;
        else _errors.charity = false;

        if (!royalty.charity || !provider?.utils.isAddress(royalty.creator) || Number(royalty.charityPercent) + Number(royalty.creatorPercent) < 1) _errors.royalty = true;
        else _errors.royalty = false;
    
        if (revealEnabled) {
            if (!revealURI.length) _errors.prevealURI = true;
            else _errors.prevealURI = false;
        }
        else _errors.prevealURI = false;

        _errors.mintPrice = (Number(mintPrice) < 0 || !mintPrice) ? true : false;

        setErrors(_errors);
        return JSON.stringify(_errors) == JSON.stringify(defaultErrors);
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
                            {
                                "border-red-500": errors?.logo
                            }
                        )}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        {
                            logo ?
                            <MintArtPreview src={logo} type="image"/>
                            :
                            <ImageDefaultIcon className="text-base-content w-12"/>
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
                            "!border-dashed border-base-content border-4 w-[300px] h-[200px] flex justify-center items-center mt-4 rounded-lg bg-white overflow-hidden"
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
                            "!border-dashed border-base-content border-4 w-full max-w-[700px] h-[200px] flex justify-center items-center mt-4 rounded-lg bg-white overflow-hidden"
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
                                {
                                    "border-red-500": errors.name
                                }    
                            )}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <MintItemTitle
                            title="Symbol"
                            // subTitle="This is the collection where your item will appear."
                            required
                        />
                        <input
                            readOnly={isLoading}
                            type="text"
                            className={cx(
                                "input input-bordered border-base-content profile-item block w-full outline-none mt-3",
                                {
                                    "border-red-500": errors.symbol
                                }
                            )}
                            value={symbol}
                            onChange={(e) => setSymbol(e.target.value)}
                        />
                    </div>

                    <div>
                        <MintItemTitle
                            title="URL"
                            subTitle="Customise your URL on GiveTree. Must only contain lowercase letters, numbers, and hyphens."
                        />
                        <div
                            className={cx(
                                "flex items-center input input-bordered bg-white border-base-content",
                                {
                                    "border-red-500": errors.pattern
                                }
                            )}
                        >
                            <span>https://givetree.xyz/collection/</span>
                            <input
                                readOnly={isLoading}
                                type="text"
                                placeholder="treasures-of-the-tree"
                                className="w-full outline-none"
                                value={pattern}
                                onChange={(e) => setPattern(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <MintItemTitle
                            title="Description"
                            subTitle="Markdown syntax is supported. 0 of 1000 characters used."
                        />
                        <textarea
                            readOnly={isLoading}
                            className={cx(
                                "textarea textarea-bordered border-base-content profile-item block w-full outline-none focus:border-indigo-500 sm:text-sm p-4 h-[160px]",
                            )}
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="">
                        <MintItemTitle
                            title="Category"
                            subTitle="Adding a category will help make your item discoverable on OpenSea."
                        />
                        <div className="mt-3">
                            <div className="dropdown dropdown-open">
                                <label
                                    tabIndex={0}
                                    className="btn btn-outline m-1"
                                    onClick={toggleCategory}
                                >Add Category</label>
                                {
                                    activeCategory ? (
                                        <div className="category-badge ml-2">
                                            <span className="text-base-content">{activeCategory.text}</span>
                                            <XIcon
                                                className="w-6 h-6 text-base-content hover:text-base-100"
                                                onClick={() => setActiveCategory(undefined)}
                                            />
                                        </div>
                                    ) : ""
                                }
                                <ul
                                    tabIndex={0}
                                    className={
                                        cx(
                                            "dropdown-content menu p-2 shadow bg-white border border-base-content rounded-box w-52",
                                            {
                                                "hidden": !openCategoryDropdown
                                            }
                                        )
                                    }
                                >
                                    {
                                        Categories.map((item, idx) => (
                                            <li
                                                key={idx}
                                                onClick={() => {
                                                    setActiveCategory(item);
                                                    toggleCategory();
                                                }}
                                            >
                                                <a className="bg-opacity-50">{item.text}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <MintItemTitle
                            title="Max Supply"
                            subTitle="This is max supply of collection."
                            required
                        />
                        <input
                            readOnly={isLoading}
                            type="number"
                            className={cx(
                                "input input-bordered border-base-content profile-item block w-full outline-none mt-3",
                                {
                                    "border-red-500": errors.maxSupply
                                }
                            )}
                            value={maxSupply}
                            onChange={(e) => setMaxSupply(e.target.value)}
                        />
                    </div>

                    <div>
                        <MintItemTitle
                            title="Metadata URI"
                            subTitle="This is the collection where your item will appear."
                            required
                        />
                        <input
                            readOnly={isLoading}
                            type="text"
                            className={cx(
                                "input input-bordered border-base-content profile-item block w-full outline-none mt-3",
                                {
                                    "border-red-500": errors.metadataURI
                                }
                            )}
                            value={metadataURI}
                            onChange={(e) => setMetadataURI(e.target.value)}
                        />
                    </div>

                    <div className="">
                        <MintItemTitle
                            title="Links"
                        />
                        <div className="rounded-xl border-[1px] my-4 border-base-content bg-white">
                            <div
                                className="flex items-center p-4 border-b-[1px] border-base-content last:border-b-0 justify-between"
                            >
                                <div className="w-[30px] h-[30px] flex items-center justify-center mr-4">
                                    <WebsiteIcon />
                                </div>
                                <input
                                    readOnly={isLoading}
                                    type="text"
                                    className="outline-none w-full"
                                    placeholder="yoursite.io"
                                    value={socials?.website}
                                    onChange={(e) => setSocials({ ...socials, website: e.target.value })}
                                />
                            </div>
                            <div
                                className="flex items-center p-4 border-b-[1px] border-base-content last:border-b-0 justify-between"
                            >
                                <div className="w-[30px] h-[30px] flex items-center justify-center mr-4">
                                    <DiscordSolidIcon/>
                                </div>
                                <div className="flex w-full">
                                    <span>https://discord.gg/</span>
                                    <input
                                        type="text"
                                        className="outline-none w-full bg-transparent"
                                        placeholder="dxdidesNsmdUM"
                                        value={socials?.discord}
                                        onChange={(e) => setSocials({ ...socials, discord: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div
                                className="flex items-center p-4 border-b-[1px] border-base-content last:border-b-0 justify-between"
                            >
                                <div className="w-[30px] h-[30px] flex items-center justify-center mr-4">
                                    <MediumIcon/>
                                </div>
                                <div className="flex w-full">
                                    <span>https://medium.com/@</span>
                                    <input
                                        type="text"
                                        className="outline-none w-full bg-transparent"
                                        placeholder="medium_username"
                                        value={socials?.medium}
                                        onChange={(e) => setSocials({ ...socials, medium: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div
                                className="flex items-center p-4 border-b-[1px] border-base-content last:border-b-0 justify-between"
                            >
                                <div className="w-[30px] h-[30px] flex items-center justify-center mr-4">
                                    <TelegramIcon/>
                                </div>
                                <div className="flex w-full">
                                    <span>https://t.me/</span>
                                    <input
                                        type="text"
                                        className="outline-none w-full bg-transparent"
                                        placeholder="username"
                                        value={socials?.telegram}
                                        onChange={(e) => setSocials({ ...socials, telegram: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="">
                        <MintItemTitle
                            title="Creator & charity earnings"
                            subTitle="Earn a percentage of the sale price every time one of your items is sold. Adding multiple addresses may increase gas fees for buyers. "
                        /> */}
                        <div>
                            <div className="flex flex-col mb-2">
                                <MintItemTitle
                                    title="Charity donation"
                                    subTitle="A minimum of 1% of your minting fee/price for each NFT is a required charity
                                    donation."
                                    required
                                />
                            </div>
                            <select
                                className="select profile-item border-base-content outline-none block mt-1"
                                onChange={(e) => setCharityDonation({ ...charityDonation, address: e.target.value})}
                            >
                                <option value="">Select charity</option>
                                {
                                    charities.map((item, idx) => (
                                        <option value={item} key={idx}>{item}</option>
                                    ))
                                }
                            </select>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    className={cx(
                                        "input input-bordered border-base-content profile-item block outline-none !w-2/3",
                                        {
                                            "border-red-500": errors.charity
                                        }
                                    )}
                                    value={charityDonation.address}
                                    readOnly
                                />
                                <input
                                    readOnly={isLoading}
                                    type="number"
                                    className={cx(
                                        "input input-bordered border-base-content profile-item block outline-none !w-1/3",
                                        {
                                            "border-red-500": errors.charity
                                        }
                                    )}
                                    min={1}
                                    value={charityDonation.percent}
                                    onChange={(e) => controlCharityPercent(e.target.value) }
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col mb-2">
                                <MintItemTitle
                                    title="Royalty"
                                    subTitle="A maximum of 10 % of your secondary sale price for each NFT is a required."
                                    required
                                />
                            </div>
                            <select
                                className="select profile-item border-base-content outline-none block mt-1"
                                onChange={(e) => setRoyalty({ ...royalty, charity: e.target.value})}
                            >
                                <option value="">Select charity</option>
                                {
                                    charities.map((item, idx) => (
                                        <option value={item} key={idx}>{item}</option>
                                    ))
                                }
                            </select>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    className={cx(
                                        "input input-bordered border-base-content profile-item block outline-none !w-2/3",
                                        {
                                            "border-red-500": errors.royalty
                                        }
                                    )}
                                    placeholder="Charity"
                                    value={royalty.charity}
                                    readOnly
                                />
                                <input
                                    readOnly={isLoading}
                                    type="number"
                                    className={cx(
                                        "input input-bordered border-base-content profile-item block outline-none !w-1/3",
                                        {
                                            "border-red-500": errors.royalty
                                        }
                                    )}
                                    min={1}
                                    value={royalty.charityPercent}
                                    onChange={(e) => controlRoyaltyPercents(e.target.value, "charity")}
                                />
                            </div>
                            <div className="flex gap-2">
                                <input
                                    readOnly={isLoading}
                                    type="text"
                                    className={cx(
                                        "input input-bordered border-base-content profile-item block outline-none !w-2/3",
                                        {
                                            "border-red-500": errors.royalty
                                        }
                                    )}
                                    placeholder="Creator"
                                    value={royalty.creator}
                                    onChange={(e) => setRoyalty({ ...royalty, creator: e.target.value })}
                                />
                                <input
                                    readOnly={isLoading}
                                    type="number"
                                    className={cx(
                                        "input input-bordered border-base-content profile-item block outline-none !w-1/3",
                                        {
                                            "border-red-500": errors.royalty
                                        }
                                    )}
                                    min={1}
                                    value={royalty.creatorPercent}
                                    onChange={(e) => controlRoyaltyPercents(e.target.value, "creator")}
                                />
                            </div>
                            <div className="flex justify-end">
                                <label className="text-lg text-black mr-2">Total 10%</label>
                            </div>
                        </div>

                        {/* <div className="mt-3">
                            <button className="btn btn-outline border-base-content text-gray-500 inline-block">Add address</button>
                        </div> */}
                    {/* </div> */}

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
                    
                    {/* <div>
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
                    </div> */}

                    <div>
                        <MintItemTitle
                            title="Display theme"
                            subTitle="Change how your items are shown."
                        />

                        <div className="themes grid md:grid-cols-3 grid-cols-1 gap-4 mt-2">
                            {
                                themes.map((item, idx) => (
                                    <div
                                        className={
                                            cx(
                                                "flex flex-col text-center p-4 border rounded-lg cursor-pointer",
                                                {
                                                    "border-sky-500 shadow-card-theme shadow-sky-500": activeTheme == item.title,
                                                    "border-base-content hover:shadow-card-theme hover:shadow-sky-500 hover:border-sky-500": activeTheme != item.title
                                                }
                                            )
                                        }
                                        key={idx}
                                        onClick={() => setActiveTheme(item.title)}
                                    >
                                        <img
                                            src={item.icon.src}
                                            className="brightness-50"
                                        />
                                        <label className="font-bold mt-4 capitalize">{item.title}</label>
                                        <p>{item.text}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <MintItemTitle
                                title="Explicit & sensitive content"
                                subTitle="Set this collection as explicit and sensitive content"
                            />
                        </div>
                        <div className="flex justify-end items-center">
                            <input
                                // readOnly={isLoading}
                                type="checkbox"
                                className="toggle toggle-primary"
                                // checked={unlockable}
                                // onClick={() => setUnlockable(!unlockable)}
                            />
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                            <div>
                                <MintItemTitle
                                    title="Reveal"
                                    subTitle="Set this collection as explicit and sensitive content"
                                />
                            </div>
                            <div className="flex justify-end items-center">
                                <input
                                    readOnly={isLoading}
                                    type="checkbox"
                                    className="toggle toggle-primary"
                                    checked={revealEnabled}
                                    onClick={() => setRevealEnabled(!revealEnabled)}
                                />
                            </div>
                        </div>
                        {
                            revealEnabled ? (
                                <div>
                                    <input
                                        readOnly={isLoading}
                                        type="text"
                                        placeholder="Please input pre reveal URI"
                                        className={cx(
                                            "input input-bordered border-base-content profile-item block w-full outline-none",
                                            {
                                                "border-red-500": errors.prevealURI && revealEnabled
                                            }
                                            )
                                        }
                                        value={revealURI}
                                        onChange={(e) => setRevealURI(e.target.value)}
                                    />
                                </div>
                            ) : ""
                        }
                        

                        <div className="mt-3">
                            <MintItemTitle
                                title="Mint Price"
                                subTitle="Users should pay cost for minting NFTs"
                            />
                            <input
                                readOnly={isLoading}
                                type="number"
                                placeholder=""
                                className={cx(
                                    "input input-bordered border-base-content profile-item block w-full outline-none",
                                    {
                                        "border-red-500": errors.mintPrice
                                    }
                                )}
                                value={mintPrice}
                                onChange={(e) => setMintPrice(e.target.value)}
                            />
                        </div>

                    </div>
                </div>
                <div className="action-button mt-4">
                    <button
                        className="btn btn-info text-white"
                        onClick={createCollection}
                    >Create</button>
                </div>
            </div>
        </div>
    )
}