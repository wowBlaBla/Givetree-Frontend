import axios from "axios";
import { FC, useState } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";
import { LoadingIcon } from "./icons/LoadingIcon";

interface ErrorInterface {
  username?: string;
  email?: string;
  password?: string;
}

interface InnerType {
  path: string;
  message: string;
}

export const SignupWithEmail: FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [securePassword, setSecurePassword] = useState<string>("");
  const [errors, setErrors] = useState<ErrorInterface>({});

  const registerByEmail = async () => {
    try {
      const schema = yup.object().shape({
        username: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(8).required(),
      });
      const payload: object = {
        email,
        password,
        username,
      };
      const _errors: ErrorInterface = {};
      await schema.validate(payload, { abortEarly: false }).catch((err) => {
        const { inner } = JSON.parse(JSON.stringify(err));
        inner.map((item: InnerType) => {
          _errors[item.path as keyof ErrorInterface] = item.message;
        });

        setErrors(_errors);
      });
      if (Object.keys(_errors).length) return;
      setLoading(true);
      await axios
        .post(`${process.env.NEXT_PUBLIC_API}/api/auth/register-email`, payload)
        .then((_) => {
          toast.success("You have registered successfully!");
        })
        .catch((err) => {
          if (err?.response?.data?.message) {
            toast.error(err?.response?.data?.message);
          }
        });
      setLoading(false);
    } catch (err) {}
  };

  return (
    <div className="flex flex-col gap-5 items-center sm:mt-0 sm:ml-4">
      <h2 className="text-3xl leading-6 font-medium text-white">Create account</h2>
      <div className="flex flex-col gap-3 py-10 border rounded-lg bg-gray-600 border-base-content border-opacity-50 px-12 w-full">
        <div className="text-white flex flex-col gap-2">
          <h3 className="text-2xl font-bold">Email</h3>
          <h4>Create an account</h4>
        </div>
        <div className="form-layout flex flex-col gap-2">
          <div className="input-form-group flex flex-col items-start">
            <label className="text-white font-bold">Username</label>
            <input
              type="text"
              className={`outline-none focus:border-sky-400 mt-1 block w-full sm:text-sm text-white border rounded-md p-3 bg-transparent ${
                errors?.username ? "border-red-500" : "border-gray-300 border-opacity-25 "
              }`}
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isLoading}
            />
            <span className="text-red-500 text-xs mt-1">{errors?.username}</span>
          </div>
          <div className="input-form-group flex flex-col items-start">
            <label className="text-white font-bold">Email</label>
            <input
              type="email"
              className={`outline-none focus:border-sky-400 mt-1 block w-full sm:text-sm text-white border rounded-md p-3 bg-transparent ${
                errors?.email ? "border-red-500" : "border-gray-300 border-opacity-25 "
              }`}
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
            <span className="text-red-500 text-xs mt-1">{errors?.email}</span>
          </div>
          <div className="input-form-group flex flex-col items-start">
            <label className="text-white font-bold">Password</label>
            <input
              type="password"
              className={`outline-none focus:border-sky-400 mt-1 block w-full sm:text-sm text-white border rounded-md p-3 bg-transparent ${
                errors?.password || password != securePassword
                  ? "border-red-500"
                  : "border-gray-300 border-opacity-25 "
              }`}
              placeholder="Enter a secure password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
            <span className="text-red-500 text-xs mt-1">
              {errors.password
                ? errors.password
                : password != securePassword
                ? "Password is incorrect"
                : ""}
            </span>
          </div>
          <div className="input-form-group flex flex-col items-start">
            <label className="text-white font-bold">Confirm Password</label>
            <input
              type="password"
              className={`outline-none focus:border-sky-400 mt-1 block w-full sm:text-sm text-white border rounded-md p-3 bg-transparent ${
                errors?.password || password != securePassword
                  ? "border-red-500"
                  : "border-gray-300 border-opacity-25 "
              }`}
              placeholder="Enter a secure password"
              value={securePassword}
              onChange={(e) => setSecurePassword(e.target.value)}
              disabled={isLoading}
            />
            <span className="text-red-500 text-xs mt-1">
              {errors.password
                ? errors.password
                : password != securePassword
                ? "Password is incorrect"
                : ""}
            </span>
          </div>
        </div>
        <div>
          <button
            className={`flex text-white justify-center items-center mt-2 p-3 gap-1 rounded-lg bg-cyan-600 text-sm sm:text-sm font-bold tracking-wide cursor-pointer button-hover w-full`}
            onClick={registerByEmail}
            disabled={isLoading}
          >
            <span>Register</span>
            {isLoading ? <LoadingIcon className="w-6 h-6" /> : ""}
          </button>
        </div>
      </div>
    </div>
  );
};
