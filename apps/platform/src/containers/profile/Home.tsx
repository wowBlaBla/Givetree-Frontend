/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { SwatchesPicker, ColorResult } from "react-color";
import moment from "moment";
import { Countries, SocialLinks } from "../../utils/constants";
import { SocialLinkPatterns } from "../../utils/socialLinkPatterns";
import { XIcon } from "@heroicons/react/outline";
import { AccountType, useAuth, User, UserLinkData } from "../../context/AuthContext";
import { checkIsBannerImage } from "../../utils/utils";

type ProfileData = Partial<
  Omit<
    User,
    | "id"
    | "createdAt"
    | "updatedAt"
    | "email"
    | "userName"
    | "walletAddresses"
    | "refreshTokens"
  >
>;

export const Home: FC = () => {
  const { authUser, updateUserData } = useAuth();
  const [editType, setEditType] = useState<"detail" | "branding" | "settings">("detail");
  const [profileData, setProfileData] = useState<ProfileData>({});

  const [link, setLink] = useState<UserLinkData>({
    social: SocialLinks[0].name,
    link: "",
  });

  const [isLoading, setLoading] = useState<boolean>(false);

  const [avatar, setAvatar] = useState<File>();
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const avatarRef = useRef<HTMLInputElement>(null);

  const [banner, setBanner] = useState<File>();
  const [bannerUrl, setBannerUrl] = useState<string>("");
  const bannerRef = useRef<HTMLInputElement>(null);
  const [isBannerImage, setIsBannerImage] = useState<boolean>(false);

  const getSocialIcon = useCallback((link: UserLinkData) => {
    const social = SocialLinks.find((s) => s.name === link.social);
    if (social) {
      const IconComponent = social.icon;
      return <IconComponent />;
    }
    return null;
  }, []);

  useEffect(() => {
    if (authUser && authUser.user) {
      const pData: ProfileData = {
        type: authUser.user.type,
        title: authUser.user.title,
        bio: authUser.user.bio,
        location: authUser.user.location,
        profileImage: authUser.user.profileImage,
        banner: authUser.user.banner,
        visibility: authUser.user.visibility,
        tax: authUser.user.tax,
      };

      if (authUser.user.socials) {
        pData.socials = authUser.user.socials.map((s) => ({
          social: s.social,
          link: s.link,
        }));
      }

      if (authUser.user.charityProperty) {
        const { foundedAt, employee, founders, businessNumber, causes } =
          authUser.user.charityProperty;
        pData.charityProperty = {
          foundedAt,
          employee,
          founders,
          businessNumber,
          causes,
        };
      }

      setIsBannerImage(checkIsBannerImage(authUser.user.banner));
      setProfileData(pData);
    }
  }, [authUser]);

  const updateProfile = async () => {
    try {
      if (authUser) {
        const data = { ...profileData };
        if (data.type === "standard") {
          delete data.charityProperty;
        }

        let res;
        setLoading(true);

        if (avatar || banner) {
          const imageBody = new FormData();
          if (avatar) {
            imageBody.append("profile", avatar);
            delete data.profileImage;
          }

          if (banner) {
            imageBody.append("banner", banner);
            delete data.banner;
          }

          res = await axios.put(
            `${process.env.NEXT_PUBLIC_API}/api/users/profile/upload`,
            imageBody,
            {
              headers: {
                Authorization: `Bearer ${authUser.accessToken}`,
                "Content-Type": "multipart/form-data",
              },
            }
          );
        }

        res = await axios.put(`${process.env.NEXT_PUBLIC_API}/api/users/profile`, data, {
          headers: {
            Authorization: `Bearer ${authUser.accessToken}`,
          },
        });
        updateUserData(res.data);

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
      setProfileData((prev) => ({
        ...prev,
        banner: "",
      }));
    }
  };

  const handleBannerSelect = (color: ColorResult) => {
    setBanner(undefined);
    setBannerUrl("");
    setProfileData((prev) => ({
      ...prev,
      banner: color.hex,
    }));
  };

  const handleBannerRemove = () => {
    setBanner(undefined);
    setBannerUrl("");
    setProfileData({
      ...profileData,
      banner: "",
    });
  };

  const handleAddLink = () => {
    if (link.social && link.link) {
      const valid = SocialLinkPatterns(link.social, link.link);
      if (!valid) {
        return;
      }
      setProfileData({
        ...profileData,
        socials: [
          ...(profileData.socials || []).filter((l) => l.social !== link.social),
          link,
        ],
      });
      setLink({ social: SocialLinks[0].name, link: "" });
    }
  };

  const handleRemoveLink = (link: UserLinkData) => {
    setProfileData({
      ...profileData,
      socials: (profileData.socials || []).filter((l) => l.social !== link.social),
    });
  };
  
  return (
    <div className="profile">
      <div className="profile-save-section px-8 pt-8">
        <h1 className="font-bold text-black text-[24px] mb-4">My Profile</h1>
        <div className="flex flex-col lg:flex-row justify-between max-w-[825px] items-start lg:items-center">
          <div className="flex lg:hidden mb-2">
            <button className="btn text-white h-[30px] min-h-0 mr-4 bg-transparent text-[#0075FF] border-[#0075FF]">
              View Profile
            </button>
            <button
              className="btn text-white h-[30px] min-h-0 bg-[#0075FF] border border-[#0075FF]"
              onClick={updateProfile}
            >
              Publish
            </button>
          </div>
          <div className="tabs">
            <div
              className={`tab ${editType === "detail" ? "tab-active" : ""}`}
              onClick={() => setEditType("detail")}
            >
              Basic details
            </div>
            <div
              className={`tab ${editType === "branding" ? "tab-active" : ""}`}
              onClick={() => setEditType("branding")}
            >
              Branding
            </div>
            <div
              className={`tab ${editType === "settings" ? "tab-active" : ""}`}
              onClick={() => setEditType("settings")}
            >
              Settings
            </div>
          </div>
          <div className="hidden lg:flex">
            <button className="btn text-white h-[30px] min-h-0 mr-4 bg-transparent text-[#0075FF] border-[#0075FF]">
              View Profile
            </button>
            <button
              className="btn text-white h-[30px] min-h-0 bg-[#0075FF] border border-[#0075FF]"
              onClick={updateProfile}
            >
              Publish
            </button>
          </div>
        </div>
      </div>
      <div className="p-8 max-w-[825px]">
        {editType === "detail" ? (
          <>
            <h1 className="font-bold text-black text-xl mb-1">Profile type</h1>
            <label className="text-sm text-black !font-normal">
              Please select what type of profile you would like to create. The two options
              are standard and charity.
            </label>
            <div className="mt-4 profile-section border-base-content">
              <label className="mb-1 text-sm">Account Type</label>
              <select
                className="select profile-item outline-none border-base-content block mt-1"
                value={profileData.type || "standard"}
                onChange={(e) => {
                  setProfileData({ ...profileData, type: e.target.value as AccountType });
                }}
              >
                <option value="standard">Standard</option>
                <option value="charity">Charity</option>
              </select>
            </div>
            <h1 className="font-bold text-black text-xl mb-4">Basic details</h1>
            <div className="profile-section border-base-content">
              <label className="mb-1 text-md text-white">Profile title</label>
              <input
                type="text"
                className="input input-bordered border-base-content profile-item mt-1 block w-full outline-none"
                value={profileData.title || ""}
                onChange={(e) =>
                  setProfileData({ ...profileData, title: e.target.value })
                }
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
                value={profileData.location || Countries[0].name}
                onChange={(e) => {
                  setProfileData({ ...profileData, location: e.target.value });
                }}
              >
                {Countries.map((c) => (
                  <option key={`country-option-${c.code}`} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
              <label className="mb-2 text-md text-white">Links</label>
              {profileData.socials?.length ? (
                <div className="rounded-xl border-[1px] mb-4">
                  {profileData.socials.map((link, index) => (
                    <div
                      key={`social-media-${index}`}
                      className="flex items-center p-4 border-b-[1px] last:border-b-0 justify-between text-black"
                    >
                      <div className="flex">
                        <div className="w-[30px] h-[30px] flex items-center justify-center mr-4">
                          {getSocialIcon(link)}
                        </div>
                        <span className="text-md">{link.link}</span>
                      </div>
                      <span
                        className="cursor-pointer"
                        onClick={() => handleRemoveLink(link)}
                      >
                        <XIcon className="w-5 h-5" />
                      </span>
                    </div>
                  ))}
                </div>
              ) : null}
              <label
                htmlFor="modal-add-link"
                className="btn btn-outline border-base-content w-[140px] mb-3"
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
                      value={link.social}
                      onChange={(e) => setLink({ ...link, social: e.target.value })}
                    >
                      {SocialLinks.map((l) => (
                        <option
                          className="capitalize"
                          key={`country-option-${l.name}`}
                          value={l.name}
                          //selected={link.social === l.name}
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
            {profileData.type === "charity" && (
              <>
                <h1 className="font-bold text-black text-xl mb-1">Charity Properties</h1>
                <div className="mt-4 profile-section border-base-content">
                  <label className="mb-1 text-md text-white">
                    When was the charity founded?
                  </label>
                  <input
                    type="date"
                    className="input input-bordered border-base-content profile-item mt-1 block w-full outline-none"
                    value={
                      moment(profileData.charityProperty?.foundedAt).format(
                        "YYYY-MM-DD"
                      ) || ""
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
                    value={profileData.charityProperty?.businessNumber || ""}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        charityProperty: {
                          ...profileData.charityProperty,
                          businessNumber: e.target.value,
                        },
                      })
                    }
                    disabled={isLoading}
                  />
                  {/* <label className="mb-2 text-md text-white">
                    What causes does your charity help with?
                  </label>
                  <label
                    htmlFor="modal-add-cause"
                    className="btn btn-outline border-base-content w-[140px] text-white"
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
                          disabled={isLoading}
                        />
                      </div>
                      <div className="flex justify-end">
                        <label
                          className="btn btn-outline border-base-content"
                          htmlFor="modal-add-cause"
                        >
                          Add
                        </label>
                      </div>
                    </label>
                  </label> */}
                </div>
              </>
            )}
          </>
        ) : editType === "branding" ? (
          <>
            <h1 className="font-bold text-black text-xl">Profile picture</h1>
            <label className="text-sm text-black !font-normal">
              Your profile picture will appear where your profile is presented on GiveTree
            </label>
            <div className="flex flex-col lg:flex-row mb-[48px] mt-4">
              <div className="profile-box w-full lg:w-[300px] h-[250px] flex justify-center items-center mr-0 lg:mr-8 mb-8 lg:mb-0">
                {(avatarUrl || profileData.profileImage) && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className="object-cover !border-base-content rounded-full w-[200px] h-[200px]"
                    src={avatarUrl || profileData.profileImage}
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
                <label className="text-sm text-black !font-normal leading-relaxed">
                  We recommend size 98 x 98 pixels and 4MB or less. Use a PNG or GIF (no
                  animations) file. Make sure that your picture follows the GiveTree
                  community guidelines.
                </label>
                <button
                  className="btn profile-primary-button text-lg font-bold rounded-[30px] text-white w-full mt-4 mb-4 normal-case"
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
            <h1 className="font-bold text-black text-xl">Banner image</h1>
            <label className="text-sm text-black !font-normal">
              Your banner image will cover background where your profile is presented on
              GiveTree
            </label>
            <div className="flex flex-col lg:flex-row mb-[48px] mt-4">
              <div
                className={`profile-box w-full lg:w-[300px] h-[250px] flex justify-center items-center mr-0 lg:mr-8 mb-8 lg:mb-0`}
                style={{
                  background:
                    !isBannerImage && profileData.banner
                      ? profileData.banner
                      : "white",
                }}
              >
                {(bannerUrl || (isBannerImage && profileData.banner)) && (
                  <img
                    className="object-cover"
                    src={bannerUrl || profileData.banner}
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
                <label className="text-sm text-black !font-normal leading-relaxed">
                  For the best results on all devices use an image thats at least 2048 x
                  1152 pixels and 6 MB or less.
                </label>
                <div className="dropdown dropdown-top mt-4">
                  <label
                    tabIndex={0}
                    className="btn profile-primary-button text-lg font-bold rounded-[30px] !text-white w-full normal-case"
                  >
                    Pick a theme
                  </label>
                  <div tabIndex={0} className="dropdown-content">
                    <SwatchesPicker
                      color={profileData.banner || ""}
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
          </>
        ) : (
          <>
            <h1 className="font-bold text-black text-xl mb-4">Settings</h1>
            <div className="profile-section border-base-content relative !p-0 !mb-0">
              <div className="flex px-6 py-3 border-b border-b border-base-content items-center justify-between">
                <label className="text-md text-white">Profile Visibility</label>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      className="toggle"
                      checked={profileData.visibility === "public"}
                      onClick={() =>
                        setProfileData({
                          ...profileData,
                          visibility:
                            profileData.visibility === "public" ? "private" : "public",
                        })
                      }
                    />
                  </label>
                </div>
              </div>
              <div className="flex px-6 py-3 border-b border-base-content items-center justify-between">
                <label className="text-md text-white">Will you accept donations?</label>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      className="toggle"
                      // checked={profileData.donation}
                      // onClick={() =>
                      //   setProfileData({
                      //     ...profileData,
                      //     donation: !profileData.donation,
                      //   })
                      // }
                    />
                  </label>
                </div>
              </div>
              <div className="flex px-6 py-3 border-b border-base-content items-center justify-between">
                <label className="text-md text-white">
                  Which cryptocurrencies do you accept?
                </label>
                <button className="btn profile-setting-button text-lg rounded-xl text-white">
                  Add
                </button>
              </div>
              <div className="flex px-6 py-3 border-b border-base-content items-center justify-between">
                <label className="text-md text-white">
                  Are donations tax deducatible?
                </label>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      className="toggle"
                      checked={profileData.tax}
                      onClick={() =>
                        setProfileData({
                          ...profileData,
                          tax: !profileData.tax,
                        })
                      }
                    />
                  </label>
                </div>
              </div>
              <div className="flex px-6 py-3 border-b border-base-content items-center justify-between">
                <label className="text-md text-white">Add your receipt details</label>
                <button className="btn profile-setting-button text-lg rounded-xl text-white">
                  Add
                </button>
              </div>
              <div className="flex px-6 py-3 items-center justify-between">
                <label className="text-md text-white">Profile verifiication status</label>
                <label className="text-md !text-[#F10000] font-bold text-left">
                  Not verified
                </label>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
