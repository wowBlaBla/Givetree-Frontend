import { LockClosedIcon } from "@heroicons/react/outline";
import { FC } from "react";
import { PrimaryButton } from "../../../components/PrimaryCta";

export const Settings:FC = () => {
    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold py-7 dark:text-white">Settings</h2>
            <div className="flex flex-col gap-8 w-[468px]">
                <div className="input-grop">
                    <label>Email</label>
                    <input
                        type="email"
                        className="mt-1 block w-full rounded-md border border-black shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4"
                    />
                </div>
                <div className="input-grop">
                    <label>Password</label>
                    <div className="relative text-gray-600 focus-within:text-gray-400">
                        <input
                            type="password"
                            className="mt-1 block w-full rounded-md border border-black shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-4 pr-10"
                            />
                        <span className="absolute inset-y-2 right-0 flex items-center pr-2">
                            <LockClosedIcon className="w-8 h-8"/>
                        </span>
                    </div>
                </div>

            </div>
            <PrimaryButton className="mt-7 w-20 h-10">Save</PrimaryButton>
        </div>
    )
}