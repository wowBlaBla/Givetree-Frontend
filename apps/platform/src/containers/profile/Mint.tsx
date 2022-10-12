import React, { FC } from "react";
import { AddIcon } from "../../components/icons/AddIcon";
import { ImageDefaultIcon } from "../../components/icons/ImageDefaultIcon";
import { InformationIcon } from "../../components/icons/InformationIcon";
import { RequiredIcon } from "../../components/icons/RequiredIcon";

export const Mint: FC = () => {
  const [viewType, setViewType] = React.useState<"edit" | "preview">("edit");
  const [nftImage, setNftImage] = React.useState<File>();
  const [nftImageUrl, setImageUrl] = React.useState<string>("");

  const nftImageRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="profile">
      <div className="profile-save-section px-8">
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
            // onClick={updateProfile}
          >
            Save
          </button>
        </div>
      </div>
      <div className="p-8 max-w-[700px] text-white">
        <h1 className="font-bold text-white text-xl mb-2">Create an NFT</h1>
        <div className="flex items-center mb-[48px]">
          <RequiredIcon />
          <span className="text-sm ml-2">Required fields</span>
        </div>
        <div className="flex flex-col mb-[48px]">
          <label className="mb-1 text-lg text-white">
            Upload an Image, Video, Audio, or 3D model
          </label>
          <span className="text-sm">
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF.
            Max size: 100 MB
          </span>
          <div className="profile-box border-dashed border-2 w-[300px] h-[300px] flex justify-center items-center mt-4 !bg-[#303236]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {nftImageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className="object-cover rounded-full w-[100px] h-[100px]"
                src={nftImageUrl}
                alt="avatar"
              />
            ) : (
              <ImageDefaultIcon />
            )}
            <input
              ref={nftImageRef}
              type="file"
              hidden
              // onChange={handleAvatarFileSelect}
            />
          </div>
        </div>
        <div className="flex items-center mb-1">
          <label className="text-lg text-white mr-2">Name</label>
          <RequiredIcon />
        </div>
        <input
          type="text"
          className="input input-bordered profile-item block w-full outline-none"
          // value={userName}
          // onChange={(e) => setUserName(e.target.value)}
        />
        <div className="flex flex-col mb-2">
          <label className="text-lg text-white mb-1">Description</label>
          <label className="text-sm text-white mb-1">
            Please provide a brief description of your item. 0 of 1000 characters used.
          </label>
        </div>
        <textarea
          className="textarea textarea-bordered profile-item block w-full outline-none focus:border-indigo-500 sm:text-sm p-4 h-[160px]"
          rows={4}
          // value={bio}
          // onChange={(e) => setBio(e.target.value)}
          // disabled={isLoading}
        />
        <div className="flex mb-2 items-center">
          <div className="flex flex-col mr-4">
            <label className="text-lg text-white mb-1">Collection</label>
            <label className="text-sm text-white mb-1">
              This is the collection where your item will appear.
            </label>
          </div>
          <InformationIcon />
        </div>
        <input
          type="text"
          className="input input-bordered profile-item block w-full outline-none"
          // value={userName}
          // onChange={(e) => setUserName(e.target.value)}
        />
        <div className="flex items-center justify-between mt-12 border-b-[#8C8C8C] border-b-2 pb-8">
          <div className="flex max-w-[75%]">
            <div className="w-[24px] h-[24px] mt-2">
              <svg
                width="23"
                height="20"
                viewBox="0 0 23 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2C0 2.53043 0.210714 3.03914 0.585786 3.41421C0.960859 3.78929 1.46957 4 2 4C2.53043 4 3.03914 3.78929 3.41421 3.41421C3.78929 3.03914 4 2.53043 4 2C4 1.46957 3.78929 0.960859 3.41421 0.585786C3.03914 0.210714 2.53043 0 2 0ZM8 1C7.86749 0.998126 7.73593 1.02261 7.61296 1.07202C7.48999 1.12143 7.37807 1.1948 7.2837 1.28784C7.18933 1.38088 7.11439 1.49176 7.06324 1.61401C7.0121 1.73627 6.98576 1.86747 6.98576 2C6.98576 2.13253 7.0121 2.26373 7.06324 2.38599C7.11439 2.50824 7.18933 2.61912 7.2837 2.71216C7.37807 2.8052 7.48999 2.87857 7.61296 2.92798C7.73593 2.97739 7.86749 3.00187 8 3H21C21.1325 3.00187 21.2641 2.97739 21.387 2.92798C21.51 2.87857 21.6219 2.8052 21.7163 2.71216C21.8107 2.61912 21.8856 2.50824 21.9368 2.38599C21.9879 2.26373 22.0142 2.13253 22.0142 2C22.0142 1.86747 21.9879 1.73627 21.9368 1.61401C21.8856 1.49176 21.8107 1.38088 21.7163 1.28784C21.6219 1.1948 21.51 1.12143 21.387 1.07202C21.2641 1.02261 21.1325 0.998126 21 1H8ZM2 8C1.46957 8 0.960859 8.21071 0.585786 8.58579C0.210714 8.96086 0 9.46957 0 10C0 10.5304 0.210714 11.0391 0.585786 11.4142C0.960859 11.7893 1.46957 12 2 12C2.53043 12 3.03914 11.7893 3.41421 11.4142C3.78929 11.0391 4 10.5304 4 10C4 9.46957 3.78929 8.96086 3.41421 8.58579C3.03914 8.21071 2.53043 8 2 8ZM8 9C7.86749 8.99813 7.73593 9.02261 7.61296 9.07202C7.48999 9.12143 7.37807 9.1948 7.2837 9.28784C7.18933 9.38088 7.11439 9.49176 7.06324 9.61401C7.0121 9.73627 6.98576 9.86747 6.98576 10C6.98576 10.1325 7.0121 10.2637 7.06324 10.386C7.11439 10.5082 7.18933 10.6191 7.2837 10.7122C7.37807 10.8052 7.48999 10.8786 7.61296 10.928C7.73593 10.9774 7.86749 11.0019 8 11H21C21.1325 11.0019 21.2641 10.9774 21.387 10.928C21.51 10.8786 21.6219 10.8052 21.7163 10.7122C21.8107 10.6191 21.8856 10.5082 21.9368 10.386C21.9879 10.2637 22.0142 10.1325 22.0142 10C22.0142 9.86747 21.9879 9.73627 21.9368 9.61401C21.8856 9.49176 21.8107 9.38088 21.7163 9.28784C21.6219 9.1948 21.51 9.12143 21.387 9.07202C21.2641 9.02261 21.1325 8.99813 21 9H8ZM2 16C1.46957 16 0.960859 16.2107 0.585786 16.5858C0.210714 16.9609 0 17.4696 0 18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20C2.53043 20 3.03914 19.7893 3.41421 19.4142C3.78929 19.0391 4 18.5304 4 18C4 17.4696 3.78929 16.9609 3.41421 16.5858C3.03914 16.2107 2.53043 16 2 16ZM8 17C7.86749 16.9981 7.73593 17.0226 7.61296 17.072C7.48999 17.1214 7.37807 17.1948 7.2837 17.2878C7.18933 17.3809 7.11439 17.4918 7.06324 17.614C7.0121 17.7363 6.98576 17.8675 6.98576 18C6.98576 18.1325 7.0121 18.2637 7.06324 18.386C7.11439 18.5082 7.18933 18.6191 7.2837 18.7122C7.37807 18.8052 7.48999 18.8786 7.61296 18.928C7.73593 18.9774 7.86749 19.0019 8 19H21C21.1325 19.0019 21.2641 18.9774 21.387 18.928C21.51 18.8786 21.6219 18.8052 21.7163 18.7122C21.8107 18.6191 21.8856 18.5082 21.9368 18.386C21.9879 18.2637 22.0142 18.1325 22.0142 18C22.0142 17.8675 21.9879 17.7363 21.9368 17.614C21.8856 17.4918 21.8107 17.3809 21.7163 17.2878C21.6219 17.1948 21.51 17.1214 21.387 17.072C21.2641 17.0226 21.1325 16.9981 21 17H8Z"
                  fill="#F3F3F3"
                />
              </svg>
            </div>

            <div className="flex flex-col ml-8">
              <label className="text-lg text-white mb-1">Properties</label>
              <label className="text-sm text-white mb-1">
                Textual traits that show up as rectangles
              </label>
            </div>
          </div>
          <div className="flex justify-center items-center w-[100px] h-[100px] border border-white/40 rounded-lg cursor-pointer bg-deep-dark">
            <AddIcon />
          </div>
        </div>
        <div className="flex items-center justify-between mt-8 border-b-[#8C8C8C] border-b-2 pb-8">
          <div className="flex max-w-[75%]">
            <div className="w-[24px] h-[24px] mt-2">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7651 2.43403L18.6401 10.946L27.6231 11.05C28.3961 11.059 28.7161 12.044 28.0961 12.505L20.8891 17.869L23.5661 26.445C23.7961 27.183 22.9591 27.791 22.3281 27.344L15.0001 22.147L7.67106 27.343C7.04106 27.79 6.20306 27.181 6.43306 26.444L9.11006 17.868L1.90306 12.504C1.28306 12.043 1.60306 11.058 2.37606 11.049L11.3591 10.945L14.2341 2.43303C14.4821 1.70103 15.5181 1.70103 15.7651 2.43403Z"
                  fill="#F3F3F3"
                />
              </svg>
            </div>
            <div className="flex flex-col ml-8">
              <label className="text-lg text-white mb-1">Levels </label>
              <label className="text-sm text-white mb-1">
                Numerical traits that show up as rectangles
              </label>
            </div>
          </div>
          <div className="flex justify-center items-center w-[100px] h-[100px] border border-white/40 rounded-lg cursor-pointer bg-deep-dark">
            <AddIcon />
          </div>
        </div>
        <div className="flex items-center justify-between mt-8 border-b-[#8C8C8C] border-b-2 pb-8">
          <div className="flex max-w-[75%]">
            <div className="w-[24px] h-[24px] mt-2">
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 0C18.448 0 18 0.448 18 1V22H24V1C24 0.448 23.552 0 23 0H19ZM1 4C0.448 4 0 4.448 0 5V22H6V5C6 4.448 5.552 4 5 4H1ZM10 8C9.448 8 9 8.448 9 9V22H15V9C15 8.448 14.552 8 14 8H10Z"
                  fill="#F3F3F3"
                />
              </svg>
            </div>
            <div className="flex flex-col ml-8">
              <label className="text-lg text-white mb-1">Stats</label>
              <label className="text-sm text-white mb-1">
                Numerical traits that show up as rectangles
              </label>
            </div>
          </div>
          <div className="flex justify-center items-center w-[100px] h-[100px] border border-white/40 rounded-lg cursor-pointer bg-deep-dark">
            <AddIcon />
          </div>
        </div>
        <div className="flex items-center justify-between mt-8 border-b-[#8C8C8C] border-b-2 pb-8">
          <div className="flex max-w-[75%]">
            <div className="w-[24px] h-[24px] mt-2">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 2C11.1457 2 8 5.14567 8 9V11H6C4.895 11 4 11.895 4 13V25C4 26.105 4.895 27 6 27H24C25.105 27 26 26.105 26 25V13C26 11.895 25.105 11 24 11H10V9C10 6.22633 12.2263 4 15 4C17.1843 4 19.0229 5.39467 19.709 7.33398C19.7505 7.46069 19.817 7.57782 19.9044 7.67847C19.9919 7.77912 20.0986 7.86126 20.2183 7.92007C20.3379 7.97887 20.4682 8.01315 20.6013 8.02089C20.7344 8.02863 20.8677 8.00967 20.9934 7.96513C21.1191 7.92059 21.2346 7.85136 21.3331 7.76152C21.4317 7.67169 21.5112 7.56305 21.5672 7.44201C21.6231 7.32097 21.6543 7.18996 21.6588 7.05669C21.6634 6.92343 21.6413 6.7906 21.5938 6.66602C20.6319 3.94733 18.0377 2 15 2Z"
                  fill="#F3F3F3"
                />
              </svg>
            </div>
            <div className="flex flex-col ml-8">
              <label className="text-lg text-white mb-1">Unlockable Content</label>
              <label className="text-sm text-white mb-1">
                Include unlockable content that can only be revealed by the owner of the
                item
              </label>
            </div>
          </div>
          <div className="flex justify-end items-center w-[100px] h-[100px]">
            <input type="checkbox" className="toggle toggle-md" checked />
          </div>
        </div>
        <div className="flex items-center justify-between mt-8 border-b-[#8C8C8C] border-b-2 pb-8">
          <div className="flex max-w-[75%]">
            <div className="w-[24px] h-[24px] mt-2">
              <svg
                width="30"
                height="27"
                viewBox="0 0 30 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0C14.0405 0 13.2185 0.584681 12.8703 1.41752L0.347055 23.0161V23.0183C0.121041 23.3824 0.000867875 23.8022 0 24.2308C0 24.8428 0.243131 25.4298 0.675907 25.8626C1.10868 26.2953 1.69565 26.5385 2.30769 26.5385C2.36184 26.5381 2.41596 26.5359 2.46995 26.5317L2.47446 26.5385H15H27.5255L27.53 26.5294C27.584 26.5344 27.6381 26.5374 27.6923 26.5385C28.3043 26.5385 28.8913 26.2953 29.3241 25.8626C29.7569 25.4298 30 24.8428 30 24.2308C29.9995 23.8015 29.8794 23.3808 29.6529 23.0161L29.6349 22.9845C29.6342 22.9838 29.6334 22.983 29.6327 22.9823L17.1297 1.41752C16.7815 0.584681 15.9595 0 15 0ZM13.6005 9.64543H16.3995L16.1674 17.1139H13.8326L13.6005 9.64543ZM15.0045 19.3968C15.953 19.3968 16.5212 19.9071 16.5212 20.7782C16.5212 21.6332 15.953 22.1417 15.0045 22.1417C14.0491 22.1417 13.4766 21.6332 13.4766 20.7782C13.4766 19.9071 14.048 19.3968 15.0045 19.3968Z"
                  fill="#F3F3F3"
                />
              </svg>
            </div>
            <div className="flex flex-col ml-8">
              <label className="text-lg text-white mb-1">
                Explicit & Sensitive Content
              </label>
              <label className="text-sm text-white mb-1">
                Set this item as explicit and sensitive content
              </label>
            </div>
          </div>
          <div className="flex justify-end items-center w-[100px] h-[100px]">
            <input type="checkbox" className="toggle toggle-md" checked />
          </div>
        </div>
        <div className="flex flex-col mb-2 mt-8">
          <div className="flex items-center">
            <label className="text-lg text-white mr-2">Supply</label>
            <RequiredIcon />
          </div>
          <label className="text-sm text-white">
            The number of items that can be minted. No gas cost to you!
          </label>
        </div>
        <input
          type="text"
          className="input input-bordered profile-item block w-full outline-none"
          // value={userName}
          // onChange={(e) => setUserName(e.target.value)}
        />
        <div className="flex flex-col mb-2 mt-8">
          <div className="flex items-center">
            <label className="text-lg text-white mr-2">Blockchain</label>
          </div>
        </div>
        <select
          className="select profile-item outline-none block mt-1"
          // onChange={(e) => setAccountType(e.target.value as AccountType)}
        >
          <option value="ethereum">Ethereum</option>
          <option value="solana">Solana</option>
        </select>
        <div className="flex flex-col mb-2 mt-8">
          <div className="flex items-center">
            <label className="text-lg text-white mr-2">Freeze metadata</label>
            <RequiredIcon />
          </div>
          <label className="text-sm text-white">
            Freezing your metadata will allow you to permanently lock and store all of
            this item’s content in decentralised file storage.
          </label>
        </div>
        <input
          type="text"
          className="input input-bordered profile-item block w-full outline-none"
          // value={userName}
          // onChange={(e) => setUserName(e.target.value)}
        />
        <div className="flex flex-col mb-2 mt-8">
          <div className="flex items-center">
            <label className="text-lg text-white mr-2">Charity donation</label>
            <RequiredIcon />
          </div>
          <label className="text-sm text-white">
            A minimum of 1% of your minting fee/price for each NFT is a required charity
            donation.
          </label>
        </div>
        <select
          className="select profile-item outline-none block mt-1"
          // onChange={(e) => setAccountType(e.target.value as AccountType)}
        >
          <option value="ethereum">Ethereum</option>
          <option value="solana">Solana</option>
        </select>
        <div className="flex">
          <input
            type="text"
            className="input input-bordered profile-item block outline-none !w-2/3 mr-2"
            // value={userName}
            // onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="text"
            className="input input-bordered profile-item block outline-none !w-1/3"
            // value={userName}
            // onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <label className="text-lg text-white mr-2">Total 1%</label>
        </div>
        <button
          className="btn bg-[#0075FF] text-white h-[40px] min-h-0"
          // onClick={updateProfile}
        >
          Create
        </button>
      </div>
    </div>
  );
};
