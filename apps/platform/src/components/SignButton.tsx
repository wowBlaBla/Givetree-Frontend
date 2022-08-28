import { FC } from "react";
import { useAppContext } from "../context/state";
import { AuthModal } from "./modal/AuthModal";
import { PrimaryButton } from "./PrimaryCta";

export const SignButton:FC = () => {
    const { setOpenAuthModal } = useAppContext();
    return (
        <>
            <PrimaryButton
                className="w-24 h-8 rounded-full"
                onClick={() => setOpenAuthModal(true)}
            >
                Sign In
            </PrimaryButton>
            <AuthModal/>
        </>
    )
}