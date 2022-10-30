import React, { FC, useState } from "react";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";

import { CheckBox } from "../../components/CheckBox";
import { useWallet } from "../../context/WalletContext";
import { AuthType, useAuth } from "../../context/AuthContext";
import { useLocation } from "wouter";
import { ConnectWallet } from "../../components/ConnectWallet";
import { GiveTreeLogo } from "../../components/GiveTreeLogo";

interface ErrorInterface {
  username?: string;
  email?: string;
  password?: string;
}

interface InnerType {
  path: string;
  message: string;
}

export const SignUp: FC = () => {
  const [, setLocation] = useLocation();

  const { address } = useWallet();
  const { register, isAuth } = useAuth();

  const [step, setStep] = useState(0);
  const [authType, setAuthType] = useState<AuthType>();

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [securePassword, setSecurePassword] = useState<string>("");

  const [termAccept, setTermAccept] = useState(false);
  const [privacyAccept, setPrivacyAccept] = useState(false);
  const [cookieAccept, setCookieAccept] = useState(false);

  const [errors, setErrors] = useState<ErrorInterface>({});

  React.useEffect(() => {
    if (authType) {
      setStep(1);
    }
  }, [authType]);

  React.useEffect(() => {
    if (isAuth && step === 6) {
      setTimeout(() => setLocation("/profile/home"), 2000);
    }
  }, [isAuth, step, setLocation]);

  const nextStep = async () => {
    if (step < 5) {
      const ret = await invalidate();
      if (!ret) {
        return;
      }
      setStep(step + 1);
    } else {
      setStep(step + 1);
      if (authType) {
        if (authType === "wallet") {
          register({ address }, authType, false);
        } else {
          register({ username, email, password }, authType, false);
        }
      }
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
      if (step === 1) {
        setAuthType(undefined)
      }
    }
  };

  const invalidate = async () => {
    if (step === 1) {
      if (authType === "wallet") {
        if (!address || !username) return false;
      } else {
        const schema = yup.object().shape({
          username: yup.string().required(),
          email: yup.string().email().required(),
          password: yup.string().min(8).required(),
        });

        const payload = {
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

        if (Object.keys(_errors).length) return false;
      }
    } else if (step === 2) {
    } else if (step === 3) {
      return termAccept;
    } else if (step === 4) {
      return privacyAccept;
    } else if (step === 5) {
      return cookieAccept;
    }

    return true;
  };

  const onReCAPTCHAChange = (token: string | null) => {
    console.log("Captcha value:", token);
  };

  return (
    <div className="w-full auth-wallet">
      <div className="flex flex-col items-center max-w-[400px] mx-auto my-24 border border-black bg-white rounded-2xl-1 px-6 py-6">
        <div className="flex items-center mb-4">
          <GiveTreeLogo className="w-[60px]" />
          <span className="text-[50px] font-bold text-black ml-2">GiveTree</span>
        </div>

        {/* <ul className="auth-steps steps mb-8">
          {Array(7)
            .fill(0)
            .map((_, index) => (
              <li
                key={`auth-step-${index}`}
                data-content=""
                className={`step ${
                  step === index ? "step-current" : step < index ? "" : "step-complete"
                }`}
              ></li>
            ))}
        </ul> */}

        {step === 0 ? (
          <>
            <span className="text-[#646464] font-bold text-md text-center mb-6">
              Sign up with wallet or email
            </span>

            <button
              className="btn rounded-2xl-1 w-full h-[60px] font-bold text-[#646464] bg-transparent hover:bg-[#0057FF] hover:text-white capitalize mb-4 hover"
              onClick={() => {
                setAuthType("wallet");
              }}
            >
              Cryptocurrency Wallet
            </button>
            <button
              className="btn rounded-2xl-1 w-full h-[60px] font-bold text-[#646464] bg-transparent hover:bg-[#0057FF] hover:text-white capitalize"
              onClick={() => {
                setAuthType("email");
              }}
            >
              Email address
            </button>
          </>
        ) : step === 1 ? (
          authType === "email" ? (
            <>
              <span className="text-[#646464] font-bold text-md text-center mb-6">
                Input account information
              </span>
              <div className="flex flex-col w-full text-black">
                <div className="input-form-group flex flex-col items-start mb-4">
                  <label className="font-bold mb-2">
                    Username <b className="text-[#FF0000]">*</b>
                  </label>
                  <input
                    type="text"
                    className={`outline-none focus:border-sky-400 mt-1 block w-full sm:text-sm border rounded-2xl-1 p-3 bg-transparent h-[60px] ${
                      errors?.username ? "border-red-500" : "border-black "
                    }`}
                    placeholder="Choose a unique @username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <span className="text-red-500 text-xs mt-1">{errors?.username}</span>
                </div>
                <div className="input-form-group flex flex-col items-start mb-4">
                  <label className="font-bold mb-2">
                    Email <b className="text-[#FF0000]">*</b>
                  </label>
                  <input
                    type="email"
                    className={`outline-none focus:border-sky-400 mt-1 block w-full sm:text-sm border rounded-2xl-1 p-3 bg-transparent h-[60px] ${
                      errors?.email ? "border-red-500" : "border-black "
                    }`}
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className="text-red-500 text-xs mt-1">{errors?.email}</span>
                </div>
                <div className="input-form-group flex flex-col items-start mb-4">
                  <label className="font-bold mb-2">
                    Password <b className="text-[#FF0000]">*</b>
                  </label>
                  <input
                    type="password"
                    className={`outline-none focus:border-sky-400 mt-1 block w-full sm:text-sm border rounded-2xl-1 p-3 bg-transparent h-[60px] ${
                      errors?.password || password != securePassword
                        ? "border-red-500"
                        : "border-black "
                    }`}
                    placeholder="Enter a secure password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                  <label className="font-bold mb-2">
                    Confirm Password <b className="text-[#FF0000]">*</b>
                  </label>
                  <input
                    type="password"
                    className={`outline-none focus:border-sky-400 mt-1 block w-full sm:text-sm border rounded-2xl-1 p-3 bg-transparent h-[60px] ${
                      errors?.password || password != securePassword
                        ? "border-red-500"
                        : "border-black "
                    }`}
                    placeholder="Enter a secure password"
                    value={securePassword}
                    onChange={(e) => setSecurePassword(e.target.value)}
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
            </>
          ) : (
            <>
              <span className="text-[#646464] font-bold text-md text-center mb-6">
                Select your wallet
              </span>
              <div className="input-form-group flex flex-col items-start mb-4 w-full text-black">
                <label className="font-bold mb-2">Username</label>
                <input
                  type="text"
                  className={`outline-none focus:border-sky-400 mt-1 block w-full sm:text-sm border rounded-2xl-1 p-3 bg-transparent ${
                    errors?.username ? "border-red-500" : "border-black "
                  }`}
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <span className="text-red-500 text-xs mt-1">{errors?.username}</span>
                <label className="font-bold mt-2 mb-2">Wallet address</label>
                <span>{address || ""}</span>
              </div>
              <ConnectWallet />
            </>
          )
        ) : step === 2 ? (
          <>
            <span className="text-[#646464] font-bold text-md text-center mb-6">
              Complete google recatcpha
            </span>
            <ReCAPTCHA
              sitekey="6Lf8lcYiAAAAAGFPnO2gyrr1AtQd8OsIieLsBxE8"
              onChange={onReCAPTCHAChange}
            />
          </>
        ) : step === 3 ? (
          <>
            <span className="text-[#646464] font-bold text-md text-center mb-6">
              Terms of use
            </span>
            <div className="w-full border border-black bg-white rounded-2xl-1 p-4 text-black max-h-[300px] overflow-auto">
              <p>
                Lorum impsum lorum ipsum lorum ipsum Lorum impsum lorum ipsum lorum ipsum
                Lorum impsum lorum ipsum lorum ipsum Lorum impsum lorum ipsum lorum ipsum
                Lorum impsum lorum ipsum lorum ipsum Lorum impsum lorum ipsum lorum ipsum
                Lorum impsum lorum ipsum lorum ipsum Lorum impsum lorum ipsum lorum ipsum
                Lorum impsum lorum ipsum lorum ipsum Lorum impsum lorum ipsum lorum ipsum
                Lorum impsum lorum ipsum lorum ipsum Lorum impsum lorum ipsum lorum
                ipsumipsum lorum ipsum Lorum impsum lorum ipsum lorum ipsum Lorum impsum
                lorum ipsum lorum ipsum Lorum impsum lorum ipsum lorum ipsum Lorum impsum
                lorum ipsum lorum ipsum ipsum lorum ipsum Lorum impsum lorum ipsum lorum
                ipsum Lorum impsum lorum ipsum lorum ipsum Lorum impsum lorum ipsum lorum
                ipsum Lorum impsum lorum ipsum lorum ipsum
              </p>
            </div>

            <CheckBox
              title={"I understand & agree"}
              className="mt-2 text-black w-full"
              checked={termAccept}
              onChanged={(st) => setTermAccept(st)}
            />
          </>
        ) : step === 4 ? (
          <>
            <span className="text-[#646464] font-bold text-md text-center mb-6">
              Privacy policy
            </span>
            <div className="w-full border border-black bg-white rounded-2xl-1 p-4 text-black max-h-[300px] overflow-auto">
              <p>
                Lorum impsum lorum ipsum lorum ipsum Lorum impsum lorum ipsum lorum ipsum
                Lorum impsum lorum ipsum lorum ipsum Lorum impsum lorum ipsum lorum ipsum
                Lorum impsum lorum ipsum lorum ipsum Lorum impsum lorum ipsum lorum ipsum
                Lorum impsum lorum ipsum lorum ipsum Lorum impsum lorum ipsum lorum ipsum
                Lorum impsum lorum ipsum lorum ipsum Lorum impsum lorum ipsum lorum ipsum
                Lorum impsum lorum ipsum lorum ipsum Lorum impsum lorum ipsum lorum
                ipsumipsum lorum ipsum Lorum impsum lorum ipsum lorum ipsum Lorum impsum
                lorum ipsum lorum ipsum Lorum impsum lorum ipsum lorum ipsum Lorum impsum
                lorum ipsum lorum ipsum ipsum lorum ipsum Lorum impsum lorum ipsum lorum
                ipsum Lorum impsum lorum ipsum lorum ipsum Lorum impsum lorum ipsum lorum
                ipsum Lorum impsum lorum ipsum lorum ipsum
              </p>
            </div>

            <CheckBox
              title={"I understand & agree"}
              className="mt-2 text-black w-full"
              checked={privacyAccept}
              onChanged={(st) => setPrivacyAccept(st)}
            />
          </>
        ) : step === 5 ? (
          <>
            <span className="text-[#646464] font-bold text-md text-center mb-6">
              Cookies policy
            </span>
            <div className="w-full border border-black bg-white rounded-2xl-1 p-4 text-black max-h-[300px] overflow-auto">
              <p>
                Lorum impsum lorum ipsum lorum ipsum Lorum impsum lorum ipsum lorum ipsum
                Lorum impsum lorum ipsum lorum ipsum Lorum impsum lorum ipsum lorum ipsum
                Lorum impsum lorum ipsum lorum ipsum Lorum impsum lorum ipsum lorum ipsum
                Lorum impsum lorum ipsum lorum ipsum Lorum impsum lorum ipsum lorum ipsum
                Lorum impsum lorum ipsum lorum ipsum Lorum impsum lorum ipsum lorum ipsum
                Lorum impsum lorum ipsum lorum ipsum Lorum impsum lorum ipsum lorum
                ipsumipsum lorum ipsum Lorum impsum lorum ipsum lorum ipsum Lorum impsum
                lorum ipsum lorum ipsum Lorum impsum lorum ipsum lorum ipsum Lorum impsum
                lorum ipsum lorum ipsum ipsum lorum ipsum Lorum impsum lorum ipsum lorum
                ipsum Lorum impsum lorum ipsum lorum ipsum Lorum impsum lorum ipsum lorum
                ipsum Lorum impsum lorum ipsum lorum ipsum
              </p>
            </div>

            <CheckBox
              title={"I understand & agree"}
              className="mt-2 text-black w-full"
              checked={cookieAccept}
              onChanged={(st) => setCookieAccept(st)}
            />
          </>
        ) : isAuth ? (
          <>
            <h1 className="text-black text-lg mb-8">
              Congratluations! you’re all signed up.
            </h1>
            <svg
              width="300"
              height="300"
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M300 0L293.495 0.191327C293.495 0.191327 248.485 0.78922 205.102 22.3852C191.159 29.3447 177.144 38.8871 164.541 51.4668C149.019 66.9882 127.113 92.4585 107.143 116.518H54.9107C54.7194 116.518 54.5281 116.518 54.3367 116.518C52.6865 116.685 51.1559 117.498 50.1276 118.814L19.5153 155.548C18.2239 157.175 17.8173 159.351 18.4869 161.312C19.1327 163.273 20.7589 164.78 22.7679 165.306L60.0765 174.681C59.7895 175.04 57.9719 177.36 57.9719 177.36L57.2066 178.125L56.824 179.273C56.824 179.273 56.2978 181.425 56.4413 183.482C56.4892 184.247 56.6327 185.252 56.824 186.161L43.6224 208.355C43.6224 208.355 43.0246 209.55 42.8571 210.268C42.6897 210.985 42.6419 211.87 42.6658 212.755C42.7136 214.525 43.1441 216.51 44.1964 218.878C46.301 223.613 50.7972 229.879 60.4592 239.541C70.1212 249.179 76.3632 253.699 81.1225 255.804C83.4901 256.856 85.4751 257.286 87.2449 257.334C88.1298 257.358 89.0147 257.31 89.7321 257.143C90.4496 256.975 91.6454 256.378 91.6454 256.378L114.031 243.176C114.868 243.343 115.824 243.511 116.518 243.559C118.575 243.702 120.727 243.176 120.727 243.176L121.875 242.793L122.832 242.028C122.832 242.028 125.008 240.354 125.319 240.115L134.694 277.232C135.22 279.241 136.727 280.867 138.688 281.513C140.649 282.183 142.825 281.776 144.452 280.485L181.186 249.872C182.645 248.701 183.482 246.955 183.482 245.089V192.666C207.709 172.529 233.347 150.646 248.533 135.459C261.065 122.903 270.464 108.865 277.423 94.898C298.924 51.5864 299.809 6.5051 299.809 6.5051L300 0ZM286.798 13.2015C286.296 22.4091 283.881 54.5281 266.518 89.5408C260.061 102.527 251.403 115.37 239.923 126.849C225 141.773 198.74 164.158 174.298 184.439C173.796 184.75 173.342 185.132 172.959 185.587C144.332 209.311 118.503 229.855 116.901 231.122C116.183 231.051 115.059 230.979 113.074 230.166C108.506 228.3 100.494 223.517 88.5842 211.607C76.6741 199.697 71.6996 191.494 69.8342 186.926C69.021 184.941 68.9493 183.817 68.8775 183.099C70.1451 181.497 90.4018 155.955 114.031 127.423C114.676 126.897 115.179 126.252 115.561 125.51C135.627 101.307 157.868 75.3587 173.151 60.0765C184.678 48.5491 197.497 39.9633 210.459 33.4821C245.52 16.0475 277.615 13.6798 286.798 13.2015ZM207.972 61.4158C191.135 61.4158 177.36 75.1913 177.36 92.0281C177.36 108.865 191.135 122.64 207.972 122.64C224.809 122.64 238.584 108.865 238.584 92.0281C238.584 75.1913 224.809 61.4158 207.972 61.4158ZM207.972 73.6607C218.184 73.6607 226.339 81.816 226.339 92.0281C226.339 102.24 218.184 110.395 207.972 110.395C197.76 110.395 189.605 102.24 189.605 92.0281C189.605 81.816 197.76 73.6607 207.972 73.6607ZM57.7806 128.763H97.0025C85.2599 143.088 75.5979 155.261 68.4949 164.158L35.2041 155.74L57.7806 128.763ZM62.9464 199.745C66.4381 205.341 71.5561 211.99 79.7832 220.217C87.9863 228.42 94.6588 233.562 100.255 237.054L87.0536 244.898C86.8622 244.85 86.8862 244.874 86.0969 244.515C83.5858 243.415 78.1091 239.947 69.0689 230.931C60.0526 221.891 56.5848 216.414 55.4847 213.903C55.126 213.114 55.1499 213.138 55.102 212.946L62.9464 199.745ZM171.237 202.997V242.219L144.26 264.796L135.842 231.696C144.715 224.593 156.768 214.908 171.237 202.997ZM39.0306 228.061C29.0338 235.738 19.9936 236.719 11.8622 244.707C7.79656 248.701 4.56792 254.369 2.67857 262.117C0.78922 269.866 0 279.863 0 293.878V300H6.12245C34.2474 300 47.999 295.552 56.25 287.181C64.501 278.811 65.8642 269.483 72.1301 260.969L62.1811 253.699C54.2411 264.509 52.4713 273.477 47.449 278.571C43.0246 283.068 33.1712 286.368 12.8189 287.181C13.1298 278.284 13.5603 269.746 14.7321 264.987C16.2628 258.793 18.1282 255.804 20.4719 253.508C25.1355 248.916 34.2714 246.859 46.301 237.628L39.0306 228.061ZM86.0969 245.472L85.523 245.855V245.663C85.523 245.663 85.8578 245.568 86.0969 245.472Z"
                fill="#434343"
              />
            </svg>
          </>
        ) : (
          <button
            className="btn rounded-2xl-1 h-[60px] bg-[#8C8D91] border-none text-[20px] font-bold text-white"
            onClick={prevStep}
          >
            Back
          </button>
        )}
        {step > 0 && step < 6 && (
          <div className="flex w-full justify-between mt-8">
            <button
              className="btn rounded-2xl-1 h-[30px] min-h-0 bg-[#8C8D91] border-none capitalize font-bold text-white"
              onClick={prevStep}
            >
              Back
            </button>
            <button
              className="btn rounded-2xl-1 h-[30px] min-h-0 bg-[#0057FF] border-none capitalize text-white font-bold"
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
