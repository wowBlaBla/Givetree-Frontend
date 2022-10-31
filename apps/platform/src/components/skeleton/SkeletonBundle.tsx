import { NFTCardSkeleton } from "./NFTCardSkeleton";

export const NFTCardSkeletonBundle = () => (
    <>
        {
            [...Array(12)].map((item, idx) => (
                <NFTCardSkeleton key={idx}/>
            ))
        }
    </>
)