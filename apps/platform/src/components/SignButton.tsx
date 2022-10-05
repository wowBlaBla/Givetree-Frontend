import { FC } from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";
import { openModal } from "../store/actions/auth.action";
import { AuthModal } from "./modal/AuthModal";
import { PrimaryButton } from "./PrimaryCta";

export const SignButton: FC<React.HTMLAttributes<HTMLButtonElement>> = ({
  className,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <PrimaryButton
        className={cx("rounded-full", className)}
        onClick={() => dispatch(openModal(true))}
      >
        Sign In
      </PrimaryButton>
      <AuthModal />
    </>
  );
};
