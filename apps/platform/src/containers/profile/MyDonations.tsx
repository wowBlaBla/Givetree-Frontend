import { FC } from "react";

export const MyDonations: FC = () => {
  return (
    <div className="profile">
      <div className="p-8 max-w-layout-xl">
        <h1 className="font-bold text-black text-[24px] mb-2">My donations</h1>
        <div className="flex mt-4 mb-8">
          <div className="flex flex-col bg-white rounded-[20px] border border-[#717171] text-black w-[400px] h-[176px] px-8 py-6">
            <span className="text-xl font-bold mb-4">
              Total donations value (cumulative)
            </span>
            <span className="text-[40px] font-bold">$1000000</span>
          </div>
          <div className="flex flex-col bg-white rounded-[20px] border border-[#717171] text-black w-[400px] h-[176px] px-8 py-6 ml-4">
            <span className="text-xl font-bold mb-4">Total charities supported</span>
            <span className="text-[40px] font-bold">20</span>
          </div>
        </div>

        <div className="bg-white rounded-t-[20px] border border-[#717171] text-black">
          <div className="donation-item flex items-center">
            <span className="text-lg font-bold">Donations</span>
          </div>
          <div className="donation-item flex items-center justify-between">
            <span className="text-sm">Search</span>
            <span className="text-sm">Filter</span>
          </div>
          <div className="donation-item flex items-center">
            <span className="text-sm mr-6">#</span>
            <span className="text-sm mr-6">Crypto</span>
            <span className="text-sm mr-6">Amount</span>
            <span className="text-sm mr-6">Currency</span>
            <span className="text-sm mr-6">Amount</span>
            <span className="text-sm mr-6">Date</span>
            <span className="text-sm mr-6">Wallet</span>
            <span className="text-sm">Incoming/outgoing</span>
          </div>
          <div className="donation-item"></div>
          <div className="donation-item"></div>
          <div className="donation-item"></div>
          <div className="donation-item"></div>
          <div className="donation-item"></div>
          <div className="donation-item"></div>
          <div className="donation-item"></div>
          <div className="donation-item"></div>
        </div>
      </div>
    </div>
  );
};
