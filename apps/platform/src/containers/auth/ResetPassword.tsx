import { FC, useState } from "react";
import { toast } from "react-toastify";
import { useLocation } from "wouter";
import * as yup from "yup";
import { GiveTreeLogo } from "../../components/GiveTreeLogo";
import { useAuth } from "../../context/AuthContext";

interface ErrorInterface {
  password?: string;
  passwordConfirmation?: string;
}

interface InnerType {
  path: string;
  message: string;
}

export const ResetPassword: FC<{ token: string }> = ({ token }) => {
  const [_, setLocation] = useLocation();
  const { resetPassword } = useAuth();
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleResetPassword = async () => {
    const schema = yup.object().shape({
      password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      passwordConfirmation: yup.string().oneOf([password, null], "Passwords must match"),
    });

    const payload = {
      password,
      passwordConfirmation,
    };

    const _errors: ErrorInterface = {};
    await schema.validate(payload, { abortEarly: false }).catch((err) => {
      const { inner } = JSON.parse(JSON.stringify(err));
      inner.map((item: InnerType) => {
        _errors[item.path as keyof ErrorInterface] = item.message;
      });
    });

    if (Object.keys(_errors).length) {
      if (_errors.password) {
        toast.error(_errors.password);
      } else if (_errors.passwordConfirmation) {
        toast.error(_errors.passwordConfirmation);
      }
    } else {
      const ret = await resetPassword(token, password);
      if (ret) {
        setLocation("/login");
      }
    }
  };

  return (
    <div className="w-full auth-wallet">
      <div className="flex flex-col items-center max-w-[400px] mx-auto my-24 border border-black bg-white rounded-2xl-1 px-6 py-6 relative">
        <div className="flex items-center mb-4">
          <GiveTreeLogo className="w-[60px]" />
          <span className="text-[50px] font-bold text-black ml-2">GiveTree</span>
        </div>
        <span className="text-[#646464] font-bold text-md text-center mb-6">
          Enter new password
        </span>
        <div className="flex flex-col w-full text-black">
          <div className="input-form-group flex flex-col items-start mb-4">
            <label className="font-bold mb-2">
              New Password <b className="text-[#FF0000]">*</b>
            </label>
            <input
              type="password"
              className={`outline-none focus:border-sky-400 mt-1 block w-full sm:text-sm border rounded-2xl-1 p-3 bg-transparent h-[60px] border-black`}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <span className="text-red-500 text-xs mt-1"></span> */}
          </div>
          <div className="input-form-group flex flex-col items-start mb-4">
            <label className="font-bold mb-2">
              Confirm Password <b className="text-[#FF0000]">*</b>
            </label>
            <input
              type="password"
              className={`outline-none focus:border-sky-400 mt-1 block w-full sm:text-sm border rounded-2xl-1 p-3 bg-transparent h-[60px] border-black`}
              placeholder="Confirm password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
          <button
            className="btn rounded-2xl-1 h-[60px] bg-[#0057FF] border-none font-bold text-white w-full capitalize"
            onClick={handleResetPassword}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
