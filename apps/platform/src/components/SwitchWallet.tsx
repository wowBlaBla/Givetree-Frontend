import { FC } from "react";
import { useWallet } from "../context/WalletContext";

interface Props {
    title: string;
}

export const SwitchWallet:FC<Props> = ({ title }) => {
    const { address, connectWallet, reset } = useWallet();

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
                
                {
                    address ? (
                        <button
                            className="btn btn-error btn-connect ml-2"
                            onClick={reset}
                        >Disconnect</button>
                    ) : (
                        <button
                            className="btn btn-primary btn-connect ml-2"
                            onClick={() => connectWallet("metamask", "switch")}
                        >Connect</button>
                    )
                }
            </div>
        </>
    )
}