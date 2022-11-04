export const RingSkeleton = () => {
    return (
        <div className="flex flex-1 fixed inset-0 justify-center items-center w-screen h-screen z-[9999]">
            <div className="flex flex-col justify-center items-center w-full h-full max-h-screen space-y-5">
                <div className="lds-ring bg-white">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>
        </div>
    )
}