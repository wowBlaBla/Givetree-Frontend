import { FC } from "react";

interface Props {
    src: string;
    alt: string;
}

export const OwnerAvatar:FC<Props> = ({ src, alt }) => {
    const onError = (e:any) => {
        e.target.src = "/apple-touch-icon.png";
    }

    return (
        <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={src}
                alt={alt}
                className="w-16 h-16 rounded-full border-4 border-base-100 absolute -top-8 mb-1 left-1/2 -translate-x-1/2"
                onError={(e:any) => onError(e) }
            />
        </>
    )
}