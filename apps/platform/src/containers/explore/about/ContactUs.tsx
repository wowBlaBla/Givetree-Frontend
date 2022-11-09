import { FC } from "react";

export const ContactUsPage: FC = () => {
  return (
    <div className="p-8">
      <h1 className="font-bold text-lg text-black mb-2">Contact us</h1>
      <span className="text-black">The best way to reach us is through Discord. </span>
      <div className="rounded-2xl-1 border border-[#696969] bg-white px-8 py-5 max-w-[450px] mt-4">
        <span className="text-black">Discord</span>
      </div>
    </div>
  );
};
