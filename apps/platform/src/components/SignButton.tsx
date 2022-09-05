import { FC } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../store/actions/auth.action";
import { AuthModal } from "./modal/AuthModal";
import { PrimaryButton } from "./PrimaryCta";

export const SignButton:FC = () => {
    const dispatch = useDispatch();

    return (
        <>
            <PrimaryButton
                className="w-24 h-8 rounded-full"
                onClick={() => dispatch(openModal(true))}
            >
                Sign In
            </PrimaryButton>
            <AuthModal/>
        </>
    )
}