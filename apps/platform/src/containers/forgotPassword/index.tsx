import { GiveTreeLogo } from "../../components/GiveTreeLogo"

export const ForgotPassword = () => {
    return (
        <div className="w-full auth-wallet">
            <div className="flex flex-col items-center max-w-[400px] mx-auto my-24 border border-black bg-white rounded-2xl-1 px-6 py-6 relative">
                <div className="flex items-center mb-4">
                    <GiveTreeLogo className="w-[60px]" />
                    <span className="text-[50px] font-bold text-black ml-2">GiveTree</span>
                </div>
                <span className="text-[#646464] font-bold text-md text-center mb-6">
                    Enter new password
                </span>
                <div className="flex flex-col w-full text-black">
                    <div className="input-form-group flex flex-col items-start mb-4">
                    <label className="font-bold mb-2">
                        New Password <b className="text-[#FF0000]">*</b>
                    </label>
                    <input
                        type="text"
                        className={`outline-none focus:border-sky-400 mt-1 block w-full sm:text-sm border rounded-2xl-1 p-3 bg-transparent h-[60px] border-black`}
                        placeholder="Enter password"
                    />
                    {/* <span className="text-red-500 text-xs mt-1"></span> */}
                    </div>
                    <div className="input-form-group flex flex-col items-start mb-4">
                    <label className="font-bold mb-2">
                    Password <b className="text-[#FF0000]">*</b>
                    </label>
                    <input
                        type="password"
                        className={`outline-none focus:border-sky-400 mt-1 block w-full sm:text-sm border rounded-2xl-1 p-3 bg-transparent h-[60px] border-black`}
                        placeholder="Confirm password"
                    />
                    </div>
                    <button
                        className="btn rounded-2xl-1 h-[60px] bg-[#0057FF] border-none font-bold text-white w-full capitalize"
                    >Reset</button>
                </div>
            </div>
        </div>
    )
}