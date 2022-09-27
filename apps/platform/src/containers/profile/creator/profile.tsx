import axios from "axios";
import { FC, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import cx from "classnames";
import { LoadingIcon } from "../../../components/icons/LoadingIcon";
import { PencilIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_USER, IStore } from "../../../store/reducers/auth.reducer";
import { updateAuthed } from "../../../store/actions/auth.action";

export const Profile: FC = () => {
  const authedUser = useSelector<IStore, AUTH_USER | undefined>(
    (state) => state.auth.authedUser
  );
  const dispatch = useDispatch();
  const [accountType, setAccountType] = useState<string>("standard");
  const [userName, setUserName] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [avatarOpenChange, setAvatarOpenChange] = useState<boolean>(false);
  const [bannerOpenChange, setBannerOpenChange] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<File>();
  const [banner, setBanner] = useState<File>();
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const [bannerUrl, setBannerUrl] = useState<string>("");

  const avatarRef = useRef<HTMLInputElement>(null);
  const bannerRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (authedUser && authedUser.user) {
      setAccountType(authedUser.user.type);
      setUserName(authedUser.user.userName || "");
      setBio(authedUser.user.bio || "");
      setEmail(authedUser.user.email || "");
      setAvatarUrl(authedUser.user.profileImage || "");
      setBannerUrl(authedUser.user.bannerImage || "");
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

        if (avatar || banner) {
          const imageBody = new FormData();
          if (avatar) {
            imageBody.append("profile", avatar);
          }

          if (banner) {
            imageBody.append("banner", banner);
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
            ...res.data,
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

  const handleBannerFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      setBanner(file);
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="grid p-8">
      <h2 className="text-2xl font-bold py-7 ">Profile details</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        <div>
          <div className="grid mt-6 gap-3">
            <div className="input-grop">
              <label className="">Account Type</label>
              <select
                className="select select-bordered block outline-none focus:border-indigo-500 mt-1 w-full max-w-xs"
                onChange={(e) => setAccountType(e.target.value)}
              >
                <option value="standard" selected={accountType === "standard"}>
                  Standard
                </option>
                <option value="charity" selected={accountType === "charity"}>
                  Charity
                </option>
              </select>
            </div>
            <div className="input-grop">
              <label className="">Username</label>
              <input
                type="text"
                className="mt-1 block w-full input input-bordered outline-none focus:border-indigo-500 sm:text-sm h-12 px-4"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="input-grop">
              <label className="">Bio</label>
              <textarea
                className="textarea textarea-bordered mt-1 block w-full outline-none focus:border-indigo-500 sm:text-sm p-4"
                rows={6}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="input-grop">
              <label className="">Email</label>
              <input
                type="email"
                className="mt-1 block w-full input input-bordered outline-none focus:border-indigo-500 sm:text-sm h-12 px-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="input-grop">
              <label className="">Website & Social media links</label>
              <input
                type="text"
                className="mt-1 block w-full input input-bordered outline-none focus:border-indigo-500 sm:text-sm h-12 px-4"
                disabled={isLoading}
              />
              <input
                type="text"
                className="mt-1 block w-full input input-bordered outline-none focus:border-indigo-500 sm:text-sm h-12 px-4 mt-4"
                disabled={isLoading}
              />
            </div>
            <div className="input-grop">
              <label className="">Wallet address</label>
              <input
                type="text"
                className="mt-1 block w-full input input-bordered outline-none focus:border-indigo-500 sm:text-sm h-12 px-4"
                disabled={isLoading}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:mt-20">
          <div className="photo-group flex flex-col gap-y-3">
            <label className="">Profile image</label>
            <div
              className="relative bg-base-100 flex w-37.5 h-37.5 rounded-full p-1 cursor-pointer"
              onMouseEnter={() => (isLoading ? null : setAvatarOpenChange(true))}
              onMouseLeave={() => (isLoading ? null : setAvatarOpenChange(false))}
              onClick={() => avatarRef.current?.click()}
            >
              {avatarUrl && (
                <img className="object-cover rounded-full" src={avatarUrl} alt="avatar" />
              )}
              <div
                className={cx(
                  "absolute w-37.5 h-37.5 bg-base-100 bg-opacity-50 items-center justify-center rounded-full left-0 top-0 flex",
                  {
                    "z-10": avatarOpenChange,
                    "-z-10": !avatarOpenChange,
                  }
                )}
              >
                <PencilIcon className="w-7 h-7 text-white" />
              </div>
              <input
                ref={avatarRef}
                type="file"
                hidden
                onChange={handleAvatarFileSelect}
              />
            </div>
          </div>
          <div className="photo-group flex flex-col gap-y-3">
            <label className="">Profile banner</label>
            <div
              className="relative bg-base-100 flex w-37.5 h-37.5 p-1 cursor-pointer"
              onMouseEnter={() => (isLoading ? null : setBannerOpenChange(true))}
              onMouseLeave={() => (isLoading ? null : setBannerOpenChange(false))}
              onClick={() => bannerRef.current?.click()}
            >
              {bannerUrl && <img className="object-cover" src={bannerUrl} alt="banner" />}
              <div
                className={cx(
                  "absolute w-37.5 h-37.5 bg-base-100 bg-opacity-50 items-center justify-center left-0 top-0 flex",
                  {
                    "z-10": bannerOpenChange,
                    "-z-10": !bannerOpenChange,
                  }
                )}
              >
                <PencilIcon className="w-7 h-7 text-white" />
              </div>
              <input
                ref={bannerRef}
                type="file"
                hidden
                onChange={handleBannerFileSelect}
              />
            </div>
          </div>
        </div>
        <div className="button-group">
          <button
            className={cx(
              "px-6 py-2 text-white bg-cyan-500 rounded-md flex gap-1 items-center",
              {
                "hover:bg-cyan-700": !isLoading,
                "opacity-75": isLoading,
              }
            )}
            onClick={updateProfile}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span>Saving. . .</span>
                <LoadingIcon className="w-5 h-5" />
              </>
            ) : (
              "Save"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
