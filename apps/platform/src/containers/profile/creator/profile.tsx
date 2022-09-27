import axios from "axios";
import { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";
import cx from "classnames";
import { LoadingIcon } from "../../../components/icons/LoadingIcon";
import avatar from "../../../temp/images/campaigns/mulgakongz-collection.png";
import { PencilIcon } from "@heroicons/react/solid";
import { updateAddress, updateAuthed } from "../../../store/actions/auth.action";
import { useDispatch } from "react-redux";
import { useLocation } from "wouter";

export const Profile:FC = () => {
    
    const dispatch = useDispatch();
    const [, setLocation] = useLocation();
    const [accountType, setAccountType] = useState<string>('standard');
    const [userName, setUserName] = useState<string>('');
    const [bio, setBio] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(false);
    const [openChange, setOpenChange] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== undefined) {
            if (typeof localStorage?.sessions === "object") {
                const session = JSON.parse(localStorage?.sessions);
                if (session.user) {
                    const _user = session.user;
                    setAccountType(_user?.type);
                    setUserName(_user?.userName);
                    setBio(_user?.bio);
                    setEmail(_user?.email);
                }
            }
        }
    }, [])

    const updateProfile = async() => {
        try {
            if (typeof localStorage?.sessions === "object") {
                const token = JSON.parse(localStorage?.sessions);
                const data = {
                    id: token.user.id,
                    userName,
                    bio,
                    email
                };
                
                setLoading(true);
                await axios.put(
                    `${process.env.BACKEND}/api/users/profile`,
                    data,
                    {
                        headers: {
                            'Authorization': `Bearer ${token.accessToken}`
                        }
                    }
                ).then(res => {
                    let session = JSON.parse(localStorage?.sessions);
                    session.user = res.data;
                    localStorage.setItem('sessions', JSON.stringify(session));
                    toast.success("Updated profile successfully!");
                }).catch(err => {
                    toast.success("Faild updating profile");
                })
            }
            else {
                dispatch(updateAddress(""));
                dispatch(updateAuthed(false));
                setLocation('/')
            }
        } catch(err) {

        }
        setLoading(false);
    }

    return (
        <div className="grid p-8">
            <h2 className="text-2xl font-bold py-7 ">Profile details</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                <div>
                    <div className="profile-type-details flex gap-3 mt-3">
                        <div className="border border-base-content border-opacity-25 bg-base-100 capitalize px-3 py-1">{accountType}</div>
                        <div className="border border-base-content border-opacity-25 bg-base-100 px-3 py-1">Profile public</div>
                    </div>
                    <div className="grid mt-6 gap-3">
                        <div className="input-grop">
                            <label className="">Username</label>
                            <input
                                type="text"
                                className="mt-1 block w-full input input-bordered outline-none focus:border-indigo-500 sm:text-sm h-12 px-4"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>
                        <div className="input-grop">
                            <label className="">Bio</label>
                            <textarea
                                className="textarea textarea-bordered mt-1 block w-full outline-none focus:border-indigo-500 sm:text-sm p-4"
                                rows={6}
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>
                        <div className="input-grop">
                            <label className="">Email</label>
                            <input
                                type="email"
                                className="mt-1 block w-full input input-bordered outline-none focus:border-indigo-500 sm:text-sm h-12 px-4"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>
                        <div className="input-grop">
                            <label className="">Website & Social media links</label>
                            <input
                                type="text"
                                className="mt-1 block w-full input input-bordered outline-none focus:border-indigo-500 sm:text-sm h-12 px-4"
                                disabled={isLoading}
                            />
                            <input
                                type="text"
                                className="mt-1 block w-full input input-bordered outline-none focus:border-indigo-500 sm:text-sm h-12 px-4 mt-4"
                                disabled={isLoading}
                            />
                        </div>
                        <div className="input-grop">
                            <label className="">Wallet address</label>
                            <input
                                type="text"
                                className="mt-1 block w-full input input-bordered outline-none focus:border-indigo-500 sm:text-sm h-12 px-4"
                                disabled={isLoading}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 md:mt-20">
                    <div className="photo-group flex flex-col gap-y-3">
                        <label className="">Profile image</label>
                        <div
                            className="relative bg-base-100 flex w-37.5 h-37.5 rounded-full p-3 cursor-pointer"
                            onMouseEnter={() => isLoading ? null : setOpenChange(true)}
                            onMouseLeave={() => isLoading ? null : setOpenChange(false)}
                        >
                            <img
                                className="object-cover rounded-full"
                                src={avatar.src}
                                alt="avatar"
                            />
                            <div
                                className={
                                    cx("absolute w-32 h-32 bg-base-100 bg-opacity-50 items-center justify-center rounded-full left-[11px] top-[11px] flex",
                                    {
                                        "z-10": openChange,
                                        "-z-10": !openChange
                                    }
                                )}
                            >
                                <PencilIcon className="w-7 h-7 text-white"/>
                            </div>
                        </div>
                    </div>
                    <div className="photo-group flex flex-col gap-y-3">
                        <label className="">Profile banner</label>
                        <div
                            className="object-cover w-37.5 h-37.5 rounded-lg border border-base-content border-opacity-25 bg-base-100"
                        />
                    </div>
                </div>
                <div className="button-group">
                    <button
                        className={
                            cx("px-6 py-2 text-white bg-cyan-500 rounded-md flex gap-1 items-center",
                                {
                                    "hover:bg-cyan-700" : !isLoading,
                                    "opacity-75": isLoading
                                }
                            )
                        }
                        onClick={updateProfile}
                        disabled={isLoading}
                    >
                        {
                            isLoading ?
                            <>
                            <span>Saving. . .</span>
                            <LoadingIcon className="w-5 h-5"/>
                            </>
                            : "Save"
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}