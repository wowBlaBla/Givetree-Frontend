import React, { FC, useEffect, useRef, useState } from "react";
import cx from "classnames";
import { AddIcon } from "../../components/icons/AddIcon";
import { ImageDefaultIcon } from "../../components/icons/ImageDefaultIcon";
import { InformationIcon } from "../../components/icons/InformationIcon";
import { RequiredIcon } from "../../components/icons/RequiredIcon";
import { MintArtPreview } from "../../components/MintArt";
import { LevelModal } from "../../components/modal/metadata/LevelModal";
import { PropertyModal } from "../../components/modal/metadata/PropertyModal";
import { StatsModal } from "../../components/modal/metadata/StatsModal";
import { uploadArtToIPFS, uploadMetadataToIPFS } from "../../utils/metadataManage";
import { EthereumNetwork } from "../../configs/constants";
import { MintItemTitle } from "../../components/MintItemTitle";
import { toast } from "react-toastify";
import { useWallet } from "../../context/WalletContext";

interface propertyInterface {
  trait_type: string;
  value: string;
}

interface metadataIns {
  name: string;
  description: string;
  image: string;
  attributes: propertyInterface[];
}

interface Charity {
  charity: string;
  percent: string;
}

interface Royalty {
  charity: string;
  charityPercent: string;
  creator: string;
  creatorPercent: string;
}

interface Errors {
  art?: boolean;
  previewArt?: boolean;
  name?: boolean;
  description?: boolean;
  supply?: boolean;
  charity?: boolean;
  royalty?: boolean;
}

const defaultMetadata: metadataIns = {
  name: "",
  description: "",
  image: "",
  attributes: [],
};

const defaultTrait: propertyInterface = { trait_type: "", value: "" };
const defaultCharity: Charity = {
  charity: "",
  percent: "",
};
const defaultRoyalty: Royalty = {
  charity: "",
  charityPercent: "",
  creator: "",
  creatorPercent: "",
};

const defaultError: Errors = {
  art: false,
  previewArt: false,
  name: false,
  description: false,
  supply: false,
  charity: false,
  royalty: false,
};

export const NewNFT: FC = () => {
  const { address, contracts, web3Instance } = useWallet();

  const [charities, setCharities] = useState<string[]>([]);

  const nftImageRef = useRef<HTMLInputElement>(null);
  const [viewType, setViewType] = useState<"edit" | "preview">("edit");
  const [artType, setArtType] = useState<"image" | "audio" | "video">("image");
  const [nftImage, setNftImage] = useState<File>();
  const [animationArt, setAnimationArt] = useState<File>();
  const [metadata, setMetadata] = useState<metadataIns>(defaultMetadata);

  const [properties, setProperties] = useState<propertyInterface[]>([defaultTrait]);
  const [levels, setLevels] = useState<propertyInterface[]>([defaultTrait]);
  const [stats, setStats] = useState<propertyInterface[]>([defaultTrait]);
  const [unlockable, setUnlockable] = useState<boolean>(false);
  const [explicit, setExplicit] = useState<boolean>(false);
  const [supply, setSupply] = useState<string>("");

  const [charityDonation, setCharityDonation] = useState<Charity>(defaultCharity);
  const [royalty, setRoyalty] = useState<Royalty>(defaultRoyalty);

  const [openProModal, setOpenProModal] = useState<boolean>(false);
  const [openLevelModal, setOpenLevelModal] = useState<boolean>(false);
  const [openStatModal, setOpenStatModal] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const [errors, setErrors] = useState<Errors>(defaultError);

  useEffect(() => {
    async function fetchCharity() {
      if (contracts && contracts.marketplace) {
        const contract = contracts.marketplace;
        const charities = await contract.methods.getCharityList().call();
        setCharities(charities);
      }
    }

    if (contracts) fetchCharity();
  }, [contracts]);

  const handleAvatarFileSelect = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const type = file.type;
      if (type.indexOf("image") > -1) {
        setArtType("image");
        setAnimationArt(undefined);
        setNftImage(file);
      } else if (type.indexOf("audio") > -1) {
        setArtType("audio");
        setNftImage(undefined);
        setAnimationArt(file);
      } else if (type.indexOf("video") > -1) {
        setArtType("video");
        setNftImage(undefined);
        setAnimationArt(file);
      }
    }
  };

  const handlePreviewImage = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const type = file.type;
      if (type.indexOf("image") > -1) {
        setNftImage(file);
      }
    }
  };

  const controlRoyaltyPercents = (val: string, key: string) => {
    if (val == "") val = "0";
    let percent = Math.floor(parseInt(val));
    switch (key) {
      case "charity":
        if (percent < 1) percent = 1;
        else if (percent >= 10) percent = 10;
        setRoyalty({
          ...royalty,
          charityPercent: percent.toString(),
          creatorPercent: (10 - percent).toString(),
        });
        break;
      case "creator":
        if (percent >= 10) percent = 9;
        else if (percent <= 0) percent = 0;
        setRoyalty({
          ...royalty,
          creatorPercent: percent.toString(),
          charityPercent: (10 - percent).toString(),
        });
        break;
    }
  };

  const controlCharityPercent = (val: string) => {
    if (val == "") val = "1";
    let percent = Math.floor(parseInt(val));
    if (percent < 1) percent = 1;
    else if (percent >= 10) percent = 10;
    setCharityDonation({ ...charityDonation, percent: percent.toString() });
  };

  const uploadMetadata = async () => {
    try {
      if (!nftImage) return;
      let animate_url = "";
      const imageCid = await uploadArtToIPFS(nftImage);
      if (animationArt) {
        animate_url = await uploadArtToIPFS(animationArt);
      }

      const _metadata = {
        ...metadata,
        image: "ipfs://" + imageCid,
        animate_url: animate_url ? "ipfs://" + animate_url : null,
        attributes: properties,
        levels: levels[0].trait_type.length > 0 ? levels : undefined,
        stats: stats[0].trait_type.length > 0 ? stats : undefined,
      };
      const metadataCid = await uploadMetadataToIPFS(_metadata);
      return metadataCid;
    } catch (err) {}
  };

  const mint = async () => {
    if (contracts && contracts.singleNFT) {
      const valid = validateForm();
      if (!valid) return;
      setLoading(true);
      try {
        const contract = contracts.singleNFT;
        let cid = "";
        const params = {
          pending: `Uploading Metadata...`,
          success: `Uploaded Metadata succesfully!`,
          error: `Uploading Metadata is Failed`,
        };

        await toast.promise(async () => {
          cid = await uploadMetadata();
        }, params);

        if (cid) {
          const params = {
            pending: `Minting NFT...`,
            success: `NFT is minted succesfully!`,
            error: `Minting is Failed`,
          };

          await toast.promise(async () => {
            const tokenID = await getTokenID();
            if (tokenID == false) throw Error();
            const mintPrice = await contract.methods.mintPrice().call();

            await contract.methods
              .mint([tokenID, supply, "ipfs://" + cid], charityDonation, royalty)
              .send({
                from: address,
                value: mintPrice,
              });
          }, params);
        }
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }
  };

  const getTokenID = async () => {
    if (web3Instance && address && contracts && contracts.singleNFT) {
      try {
        const contract = contracts.singleNFT;
        const nonce = await contract.methods.nonces(address).call();
        const hash = web3Instance.utils.soliditySha3(
          EthereumNetwork.address.singleNFT,
          address,
          nonce
        );
        if (hash) {
          return web3Instance.utils.hexToNumberString(hash);
        } else return false;
      } catch (err) {
        console.log(err);
        return false;
      }
    }
    return false;
  };

  const validateForm = () => {
    const _errors = { ...errors };
    if (artType == "image") {
      _errors.art = !nftImage ? true : false;
    }
    if (artType == "audio" || artType == "video") {
      _errors.previewArt = !nftImage ? true : false;
      _errors.art = !animationArt ? true : false;
    }
    if (!metadata.name.trim().length) _errors.name = true;
    else _errors.name = false;
    if (Number(supply) < 1) _errors.supply = true;
    else _errors.supply = false;
    if (
      !charityDonation.charity ||
      Number(charityDonation.percent) < 1 ||
      Number(charityDonation.percent) > 100
    )
      _errors.charity = true;
    else _errors.charity = false;
    if (
      !royalty.charity ||
      !web3Instance?.utils.isAddress(royalty.creator) ||
      Number(royalty.charityPercent) + Number(royalty.creatorPercent) < 1
    )
      _errors.royalty = true;
    else _errors.royalty = false;

    setErrors(_errors);
    return JSON.stringify(_errors) == JSON.stringify(defaultError);
  };

  return (
    <div className="profile">
      {/* <div className="profile-save-section px-8">
        <div className="flex justify-between max-w-[632px] items-center">
          <div className="tabs">
            <div
              className={`tab ${viewType === "edit" ? "tab-active" : ""}`}
              onClick={() => setViewType("edit")}
            >
              Edit NFT
            </div>
            <div
              className={`tab ${viewType === "preview" ? "tab-active" : ""}`}
              onClick={() => setViewType("preview")}
            >
              Preview NFT
            </div>
          </div>
          <button
            className="btn bg-[#0075FF] text-white h-[30px] min-h-0"
            onClick={uploadMetadata}
          >
            Save
          </button>
        </div>
      </div> */}
      <div className="p-8 max-w-layout-xl text-black">
        <h1 className="font-bold text-black text-[24px] mb-2">Create an NFT</h1>
        <div className="flex items-center mb-[48px]">
          <RequiredIcon />
          <span className="text-sm ml-2">Required fields</span>
        </div>
        <div className="flex flex-col mb-[48px]">
          <MintItemTitle
            title="Upload an Image, Video, Audio, or 3D model"
            subTitle="File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF.
            Max size: 100 MB"
            required
          />
          <label
            className={cx(
              "profile-box !border-dashed border-base-content border-2 w-[300px] h-[300px] flex justify-center items-center mt-4 ",
              {
                "border-red-500": errors?.art,
              }
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {artType != "image" && animationArt ? (
              // eslint-disable-next-line @next/next/no-img-element
              <MintArtPreview src={animationArt} type={artType} />
            ) : artType == "image" && nftImage ? (
              <MintArtPreview src={nftImage} type="image" />
            ) : (
              <ImageDefaultIcon className="text-base-content" />
            )}
            <input
              readOnly={isLoading}
              ref={nftImageRef}
              type="file"
              hidden
              onChange={handleAvatarFileSelect}
              accept=".jpg, .png, .gif, .svg, .mp4, .webm, .mp3, .wav, .ogg, .glb, .gltf"
            />
          </label>
        </div>

        {artType && artType != "image" ? (
          <div className="flex flex-col mb-[48px]">
            <MintItemTitle
              title="Preview Image"
              subTitle="Because you’ve included multimedia, you’ll need to provide an image (PNG, JPG, or GIF) for the card display of your item."
              required
            />
            <label
              className={cx(
                "profile-box !border-dashed border-base-content border-2 w-[200px] h-[200px] flex justify-center items-center mt-4 ",
                {
                  "border-red-500": errors?.art,
                }
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {nftImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <MintArtPreview src={nftImage} type="image" />
              ) : (
                <ImageDefaultIcon className="text-base-content" />
              )}
              <input
                readOnly={isLoading}
                type="file"
                hidden
                onChange={handlePreviewImage}
                accept=".jpg, .png, .gif"
              />
            </label>
          </div>
        ) : (
          ""
        )}

        <div className="mt-4">
          <div className="flex items-center mb-1 gap-x-1">
            <MintItemTitle title="Name" required />
          </div>
          <input
            readOnly={isLoading}
            type="text"
            className={cx(
              "input input-bordered border-base-content profile-item block w-full outline-none",
              {
                "border-red-500": errors.name,
              }
            )}
            value={metadata.name}
            onChange={(e) => setMetadata({ ...metadata, name: e.target.value })}
          />
        </div>

        <div className="mt-4">
          <div className="flex flex-col mb-2">
            <MintItemTitle
              title="Description"
              subTitle="Please provide a brief description of your item. 0 of 1000 characters used."
            />
          </div>
          <textarea
            readOnly={isLoading}
            className={cx(
              "textarea textarea-bordered border-base-content profile-item block w-full outline-none focus:border-indigo-500 sm:text-sm p-4 h-[160px]",
              {
                "border-red-500": errors.description,
              }
            )}
            rows={4}
            value={metadata.description}
            onChange={(e) => setMetadata({ ...metadata, description: e.target.value })}
          />
        </div>

        <div className="mt-4">
          <div className="flex mb-2 items-center">
            <div className="flex flex-col mr-4">
              <MintItemTitle
                title="Collection"
                subTitle="This is the collection where your item will appear."
              />
            </div>
            <InformationIcon className="text-gray-500" />
          </div>
          <input
            readOnly={isLoading}
            type="text"
            className="input input-bordered border-base-content profile-item block w-full outline-none"
            // value={userName}
            // onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between mt-12 border-b-[#8C8C8C] border-b-2 pb-8">
          <div className="flex max-w-[75%]">
            <div className="w-[24px] h-[24px] mt-2 text-base-content">
              <svg
                width="23"
                height="20"
                viewBox="0 0 23 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2C0 2.53043 0.210714 3.03914 0.585786 3.41421C0.960859 3.78929 1.46957 4 2 4C2.53043 4 3.03914 3.78929 3.41421 3.41421C3.78929 3.03914 4 2.53043 4 2C4 1.46957 3.78929 0.960859 3.41421 0.585786C3.03914 0.210714 2.53043 0 2 0ZM8 1C7.86749 0.998126 7.73593 1.02261 7.61296 1.07202C7.48999 1.12143 7.37807 1.1948 7.2837 1.28784C7.18933 1.38088 7.11439 1.49176 7.06324 1.61401C7.0121 1.73627 6.98576 1.86747 6.98576 2C6.98576 2.13253 7.0121 2.26373 7.06324 2.38599C7.11439 2.50824 7.18933 2.61912 7.2837 2.71216C7.37807 2.8052 7.48999 2.87857 7.61296 2.92798C7.73593 2.97739 7.86749 3.00187 8 3H21C21.1325 3.00187 21.2641 2.97739 21.387 2.92798C21.51 2.87857 21.6219 2.8052 21.7163 2.71216C21.8107 2.61912 21.8856 2.50824 21.9368 2.38599C21.9879 2.26373 22.0142 2.13253 22.0142 2C22.0142 1.86747 21.9879 1.73627 21.9368 1.61401C21.8856 1.49176 21.8107 1.38088 21.7163 1.28784C21.6219 1.1948 21.51 1.12143 21.387 1.07202C21.2641 1.02261 21.1325 0.998126 21 1H8ZM2 8C1.46957 8 0.960859 8.21071 0.585786 8.58579C0.210714 8.96086 0 9.46957 0 10C0 10.5304 0.210714 11.0391 0.585786 11.4142C0.960859 11.7893 1.46957 12 2 12C2.53043 12 3.03914 11.7893 3.41421 11.4142C3.78929 11.0391 4 10.5304 4 10C4 9.46957 3.78929 8.96086 3.41421 8.58579C3.03914 8.21071 2.53043 8 2 8ZM8 9C7.86749 8.99813 7.73593 9.02261 7.61296 9.07202C7.48999 9.12143 7.37807 9.1948 7.2837 9.28784C7.18933 9.38088 7.11439 9.49176 7.06324 9.61401C7.0121 9.73627 6.98576 9.86747 6.98576 10C6.98576 10.1325 7.0121 10.2637 7.06324 10.386C7.11439 10.5082 7.18933 10.6191 7.2837 10.7122C7.37807 10.8052 7.48999 10.8786 7.61296 10.928C7.73593 10.9774 7.86749 11.0019 8 11H21C21.1325 11.0019 21.2641 10.9774 21.387 10.928C21.51 10.8786 21.6219 10.8052 21.7163 10.7122C21.8107 10.6191 21.8856 10.5082 21.9368 10.386C21.9879 10.2637 22.0142 10.1325 22.0142 10C22.0142 9.86747 21.9879 9.73627 21.9368 9.61401C21.8856 9.49176 21.8107 9.38088 21.7163 9.28784C21.6219 9.1948 21.51 9.12143 21.387 9.07202C21.2641 9.02261 21.1325 8.99813 21 9H8ZM2 16C1.46957 16 0.960859 16.2107 0.585786 16.5858C0.210714 16.9609 0 17.4696 0 18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20C2.53043 20 3.03914 19.7893 3.41421 19.4142C3.78929 19.0391 4 18.5304 4 18C4 17.4696 3.78929 16.9609 3.41421 16.5858C3.03914 16.2107 2.53043 16 2 16ZM8 17C7.86749 16.9981 7.73593 17.0226 7.61296 17.072C7.48999 17.1214 7.37807 17.1948 7.2837 17.2878C7.18933 17.3809 7.11439 17.4918 7.06324 17.614C7.0121 17.7363 6.98576 17.8675 6.98576 18C6.98576 18.1325 7.0121 18.2637 7.06324 18.386C7.11439 18.5082 7.18933 18.6191 7.2837 18.7122C7.37807 18.8052 7.48999 18.8786 7.61296 18.928C7.73593 18.9774 7.86749 19.0019 8 19H21C21.1325 19.0019 21.2641 18.9774 21.387 18.928C21.51 18.8786 21.6219 18.8052 21.7163 18.7122C21.8107 18.6191 21.8856 18.5082 21.9368 18.386C21.9879 18.2637 22.0142 18.1325 22.0142 18C22.0142 17.8675 21.9879 17.7363 21.9368 17.614C21.8856 17.4918 21.8107 17.3809 21.7163 17.2878C21.6219 17.1948 21.51 17.1214 21.387 17.072C21.2641 17.0226 21.1325 16.9981 21 17H8Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div className="flex flex-col ml-8">
              <MintItemTitle
                title="Properties"
                subTitle="Textual traits that show up as rectangles"
              />
            </div>
          </div>
          <div
            className="flex justify-center items-center w-[100px] h-[100px] border border-gray-500/40 rounded-lg cursor-pointer text-base-content"
            onClick={() => setOpenProModal(true)}
          >
            <AddIcon />
          </div>
        </div>

        <div className="flex items-center justify-between mt-8 border-b-[#8C8C8C] border-b-2 pb-8">
          <div className="flex max-w-[75%]">
            <div className="w-[24px] h-[24px] mt-2 text-base-content">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7651 2.43403L18.6401 10.946L27.6231 11.05C28.3961 11.059 28.7161 12.044 28.0961 12.505L20.8891 17.869L23.5661 26.445C23.7961 27.183 22.9591 27.791 22.3281 27.344L15.0001 22.147L7.67106 27.343C7.04106 27.79 6.20306 27.181 6.43306 26.444L9.11006 17.868L1.90306 12.504C1.28306 12.043 1.60306 11.058 2.37606 11.049L11.3591 10.945L14.2341 2.43303C14.4821 1.70103 15.5181 1.70103 15.7651 2.43403Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="flex flex-col ml-8">
              <MintItemTitle
                title="Levels"
                subTitle="Numerical traits that show up as rectangles"
              />
            </div>
          </div>
          <div
            className="flex justify-center items-center w-[100px] h-[100px] border border-gray-500/40 rounded-lg cursor-pointer text-base-content"
            onClick={() => setOpenLevelModal(true)}
          >
            <AddIcon />
          </div>
        </div>

        <div className="flex items-center justify-between mt-8 border-b-[#8C8C8C] border-b-2 pb-8">
          <div className="flex max-w-[75%]">
            <div className="w-[24px] h-[24px] mt-2 text-base-content">
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 0C18.448 0 18 0.448 18 1V22H24V1C24 0.448 23.552 0 23 0H19ZM1 4C0.448 4 0 4.448 0 5V22H6V5C6 4.448 5.552 4 5 4H1ZM10 8C9.448 8 9 8.448 9 9V22H15V9C15 8.448 14.552 8 14 8H10Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="flex flex-col ml-8">
              <MintItemTitle
                title="Stats"
                subTitle="Numerical traits that show up as rectangles"
              />
            </div>
          </div>
          <div
            className="flex justify-center items-center w-[100px] h-[100px] border border-gray-500/40 rounded-lg cursor-pointer text-base-content"
            onClick={() => setOpenStatModal(true)}
          >
            <AddIcon />
          </div>
        </div>

        <div className="flex items-center justify-between mt-8 border-b-[#8C8C8C] border-b-2 pb-8">
          <div className="flex max-w-[75%]">
            <div className="w-[24px] h-[24px] mt-2 text-base-content">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 2C11.1457 2 8 5.14567 8 9V11H6C4.895 11 4 11.895 4 13V25C4 26.105 4.895 27 6 27H24C25.105 27 26 26.105 26 25V13C26 11.895 25.105 11 24 11H10V9C10 6.22633 12.2263 4 15 4C17.1843 4 19.0229 5.39467 19.709 7.33398C19.7505 7.46069 19.817 7.57782 19.9044 7.67847C19.9919 7.77912 20.0986 7.86126 20.2183 7.92007C20.3379 7.97887 20.4682 8.01315 20.6013 8.02089C20.7344 8.02863 20.8677 8.00967 20.9934 7.96513C21.1191 7.92059 21.2346 7.85136 21.3331 7.76152C21.4317 7.67169 21.5112 7.56305 21.5672 7.44201C21.6231 7.32097 21.6543 7.18996 21.6588 7.05669C21.6634 6.92343 21.6413 6.7906 21.5938 6.66602C20.6319 3.94733 18.0377 2 15 2Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="flex flex-col ml-8">
              <MintItemTitle
                title="Unlockable Content"
                subTitle="Include unlockable content that can only be revealed by the owner of the
                item"
              />
            </div>
          </div>
          <div className="flex justify-end items-center w-[100px] h-[100px]">
            <input
              readOnly={isLoading}
              type="checkbox"
              className="toggle toggle-md"
              checked={unlockable}
              onChange={() => setUnlockable(!unlockable)}
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-8 border-b-[#8C8C8C] border-b-2 pb-8">
          <div className="flex max-w-[75%]">
            <div className="w-[24px] h-[24px] mt-2 text-base-content">
              <svg
                width="30"
                height="27"
                viewBox="0 0 30 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0C14.0405 0 13.2185 0.584681 12.8703 1.41752L0.347055 23.0161V23.0183C0.121041 23.3824 0.000867875 23.8022 0 24.2308C0 24.8428 0.243131 25.4298 0.675907 25.8626C1.10868 26.2953 1.69565 26.5385 2.30769 26.5385C2.36184 26.5381 2.41596 26.5359 2.46995 26.5317L2.47446 26.5385H15H27.5255L27.53 26.5294C27.584 26.5344 27.6381 26.5374 27.6923 26.5385C28.3043 26.5385 28.8913 26.2953 29.3241 25.8626C29.7569 25.4298 30 24.8428 30 24.2308C29.9995 23.8015 29.8794 23.3808 29.6529 23.0161L29.6349 22.9845C29.6342 22.9838 29.6334 22.983 29.6327 22.9823L17.1297 1.41752C16.7815 0.584681 15.9595 0 15 0ZM13.6005 9.64543H16.3995L16.1674 17.1139H13.8326L13.6005 9.64543ZM15.0045 19.3968C15.953 19.3968 16.5212 19.9071 16.5212 20.7782C16.5212 21.6332 15.953 22.1417 15.0045 22.1417C14.0491 22.1417 13.4766 21.6332 13.4766 20.7782C13.4766 19.9071 14.048 19.3968 15.0045 19.3968Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="flex flex-col ml-8">
              <MintItemTitle
                title="Explicit & Sensitive Content"
                subTitle="Set this item as explicit and sensitive content"
              />
            </div>
          </div>
          <div className="flex justify-end items-center w-[100px] h-[100px]">
            <input
              readOnly={isLoading}
              type="checkbox"
              className="toggle toggle-md"
              checked={explicit}
              onChange={() => setExplicit(!explicit)}
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col mb-2 mt-8">
            <MintItemTitle
              title="Supply"
              subTitle="The number of items that can be minted."
              required
            />
          </div>
          <input
            readOnly={isLoading}
            type="number"
            className={cx(
              "input input-bordered border-base-content profile-item block w-full outline-none",
              {
                "border-red-500": errors.supply,
              }
            )}
            value={supply}
            onChange={(e) => setSupply(e.target.value)}
          />
        </div>

        <div>
          <div className="flex flex-col mb-2 mt-8">
            <MintItemTitle title="Blockchain" />
          </div>
          <select
            className="select profile-item border-base-content outline-none block mt-1"
            // onChange={(e) => setAccountType(e.target.value as AccountType)}
          >
            <option value="ethereum">Ethereum</option>
            <option value="solana">Solana</option>
          </select>
        </div>

        <div>
          <div className="flex flex-col mb-2 mt-8">
            <MintItemTitle
              title="Freeze metadata"
              subTitle="Freezing your metadata will allow you to permanently lock and store all of
              this item’s content in decentralised file storage."
            />
          </div>
          <p className="input input-bordered border-base-content profile-item block w-full outline-none flex items-center">
            <span className="text-xs text-black/40">
              To freeze your metadata, you must create your item first
            </span>
          </p>
        </div>

        <div>
          <div className="flex flex-col mb-2 mt-8">
            <MintItemTitle
              title="Charity donation"
              subTitle="A minimum of 1% of your minting fee/price for each NFT is a required charity
              donation."
              required
            />
          </div>
          <select
            className="select profile-item border-base-content outline-none block mt-1"
            onChange={(e) =>
              setCharityDonation({ ...charityDonation, charity: e.target.value })
            }
          >
            <option value="">Select charity</option>
            {charities.map((item, idx) => (
              <option value={item} key={idx}>
                {item}
              </option>
            ))}
          </select>
          <div className="flex gap-2">
            <input
              type="text"
              className={cx(
                "input input-bordered border-base-content profile-item block outline-none !w-2/3",
                {
                  "border-red-500": errors.charity,
                }
              )}
              value={charityDonation.charity}
              readOnly
            />
            <input
              readOnly={isLoading}
              type="number"
              className={cx(
                "input input-bordered border-base-content profile-item block outline-none !w-1/3",
                {
                  "border-red-500": errors.charity,
                }
              )}
              min={1}
              value={charityDonation.percent}
              onChange={(e) => controlCharityPercent(e.target.value)}
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col mb-2 mt-8">
            <MintItemTitle
              title="Royalty"
              subTitle="A maximum of 10 % of your secondary sale price for each NFT is a required."
              required
            />
          </div>
          <select
            className="select profile-item border-base-content outline-none block mt-1"
            onChange={(e) => setRoyalty({ ...royalty, charity: e.target.value })}
          >
            <option value="">Select charity</option>
            {charities.map((item, idx) => (
              <option value={item} key={idx}>
                {item}
              </option>
            ))}
          </select>
          <div className="flex gap-2">
            <input
              type="text"
              className={cx(
                "input input-bordered border-base-content profile-item block outline-none !w-2/3",
                {
                  "border-red-500": errors.royalty,
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
                  "border-red-500": errors.royalty,
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
                  "border-red-500": errors.royalty,
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
                  "border-red-500": errors.royalty,
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
        <button
          className="btn bg-[#0075FF] text-white h-[40px] min-h-0 border-none"
          onClick={mint}
        >
          Create
        </button>
      </div>
      {openProModal ? (
        <PropertyModal
          _property={properties}
          updateAttrs={setProperties}
          closeModal={() => setOpenProModal(false)}
        />
      ) : (
        ""
      )}
      {openLevelModal ? (
        <LevelModal
          _levels={levels}
          updateAttrs={setLevels}
          closeModal={() => setOpenLevelModal(false)}
        />
      ) : (
        ""
      )}
      {openStatModal ? (
        <StatsModal
          _stats={stats}
          updateAttrs={setStats}
          closeModal={() => setOpenStatModal(false)}
        />
      ) : (
        ""
      )}
    </div>
  );
};
