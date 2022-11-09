import { FC } from "react";

export const FAQsPage: FC = () => {
  return (
    <div className="p-8">
      <h1 className="font-bold text-lg text-black">FAQs</h1>
      <div className="rounded-2xl-1 border border-[#696969] bg-white px-8 py-5 max-w-[450px] mt-4">
        <span className="text-black">Question 1</span>
      </div>
      <div className="rounded-2xl-1 border border-[#696969] bg-white px-8 py-5 max-w-[450px] mt-4">
        <span className="text-black">Question 2</span>
      </div>
      <div className="rounded-2xl-1 border border-[#696969] bg-white px-8 py-5 max-w-[450px] mt-4">
        <span className="text-black">Question 3</span>
      </div>
    </div>
  );
};
