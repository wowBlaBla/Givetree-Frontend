import { FC } from "react";
import avatar from "../../../temp/images/campaigns/mulgakongz-collection.png";

export const Profile:FC = () => {
    return (
        <div className="grid p-8">
            <h2 className="text-2xl font-bold py-7">Profile details</h2>
            <div className="flex gap-10">
                <div>
                    <div className="profile-type-details flex gap-3 mt-3">
                        <div className="border border-black px-3 py-1">Account type</div>
                        <div className="border border-black px-3 py-1">Profile public</div>
                    </div>
                    <div className="grid mt-6 gap-3">
                        <div className="input-grop">
                            <label>Username</label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border border-black shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4"
                            />
                        </div>
                        <div className="input-grop">
                            <label>Bio</label>
                            <textarea
                                className="mt-1 block w-full rounded-md border border-black shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4"
                                rows={6}
                            />
                        </div>
                        <div className="input-grop">
                            <label>Email</label>
                            <input
                                type="email"
                                className="mt-1 block w-full rounded-md border border-black shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4"
                            />
                        </div>
                        <div className="input-grop">
                            <label>DGR status</label>
                            <div className="flex gap-8">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="dgr-status"
                                        className="cursor-pointer mt-1 w-8 h-8 border border-black"
                                    />
                                    <label>Yes</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="dgr-status"
                                        className="cursor-pointer mt-1 w-8 h-8 border border-black"
                                    />
                                    <label>No</label>
                                </div>
                            </div>
                        </div>
                        <div className="input-grop">
                            <label>Location</label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border border-black shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4"
                            />
                        </div>
                        <div className="input-grop">
                            <label>Require donor information</label>
                            <div className="flex gap-8">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="donor-information"
                                        className="cursor-pointer mt-1 w-8 h-8 border border-black"
                                    />
                                    <label>Yes</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="donor-information"
                                        className="cursor-pointer mt-1 w-8 h-8 border border-black"
                                    />
                                    <label>No</label>
                                </div>
                            </div>
                        </div>
                        <div className="input-grop">
                            <label>Website & Social media links</label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border border-black shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4"
                            />
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border border-black shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4 mt-4"
                            />
                        </div>
                        <div className="input-grop">
                            <label>Wallet address</label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border border-black shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4"
                            />
                        </div>
                        <div className="input-grop">
                            <label>Causes you help with</label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border border-black shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4"
                            />
                        </div>
                    </div>
                    <div className="button-group mt-4">
                        <button className="px-6 py-2 bg-cyan-300 rounded-md hover:bg-cyan-500">Save</button>
                    </div>
                </div>
                <div className="flex flex-col gap-4 mt-20">
                    <div className="photo-group flex flex-col gap-3">
                        <label>Profile image</label>
                        <img
                            className="object-cover w-37-1/2 h-37-1/2 mx-2 rounded-full"
                            src={avatar.src}
                            alt="avatar"
                        />
                    </div>
                    <div className="photo-group flex flex-col gap-3">
                        <label>Profile banner</label>
                        <div
                            className="object-cover w-37-1/2 h-37-1/2 mx-2 rounded-lg border border-black"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}