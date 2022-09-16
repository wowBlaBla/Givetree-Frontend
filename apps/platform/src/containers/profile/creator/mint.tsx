import { FC } from "react";
import { PrimaryButton } from "../../../components/PrimaryCta";

export const Mint:FC = () => {
    return (
        <div className="grid w-[468px] p-8">
            <h2 className="text-2xl font-bold py-7 ">Create NFT</h2>
            <div className="flex flex-col gap-10 items-center w-full">
                <div className="grid mt-6 gap-8 w-full">
                    <div className="input-grop">
                        <label className="">Title</label>
                        <input
                            type="text"
                            className="input input-bordered mt-1 block w-full rounded-md shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4"
                        />
                    </div>
                    <div className="input-grop">
                        <label className="">Description</label>
                        <textarea
                            className="textarea textarea-bordered mt-1 block w-full rounded-md shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4"
                            rows={6}
                        />
                    </div>
                    <div className="input-grop">
                        <label className="">How many items in collection?</label>
                        <input
                            type="number"
                            className="input input-bordered mt-1 block w-full rounded-md shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4"
                        />
                    </div>
                    <div className="input-grop">
                        <label className="">Which blockchain would you like to use?</label>
                        <input
                            type="text"
                            className="input input-bordered mt-1 block w-full rounded-md shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4"
                        />
                    </div>
                    <div className="input-grop">
                        <label className="block">What price would you like to set per item?</label>
                        <div className="inline-block mt-1 border border-base-content border-opacity-25 bg-base-100">
                            <div className="inline-block p-3 w-24 text-center">2 SOL</div>
                            <div className="inline-block p-3 w-24 text-center border-x border-base-content border-opacity-25">AUD</div>
                            <div className="inline-block p-3 w-24 text-center">30</div>
                        </div>
                    </div>
                    <div className="input-grop">
                        <label className="">Would like to have a whitelist event? What time / date?</label>
                        <p className="my-3">
                            <span className="font-bold">Yes</span>
                            <span className="mx-2">or</span>
                            <span>no</span>
                        </p>
                        <div className="flex gap-8">
                            <input
                                type="date"
                                className="input input-bordered mt-1 block w-full rounded-md shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4"
                            />
                            <input
                                type="time"
                                className="input input-bordered mt-1 block w-full rounded-md shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4"
                            />
                        </div>
                    </div>
                    <div className="input-grop">
                        <label className="">What time/date would you like the mint to occur?</label>
                        <div className="flex gap-8">
                            <input
                                type="date"
                                className="input input-bordered mt-1 block w-full rounded-md shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4"
                            />
                            <input
                                type="time"
                                className="input input-bordered mt-1 block w-full rounded-md shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4"
                            />
                        </div>
                    </div>
                    <div className="charity-royalty-list">
                        <label>Charity & Royalties</label>
                        <div className="flex flex-col">
                            <div className="p-3 border border-base-content border-opacity-25 bg-base-100 rounded-t-md">Select charity:</div>
                            <div className="p-3 border-x border-base-content border-opacity-25 bg-base-100">Select %:</div>
                            <div className="p-3 border-x border-t border-base-content border-opacity-25 bg-base-100">GiveTree fees:</div>
                            <div className="p-3 border border-base-content border-opacity-25 bg-base-100 rounded-b-md">You will receive: </div>
                        </div>
                    </div>
                    <PrimaryButton>Submit for review & approval</PrimaryButton>
                </div>
            </div>
        </div>
    )
}