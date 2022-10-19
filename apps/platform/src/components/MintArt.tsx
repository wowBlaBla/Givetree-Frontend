import { FC } from "react";

interface ArtPreview {
    src: File;
    type: string;
}

export const MintArtPreview:FC<ArtPreview> = ({ src, type }) => {

    return (
        <>
            {
                type == "image" ? (
                    <img
                        className="object-cover w-full max-h-full"
                        src={URL.createObjectURL(src)}
                        alt="avatar"
                    />
                ) : ( type == "audio" ? (
                    <audio src={URL.createObjectURL(src)} controls/>
                ) : (
                    <video src={URL.createObjectURL(src)} controls/>
                ))
            }
        </>
    )
}