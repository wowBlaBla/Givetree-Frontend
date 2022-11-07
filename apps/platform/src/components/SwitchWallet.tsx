import { FC } from "react";
import { useWallet } from "../context/WalletContext";

interface Props {
    title: string;
}

export const SwitchWallet:FC<Props> = ({ title }) => {
    const { address, connectWallet } = useWallet();
    return (
        <>
            <span>{title}</span>
            <div className="flex my-6">
                <input
                    readOnly
                    value={address || ""}
                    type="text"
                    className="input input-bordered block w-full outline-none bg-white border-[#5B626C] max-w-[400px]"
                />
                <button
                    className="btn btn-primary btn-connect ml-2"
                    onClick={() => connectWallet("metamask")}
                >Connect</button>
                {
                    address ? (
                        <button
                            className="btn btn-error btn-connect ml-2"
                            onClick={() => connectWallet("metamask")}
                        >Disconnect</button>
                    ) : ""
                }
            </div>
        </>
    )
}