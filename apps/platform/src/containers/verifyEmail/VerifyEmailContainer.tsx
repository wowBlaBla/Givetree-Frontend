import { FC, useEffect } from "react";
import { useLocation } from "wouter";
import { useAuth } from "../../context/AuthContext";

export const VerifyEmailContainer: FC<{ token: string }> = ({ token }) => {
  const { authUser, verifyEmail } = useAuth();
  const [_, setLocation] = useLocation();

  useEffect(() => {
    verifyEmail(token);
  }, [token]);

  useEffect(() => {
    if (authUser?.user && authUser.user.isEmailVerified) {
      setLocation("/profile/home");
    }
  }, [authUser?.user]);

  return <></>;
};
