import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export const NFTCardSkeleton = () => (
    <div className="fundraiser-card text-center h-full">
      <div
        className="bg-white relative w-full h-full inline-block cursor-pointer shadow-normal hover:shadow-xl rounded-xl border border-base-content"
      >
        <div className="flex flex-col w-full h-full relative text-center">
          <div className="card-image relative">
            <Skeleton
                className="w-full aspect-square min-h-full !inline-block !rounded-t-xl"
                containerClassName="flex"
            />
          </div>
          <div className="card-body flex-col justify-between w-full rounded-b-xl border-t-0 border h-28 relative !justify-start !py-2">
            <div className="flex justify-between w-full text-xs sm:text-sm">
              <div className="flex w-full flex-col text-black items-start gap-1">
                <Skeleton
                    className="w-full h-6"
                    containerClassName="w-full"
                />
                <Skeleton
                    className="w-full h-6"
                    containerClassName="w-10/12"
                />
                <Skeleton
                    className="w-full h-6"
                    containerClassName="w-7/12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
)