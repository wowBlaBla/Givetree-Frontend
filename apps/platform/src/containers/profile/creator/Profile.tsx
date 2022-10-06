import axios from "axios";
import { FC, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { SwatchesPicker, ColorResult } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_USER, IStore } from "../../../store/reducers/auth.reducer";
import { updateAuthed } from "../../../store/actions/auth.action";
import { AddIcon } from "../../../components/icons/AddIcon";

export const Profile: FC = () => {
  const authedUser = useSelector<IStore, AUTH_USER | undefined>(
    (state) => state.auth.authedUser
  );
  const dispatch = useDispatch();

  const [viewType, setViewType] = useState<"edit" | "preview">("edit");

  const [accountType, setAccountType] = useState<"standard" | "charity">("standard");
  const [userName, setUserName] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<File>();
  const [banner, setBanner] = useState<string>();
  const [avatarUrl, setAvatarUrl] = useState<string>("");

  const avatarRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (authedUser && authedUser.user) {
      setAccountType(authedUser.user.type);
      setUserName(authedUser.user.userName || "");
      setBio(authedUser.user.bio || "");
      setEmail(authedUser.user.email || "");
      setAvatarUrl(authedUser.user.profileImage || "");
    }
  }, [authedUser]);

  const updateProfile = async () => {
    try {
      if (authedUser) {
        const data = {
          userName,
          bio,
          email,
          type: accountType,
        };
        setLoading(true);
        let res = await axios.put(
          `${process.env.NEXT_PUBLIC_API}/api/users/profile`,
          data,
          {
            headers: {
              Authorization: `Bearer ${authedUser.accessToken}`,
            },
          }
        );

        if (avatar) {
          const imageBody = new FormData();
          if (avatar) {
            imageBody.append("profile", avatar);
          }

          res = await axios.put(
            `${process.env.NEXT_PUBLIC_API}/api/users/profile/upload`,
            imageBody,
            {
              headers: {
                Authorization: `Bearer ${authedUser.accessToken}`,
                "Content-Type": "multipart/form-data",
              },
            }
          );
        }

        dispatch(
          updateAuthed({
            ...authedUser,
            user: res.data,
          })
        );
        toast.success("Updated profile successfully!");
      }
    } catch (err) {
      toast.success("Faild updating profile");
    }
    setLoading(false);
  };

  const handleAvatarFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      setAvatar(file);
      setAvatarUrl(URL.createObjectURL(file));
    }
  };

  const handleAvatarRemove = () => {
    setAvatar(undefined);
    setAvatarUrl("");
  };

  const handleBannerSelect = (color: ColorResult) => {
    setBanner(color.hex);
  };

  const handleBannerRemove = () => {
    setBanner("");
  };

  return (
    <div className="profile">
      <div className="profile-save-section px-8">
        <div className="flex justify-between max-w-[632px] items-center">
          <div className="tabs">
            <div
              className={`tab ${viewType === "edit" ? "tab-active" : ""}`}
              onClick={() => setViewType("edit")}
            >
              Edit profile
            </div>
            <div
              className={`tab ${viewType === "preview" ? "tab-active" : ""}`}
              onClick={() => setViewType("preview")}
            >
              View public profile
            </div>
          </div>
          <button className="btn bg-[#0075FF] text-white h-[30px] min-h-0">Save</button>
        </div>
      </div>
      <div className="p-8 max-w-[700px]">
        <h1 className="font-bold text-white text-xl mb-4">Profile Settings</h1>
        <div className="profile-section">
          <label className="mb-1 text-sm text-white">Account Type</label>
          <select
            className="select profile-item outline-none block mt-1"
            onChange={(e) => setAccountType(e.target.value)}
          >
            <option value="standard" selected={accountType === "standard"}>
              Standard
            </option>
            <option value="charity" selected={accountType === "charity"}>
              Charity
            </option>
          </select>
          <label className="mb-1 text-sm text-white">Status</label>
          <select
            className="select profile-item outline-none block mt-1"
            // onChange={(e) => setAccountType(e.target.value)}
          >
            <option value="standard">Pending approval</option>
            <option value="charity">Verified</option>
          </select>
          <label className="mb-1 text-sm text-white">Visibility</label>
          <select
            className="select profile-item outline-none block mt-1"
            // onChange={(e) => setAccountType(e.target.value)}
          >
            <option value="standard">Private</option>
            <option value="charity">Public</option>
          </select>
        </div>
        <h1 className="font-bold text-white text-xl mb-4">Profile Details</h1>
        <div className="profile-section">
          <div className="flex mb-[48px]">
            <div className="profile-box w-[150px] h-[164px] flex justify-center items-center mr-8 !bg-[#303236]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {avatarUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="object-cover rounded-full w-[100px] h-[100px]"
                  src={avatarUrl}
                  alt="avatar"
                />
              )}
              <input
                ref={avatarRef}
                type="file"
                hidden
                onChange={handleAvatarFileSelect}
              />
            </div>
            <div className="flex flex-col flex-1">
              <button
                className="btn profile-primary-button text-lg font-bold rounded-[30px] text-white w-full mb-4 normal-case"
                onClick={() => avatarRef.current?.click()}
              >
                Pick an image
              </button>
              <button
                className="btn profile-secondary-button text-lg font-bold rounded-[30px] text-white w-full normal-case"
                onClick={handleAvatarRemove}
              >
                Remove
              </button>
            </div>
          </div>
          <label className="mb-1 text-md text-white">Profile title</label>
          <input
            type="text"
            className="input input-bordered profile-item mt-1 block w-full outline-none"
            // value={userName}
            // onChange={(e) => setUserName(e.target.value)}
            disabled={isLoading}
          />
          <label className="mb-1 text-md text-white">Bio</label>
          <textarea
            className="textarea textarea-bordered profile-item mt-1 block w-full outline-none focus:border-indigo-500 sm:text-sm p-4 h-[160px]"
            rows={4}
            // value={bio}
            // onChange={(e) => setBio(e.target.value)}
            disabled={isLoading}
          />
          <label className="mb-1 text-md text-white">Email</label>
          <input
            type="email"
            className="input input-bordered profile-item mt-1 block w-full outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
          {accountType === "charity" && (
            <>
              <label className="mb-1 text-md text-white">
                When was the charity founded?
              </label>
              <input
                type="number"
                className="input input-bordered profile-item mt-1 block w-full outline-none"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
              <label className="mb-1 text-md text-white">
                How many employees does the charity have?
              </label>
              <input
                type="number"
                className="input input-bordered profile-item mt-1 block w-full outline-none"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
              <label className="mb-1 text-md text-white">
                Who were the founders of the charity?
              </label>
              <input
                type="text"
                className="input input-bordered profile-item mt-1 block w-full outline-none"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
              <label className="mb-1 text-md text-white">
                What country is your charity located in?
              </label>
              <div className="profile-box mt-1 flex p-4 mb-[12px]">
                <div className="flex flex-1"></div>
                <div className="flex justify-center items-center w-[100px] h-[100px] border border-white/40 rounded-lg cursor-pointer">
                  <AddIcon />
                </div>
              </div>
              <label className="mb-1 text-md text-white">
                What causes does your charity help with?
              </label>
              <div className="profile-box mt-1 flex p-4 mb-[12px]">
                <div className="flex flex-1"></div>
                <div className="flex justify-center items-center w-[100px] h-[100px] border border-white/40 rounded-lg cursor-pointer">
                  <AddIcon />
                </div>
              </div>
              <label className="mb-1 text-md text-white">
                What is your organisations business number?
              </label>
              <input
                type="number"
                className="input input-bordered profile-item mt-1 block w-full outline-none"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
              <label className="mb-1 text-md text-white">
                Are any types of donors blocked?
              </label>
              <div className="profile-box mt-1 flex p-4 mb-[12px]">
                <div className="flex flex-1"></div>
                <div className="flex justify-center items-center w-[100px] h-[100px] border border-white/40 rounded-lg cursor-pointer">
                  <AddIcon />
                </div>
              </div>
            </>
          )}
          <label className="mb-1 text-md text-white">Website & social media</label>
          <div className="profile-box mt-1 flex p-4 mb-[12px]">
            <div className="flex flex-1"></div>
            <div className="flex justify-center items-center w-[100px] h-[100px] border border-white/40 rounded-lg cursor-pointer">
              <AddIcon />
            </div>
          </div>
          {accountType === "charity" && (
            <>
              <label className="mb-1 text-md text-white">
                Does your charity have DGR status?
              </label>
              <div className="profile-box mt-1 flex p-4 mb-[12px]">
                <div className="flex">
                  <button className="btn profile-secondary-button text-lg rounded-[30px] text-white w-full disabled:transform mr-4">
                    Yes
                  </button>
                  <button className="btn profile-secondary-button text-lg rounded-[30px] text-white w-full">
                    No
                  </button>
                </div>
              </div>
            </>
          )}
          <label className="mb-1 text-md text-white">
            Does your charity require donor information for all donations?
          </label>
          <div className="profile-box mt-1 flex p-4 mb-[12px]">
            <div className="flex">
              <button className="btn profile-secondary-button text-lg rounded-[30px] text-white w-full disabled:transform mr-4">
                Yes
              </button>
              <button className="btn profile-secondary-button text-lg rounded-[30px] text-white w-full">
                No
              </button>
            </div>
          </div>
          <label className="mb-1 text-md text-white">
            Which cryptocurrencies do you accept?
          </label>
          <div className="profile-box mt-1 flex p-4 mb-[12px]">
            <div className="flex flex-1"></div>
            <div className="flex justify-center items-center w-[100px] h-[100px] border border-white/40 rounded-lg cursor-pointer">
              <AddIcon />
            </div>
          </div>
          <label className="mb-1 text-md text-white">Donation receipt details</label>
          <div className="profile-box mt-1 flex p-4">
            <div className="flex flex-1"></div>
            <div className="flex justify-center items-center w-[100px] h-[100px] border border-white/40 rounded-lg cursor-pointer">
              <AddIcon />
            </div>
          </div>
        </div>
        <h1 className="font-bold text-white text-xl mb-4">Profile Theme</h1>
        <div className="profile-section">
          <div className="flex">
            <div
              className={`profile-box w-[150px] h-[164px] flex justify-center items-center mr-8`}
              style={{
                background: banner || "#303236",
              }}
            />
            <div className="flex flex-col flex-1">
              <div className="dropdown dropdown-top">
                <label
                  tabIndex={0}
                  className="btn profile-primary-button text-lg font-bold rounded-[30px] text-white w-full normal-case"
                >
                  Pick a theme
                </label>
                <div tabIndex={0} className="dropdown-content">
                  <SwatchesPicker color={banner} onChangeComplete={handleBannerSelect} />
                </div>
              </div>
              <button
                className="btn profile-secondary-button text-lg font-bold rounded-[30px] text-white w-full mt-4 normal-case"
                onClick={handleBannerRemove}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
