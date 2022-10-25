import React, { FC } from "react";
import cx from "classnames";
import { ImageDefaultIcon } from "../../components/icons/ImageDefaultIcon";
import { RequiredIcon } from "../../components/icons/RequiredIcon";
import { MintItemTitle } from "../../components/MintItemTitle";
import { MintArtPreview } from "../../components/MintArt";

export const NewListing: FC = () => {
  const [avatar, setAvatar] = React.useState<File>();
  const [avatarUrl, setAvatarUrl] = React.useState<string>("");

  const avatarRef = React.useRef<HTMLInputElement>(null);

  const handleAvatarFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      setAvatar(file);
      setAvatarUrl(URL.createObjectURL(file));
    }
  };

  const handleAvatarRemove = () => {
    setAvatar(undefined);
    setAvatarUrl("");
  };

  return (
    <div className="profile">
      <div className="p-8 max-w-layout-xl">
        <h1 className="font-bold text-black text-[24px] mb-2">Create a listing</h1>
        <div className="flex items-center mb-[48px]">
          <span className="text-sm text-black">
            You can create a sale or an auction based NFT fundraiser for NFTs you already
            own
          </span>
        </div>
        <div className="flex flex-col mb-4 text-black">
          <MintItemTitle title="Select NFT" required />
          <label
            className={cx(
              "!border-dashed border-base-content border-4 w-[300px] h-[300px] flex justify-center items-center mt-4 rounded-lg bg-white overflow-hidden"
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {avatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <MintArtPreview src={avatar} type="image" />
            ) : (
              <ImageDefaultIcon />
            )}
            <input ref={avatarRef} type="file" hidden onChange={handleAvatarFileSelect} />
          </label>
        </div>
        <div className="flex flex-col w-[300px] mb-8">
          <button
            className="btn profile-primary-button text-lg font-bold rounded-[30px] w-full mb-4 normal-case text-white"
            onClick={() => avatarRef.current?.click()}
          >
            Select NFT
          </button>
          <button
            className="btn profile-secondary-button text-lg font-bold rounded-[30px] w-full normal-case"
            onClick={handleAvatarRemove}
          >
            Remove
          </button>
        </div>
        <MintItemTitle title="Type" required />
        <div className="mt-4 mb-8 flex border border-[#696969] rounded-lg h-[80px] max-w-[300px] divide-x profile-box text-black">
          <div className="flex flex-col flex-1 justify-center items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 4.4775 15.5225 0 10 0ZM10.8333 14.8808V16.6667H9.16667V14.8858C7.39167 14.6492 6.27417 13.6167 6.21167 12.0867H8.1125C8.20333 12.8483 8.97167 13.3367 10.0783 13.3367C11.1008 13.3367 11.8233 12.8417 11.8233 12.1325C11.8233 11.5333 11.355 11.1883 10.2025 10.9408L8.97833 10.6808C7.26583 10.3225 6.42667 9.43083 6.42667 7.99833C6.42667 6.47333 7.48833 5.40167 9.16667 5.1325V3.33333H10.8333V5.13C12.4633 5.39417 13.5633 6.45 13.6142 7.89417H11.765C11.6742 7.15167 10.9833 6.6575 10.0333 6.6575C9.05 6.6575 8.39917 7.11333 8.39917 7.82917C8.39917 8.40833 8.84833 8.74083 9.94833 8.975L11.0808 9.21583C12.9692 9.61333 13.7825 10.4267 13.7825 11.885C13.7833 13.5367 12.6783 14.6283 10.8333 14.8808Z"
                fill="#727272"
              />
            </svg>
            <span className="text-sm">Fixed price</span>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center border-[#696969]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 4.4775 15.5225 0 10 0ZM10.8333 10.8333H4.1625C3.70417 10.8333 3.33333 10.4625 3.33333 10.0042V9.995C3.33333 9.5375 3.70417 9.16667 4.1625 9.16667H9.16667V2.49583C9.16667 2.0375 9.5375 1.66667 9.99583 1.66667H10.005C10.4625 1.66667 10.8333 2.0375 10.8333 2.49583V10.8333Z"
                fill="#727272"
              />
            </svg>
            <span className="text-sm">Timed Auction</span>
          </div>
        </div>
        <MintItemTitle title="Price" required />
        <div className="flex mt-4">
          <select
            className="select profile-item outline-none block border-base-content !w-1/3"
            // onChange={(e) => setAccountType(e.target.value as AccountType)}
          >
            <option value="ethereum">Ethereum</option>
            <option value="solana">Solana</option>
          </select>
          <input
            type="text"
            className="input input-bordered border-base-content profile-item block outline-none !w-2/3 ml-2"
            // value={userName}
            // onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="flex mb-8">
          <select
            className="select profile-item outline-none border-base-content block !w-1/3"
            // onChange={(e) => setAccountType(e.target.value as AccountType)}
          >
            <option value="AUD">Australia Dollar</option>
            <option value="USD">US Dollar</option>
          </select>
          <input
            type="text"
            className="input input-bordered profile-item block border-base-content outline-none !w-2/3 ml-2"
            // value={userName}
            // onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <MintItemTitle title="Duration" required />
        <select
          className="select profile-item outline-none block mt-4 border-base-content !mb-8"
          // onChange={(e) => setAccountType(e.target.value as AccountType)}
        >
          <option value="1">1 month</option>
          <option value="2">2 months</option>
          <option value="3">3 months</option>
          <option value="4">4 months</option>
          <option value="5">5 months</option>
          <option value="6">6 months</option>
          <option value="7">7 months</option>
          <option value="8">8 months</option>
          <option value="9">9 months</option>
          <option value="10">10 months</option>
          <option value="11">11 months</option>
          <option value="12">12 months</option>
        </select>
        <MintItemTitle title="Charity donation" subTitle="A minimum of 1% of your minting fee/price for each NFT is a required charity donation." required />
        <select
          className="select profile-item outline-none border-base-content block mt-4"
          // onChange={(e) => setAccountType(e.target.value as AccountType)}
        >
          <option value="ethereum">Ethereum</option>
          <option value="solana">Solana</option>
        </select>
        <div className="flex">
          <input
            type="text"
            className="input input-bordered border-base-content profile-item block outline-none !w-2/3 mr-2"
            // value={userName}
            // onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="text"
            className="input input-bordered border-base-content profile-item block outline-none !w-1/3"
            // value={userName}
            // onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="flex justify-start mb-8">
          <label className="text-sm text-[#0075FF]">Default minimum 1%. Maximum 90%.</label>
        </div>
        <MintItemTitle title="Fees" required />
        <div className="max-w-[300px] mt-4 mb-8 text-black">
          <div className="flex w-full justify-between mb-2">
            <span className="text-sm">Service fees</span>
            <span className="text-sm">0%</span>
          </div>
          <div className="flex w-full justify-between mb-2">
            <span className="text-sm">Creator fees</span>
            <span className="text-sm">9%</span>
          </div>
          <div className="flex w-full justify-between mb-2">
            <span className="text-sm">Charity fees</span>
            <span className="text-sm">1%</span>
          </div>
          <div className="flex w-full justify-between">
            <span className="text-sm">Charity donation</span>
            <span className="text-sm">20%</span>
          </div>
        </div>

        <button
          className="btn bg-[#0075FF] text-white border-none h-[40px] min-h-0"
          // onClick={updateProfile}
        >
          COMPLETE LISTING
        </button>
      </div>
    </div>
  );
};
