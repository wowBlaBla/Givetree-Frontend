import { FC } from "react";
import bgImg from "../../assets/images/welcome.png";

export const Welcome: FC = () => {
  return (
    <div
      className={`p-8 flex-1`}
      style={{
        background: `url(${bgImg.src})`,
      }}
    >
      <div className="about-box text-white">
        <span className="text-[30px] font-bold">Welcome</span>
        <div className="divider after:bg-white before:bg-white" />
        <span className="text-[24px]">
          GiveTree is an NFT Marketplace that empowers you to create NFT fundraisers &
          make direct donations of cryptocurrency to the charities and causes you love.
          With GiveTree, you can make the world a better place. One JPEG at a time.
        </span>
      </div>
    </div>
  );
};
