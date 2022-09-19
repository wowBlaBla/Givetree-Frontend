import { FC } from "react";
import avatar from "../../../temp/images/campaigns/mulgakongz-collection.png";

export const Profile:FC = () => {
    return (
        <div className="grid p-8">
            <h2 className="text-2xl font-bold py-7 ">Profile details</h2>
            <div className="flex gap-10">
                <div>
                    <div className="profile-type-details flex gap-3 mt-3">
                        <div className="border border-base-content border-opacity-25 bg-base-100 px-3 py-1">Account type</div>
                        <div className="border border-base-content border-opacity-25 bg-base-100 px-3 py-1">Profile public</div>
                    </div>
                    <div className="grid mt-6 gap-3">
                        <div className="input-grop">
                            <label className="">Username</label>
                            <input
                                type="text"
                                className="mt-1 block w-full input input-bordered outline-none focus:border-indigo-500 sm:text-sm h-12 px-4"
                            />
                        </div>
                        <div className="input-grop">
                            <label className="">Bio</label>
                            <textarea
                                className="textarea textarea-bordered mt-1 block w-full outline-none focus:border-indigo-500 sm:text-sm p-4"
                                rows={6}
                            />
                        </div>
                        <div className="input-grop">
                            <label className="">Email</label>
                            <input
                                type="email"
                                className="mt-1 block w-full input input-bordered outline-none focus:border-indigo-500 sm:text-sm h-12 px-4"
                            />
                        </div>
                        <div className="input-grop">
                            <label className="">Website & Social media links</label>
                            <input
                                type="text"
                                className="mt-1 block w-full input input-bordered outline-none focus:border-indigo-500 sm:text-sm h-12 px-4"
                            />
                            <input
                                type="text"
                                className="mt-1 block w-full input input-bordered outline-none focus:border-indigo-500 sm:text-sm h-12 px-4 mt-4"
                            />
                        </div>
                        <div className="input-grop">
                            <label className="">Wallet address</label>
                            <input
                                type="text"
                                className="mt-1 block w-full input input-bordered outline-none focus:border-indigo-500 sm:text-sm h-12 px-4"
                            />
                        </div>
                    </div>
                    <div className="button-group mt-4">
                        <button className="px-6 py-2 text-white bg-cyan-500 rounded-md hover:bg-cyan-700">Save</button>
                    </div>
                </div>
                <div className="flex flex-col gap-4 mt-20">
                    <div className="photo-group flex flex-col gap-3">
                        <label className="">Profile image</label>
                        <img
                            className="object-cover w-37.5 h-37.5 mx-2 rounded-full"
                            src={avatar.src}
                            alt="avatar"
                        />
                    </div>
                    <div className="photo-group flex flex-col gap-3">
                        <label className="">Profile banner</label>
                        <div
                            className="object-cover w-37.5 h-37.5 mx-2 rounded-lg border border-base-content border-opacity-25 bg-base-100"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}