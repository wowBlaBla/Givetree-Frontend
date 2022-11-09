import { FC } from "react";

export const WelcomePage: FC = () => {
  return (
    <div className="p-8">
      <h1 className="font-bold text-lg text-black">Welcome</h1>
      <div className="rounded-2xl-1 border border-[#696969] bg-white px-8 py-5 max-w-[450px] mt-4">
        <span className="text-black">
          GiveTree is an NFT Marketplace that empowers you to create NFT fundraisers &
          make direct donations of cryptocurrency to the charities and causes you love.
          With GiveTree, you can make the world a better place. One JPEG at a time.
        </span>
      </div>
    </div>
  );
};
