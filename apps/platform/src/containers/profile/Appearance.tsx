import axios from "axios";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { SwatchesPicker, ColorResult } from "react-color";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_USER, IStore } from "../../store/reducers/auth.reducer";
import { updateAuthed } from "../../store/actions/auth.action";
import { Countries, SocialLinks } from "../../utils/constants";
import { CharityProperties } from "../../typed/charity";
import { SocialLinkPatterns } from "../../utils/socialLinkPatterns";
import { XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

type AccountType = "standard" | "charity";

interface LinkData {
  id?: number;
  social: string;
  link: string;
}

interface ProfileData {
  email?: string;
  userName?: string;
  type?: AccountType;
  title?: string;
  bio?: string;
  location?: string;
  socials?: LinkData[];
  banner?: string;
  visibility?: "private" | "public";
  donation?: boolean;
  tax?: boolean;
  charityProperty?: CharityProperties;
}

export const Appearance: FC = () => {
  const authedUser = useSelector<IStore, AUTH_USER | undefined>(
    (state) => state.auth.authedUser
  );
  const dispatch = useDispatch();

  const [profileData, setProfileData] = useState<ProfileData>({});

  const [link, setLink] = useState<LinkData>({ social: SocialLinks[0].name, link: "" });

  const [isLoading, setLoading] = useState<boolean>(false);

  const [avatar, setAvatar] = useState<File>();
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const avatarRef = useRef<HTMLInputElement>(null);

  const [banner, setBanner] = useState<File>();
  const [bannerUrl, setBannerUrl] = useState<string>("");
  const bannerRef = useRef<HTMLInputElement>(null);

  const getSocialIcon = useCallback((link: LinkData) => {
    const social = SocialLinks.find((s) => s.name === link.social);
    if (social) {
      const IconComponent = social.icon;
      return <IconComponent />;
    }
    return null;
  }, []);

  useEffect(() => {
    if (authedUser && authedUser.user) {
      setProfileData({
        email: authedUser.user.email,
        userName: authedUser.user.userName,
        title: authedUser.user.title,
        bio: authedUser.user.bio,
        type: authedUser.user.type,
        visibility: authedUser.user.visibility,
        banner: authedUser.user.banner || "",
        location: authedUser.user.location,
        tax: authedUser.user.tax,
        charityProperty: authedUser.user.charityProperty,
        socials: authedUser.user.socials,
      });
      setAvatarUrl(authedUser.user.profileImage || "");
    }
  }, [authedUser]);

  const updateProfile = async () => {
    try {
      if (authedUser) {
        const data = { ...profileData };
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

  const handleBannerFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      setBanner(file);
      setBannerUrl(URL.createObjectURL(file));
      setProfileData({
        ...profileData,
        banner: "",
      });  
    }
  };

  const handleBannerSelect = (color: ColorResult) => {
    setBanner(undefined);
    setBannerUrl("");
    setProfileData({
      ...profileData,
      banner: color.hex,
    });
  };

  const handleBannerRemove = () => {
    setBanner(undefined);
    setBannerUrl("");
    setProfileData({
      ...profileData,
      banner: "",
    });
  };

  const handleAddLink = async () => {
    if (link.social && link.link) {
      const valid = SocialLinkPatterns(link.social, link.link);
      if (!valid) {
        return;
      }
      if (authedUser) {
        const params = {
          pending: `Adding ${link.social} link...`,
          success: `${link.social} link is added succesfully!`,
          error: `Failed`,
        };

        toast.promise(async () => {
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_API}/api/socials`,
            { ...link, userId: authedUser?.user.id },
            {
              headers: {
                Authorization: `Bearer ${authedUser.accessToken}`,
              },
            }
          );
          setProfileData({
            ...profileData,
            socials: [...(profileData.socials || []), { ...link, id: res.data.id }],
          });
        }, params);
      }
      setLink({ social: SocialLinks[0].name, link: "" });
    }
  };

  const handleRemoveLink = async (idx: number) => {
    if (authedUser) {
      if (profileData?.socials?.length) {
        const _socials = profileData.socials.slice();
        try {
          const params = {
            pending: `Removing ${link.social} link...`,
            success: `${link.social} link is removed succesfully!`,
            error: `Failed`,
          };
          toast.promise(async () => {
            await axios.delete(
              `${process.env.NEXT_PUBLIC_API}/api/socials/${_socials[idx]?.id}`,
              {
                headers: {
                  Authorization: `Bearer ${authedUser.accessToken}`,
                },
              }
            );

            _socials.splice(idx, 1);
            setProfileData({
              ...profileData,
              socials: _socials,
            });
          }, params);
        } catch (err) {}
      }
    }
  };
  return (
    <div className="profile">
      <div className="p-8 max-w-[825px]">
        <div className="flex justify-between mb-8">
          <h1 className="font-bold text-black text-[24px]">Profile Appearance</h1>
          <div className="flex items-center">
            <div className="indicator mr-4">
              <span className="indicator-item indicator-middle w-[12px] h-[12px] right-[12px]">
                <ChevronDownIcon fill="#0075FF" />
              </span>
              <button className="btn text-white w-[180px] h-[30px] min-h-0 bg-white border-1 border-[#0075FF] text-[#0075FF] rounded-[20px]">
                More Actions
              </button>
            </div>
            <button
              className="btn text-white w-[120px] h-[30px] min-h-0 bg-[#0075FF] border-0 rounded-[20px]"
              onClick={updateProfile}
            >
              Save
            </button>
          </div>
        </div>
        <h1 className="font-bold text-black text-xl mb-4">Profile type</h1>
        <div className="profile-section border-base-content">
          <label className="mb-1 text-sm">Account Type</label>
          <select
            className="select profile-item outline-none border-base-content block mt-1"
            onChange={(e) =>
              setProfileData({ ...profileData, type: e.target.value as AccountType })
            }
          >
            <option value="standard" selected={profileData.type === "standard"}>
              Standard
            </option>
            <option value="charity" selected={profileData.type === "charity"}>
              Charity
            </option>
          </select>
        </div>
        <h1 className="font-bold text-black text-xl mb-4">Profile appearance</h1>
        <div className="profile-section border-base-content">
          <label className="mb-1 text-md text-white">Profile picture</label>
          <label className="mb-1 text-sm text-white !font-normal">
            We recommend size 200 x 200 px
          </label>
          <div className="flex mb-[48px] mt-4">
            <div className="profile-box w-[300px] h-[328px] flex justify-center items-center mr-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {avatarUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="object-cover !border-base-content rounded-full w-[200px] h-[200px]"
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
            className="input input-bordered border-base-content profile-item mt-1 block w-full outline-none"
            value={profileData.title || ""}
            onChange={(e) => setProfileData({ ...profileData, title: e.target.value })}
            disabled={isLoading}
          />
          <label className="mb-1 text-md text-white">Bio</label>
          <textarea
            className="textarea textarea-bordered border-base-content profile-item mt-1 block w-full outline-none focus:border-indigo-500 sm:text-sm p-4 h-[160px]"
            rows={4}
            value={profileData.bio || ""}
            onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
            disabled={isLoading}
          />
          <label className="mb-1 text-md text-white">Location(Country)</label>
          <select
            className="select profile-item outline-none border-base-content block mt-1"
            onChange={(e) => {
              setProfileData({ ...profileData, location: e.target.value });
              console.log(e.target.value);
            }}
          >
            {Countries.map((c) => (
              <option
                key={`country-option-${c.code}`}
                value={c.name}
                selected={profileData.location === c.name}
              >
                {c.name}
              </option>
            ))}
          </select>
          {profileData.type === "charity" && (
            <>
              <label className="mb-1 text-md text-white">
                When was the charity founded?
              </label>
              <input
                type="date"
                className="input input-bordered border-base-content profile-item mt-1 block w-full outline-none"
                value={
                  moment(profileData.charityProperty?.foundedAt).format("YYYY-MM-DD") ||
                  ""
                }
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    charityProperty: {
                      ...profileData.charityProperty,
                      foundedAt: e.target.value,
                    },
                  })
                }
                disabled={isLoading}
              />
              <label className="mb-1 text-md text-white">
                How many employees does the charity have?
              </label>
              <input
                type="number"
                className="input input-bordered border-base-content profile-item mt-1 block w-full outline-none"
                value={profileData.charityProperty?.employee || ""}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    charityProperty: {
                      ...profileData.charityProperty,
                      employee: Number(e.target.value),
                    },
                  })
                }
                disabled={isLoading}
              />
              <label className="mb-1 text-md text-white">
                Who were the founders of the charityProperty?
              </label>
              <input
                type="text"
                className="input input-bordered border-base-content profile-item mt-1 block w-full outline-none"
                value={profileData.charityProperty?.founders || ""}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    charityProperty: {
                      ...profileData.charityProperty,
                      founders: e.target.value,
                    },
                  })
                }
                disabled={isLoading}
              />
              <label className="mb-1 text-md text-white">
                What is your organisations business number?
              </label>
              <input
                type="text"
                className="input input-bordered border-base-content profile-item mt-1 block w-full outline-none"
                value={profileData.charityProperty?.phone || ""}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    charityProperty: {
                      ...profileData.charityProperty,
                      phone: e.target.value,
                    },
                  })
                }
                disabled={isLoading}
              />
              <label className="mb-2 text-md text-white">
                What causes does your charity help with?
              </label>
              <label
                htmlFor="modal-add-cause"
                className="btn btn-outline w-[140px] text-white mb-3"
              >
                ADD Cause
              </label>
              <input type="checkbox" id="modal-add-cause" className="modal-toggle" />
              <label htmlFor="modal-add-cause" className="modal cursor-pointer">
                <label className="modal-box relative bg-deep-dark">
                  <h1 className="text-lg">Select Link</h1>
                  <div className="flex mt-2">
                    <select className="select profile-item capitalize outline-none block mr-2 !w-auto">
                      {SocialLinks.map((l) => (
                        <option
                          className="capitalize"
                          key={`country-option-${l.name}`}
                          value={l.name}
                        >
                          {l.name}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      className="input input-bordered border-base-content profile-item block w-full outline-none !w-auto flex-1"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>
                  <div className="flex justify-end">
                    <label className="btn btn-outline border-base-content" htmlFor="modal-add-cause">
                      Add
                    </label>
                  </div>
                </label>
              </label>
            </>
          )}
          <label className="mb-2 text-md text-white">Links</label>
          {profileData.socials?.length ? (
            <div className="rounded-xl border-[1px] mb-4">
              {profileData.socials.map((link, index) => (
                <div
                  key={`social-media-${index}`}
                  className="flex items-center p-4 border-b-[1px] last:border-b-0 justify-between"
                >
                  <div className="flex">
                    <div className="w-[30px] h-[30px] flex items-center justify-center mr-4">
                      {getSocialIcon(link)}
                    </div>
                    <span className="text-md text-white">{link.link}</span>
                  </div>
                  <span
                    className="cursor-pointer hover:text-white"
                    onClick={() => handleRemoveLink(index)}
                  >
                    <XIcon className="w-5 h-5" />
                  </span>
                </div>
              ))}
            </div>
          ) : null}
          <label
            htmlFor="modal-add-link"
            className="btn btn-outline border-base-content w-[140px]"
          >
            ADD LINK
          </label>
          <input type="checkbox" id="modal-add-link" className="modal-toggle" />
          <label htmlFor="modal-add-link" className="modal cursor-pointer">
            <label className="modal-box bg-white relative">
              <h1 className="text-lg">Select Link</h1>
              <div className="flex mt-2">
                <select
                  className="select profile-item capitalize outline-none block mr-2 !w-auto border-base-content"
                  onChange={(e) => setLink({ ...link, social: e.target.value })}
                >
                  {SocialLinks.map((l) => (
                    <option
                      className="capitalize"
                      key={`country-option-${l.name}`}
                      value={l.name}
                      selected={link.social === l.name}
                    >
                      {l.name}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  className="input input-bordered border-base-content profile-item block w-full outline-none !w-auto flex-1"
                  value={link.link}
                  onChange={(e) => setLink({ ...link, link: e.target.value })}
                  disabled={isLoading}
                />
              </div>
              <div className="flex justify-end">
                <label
                  className="btn btn-outline"
                  htmlFor="modal-add-link"
                  onClick={handleAddLink}
                >
                  Add
                </label>
              </div>
            </label>
          </label>
        </div>
        <h1 className="font-bold text-black text-xl mb-4">Profile Theme</h1>
        <div className="profile-section border-base-content">
          <div className="flex">
            <div
              className={`profile-box w-[300px] h-[328px] flex justify-center items-center mr-8`}
              style={{
                background: profileData.banner || "white",
              }}
            >
              {bannerUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="object-cover rounded-full w-[200px] h-[200px]"
                  src={bannerUrl}
                  alt="banner"
                />
              )}
              <input
                ref={bannerRef}
                type="file"
                hidden
                onChange={handleBannerFileSelect}
              />
            </div>
            <div className="flex flex-col flex-1">
              <div className="dropdown dropdown-top">
                <label
                  tabIndex={0}
                  className="btn profile-primary-button text-lg font-bold rounded-[30px] !text-white w-full normal-case"
                >
                  Pick a theme
                </label>
                <div tabIndex={0} className="dropdown-content">
                  <SwatchesPicker
                    color={profileData.banner}
                    onChangeComplete={handleBannerSelect}
                  />
                </div>
              </div>
              <button
                className="btn profile-primary-button text-lg font-bold rounded-[30px] text-white w-full mt-4 normal-case"
                onClick={() => bannerRef.current?.click()}
              >
                Pick an image
              </button>
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
