import { FC } from "react";
import bannerImage from "../assets/images/creator-profile-banner.png";

export const ProfileBanner:FC = () => {
    return (
        <div className="h-[295px]" style={{ backgroundImage: `url(${bannerImage.src})`}}/>
    )
}