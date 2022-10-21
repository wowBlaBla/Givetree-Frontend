import axios from "axios";
import { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_USER, IStore } from "../../store/reducers/auth.reducer";
import { updateAuthed } from "../../store/actions/auth.action";
import { CharityProperties } from "../../typed/charity";
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

export const HomeSettings: FC = () => {
  const authedUser = useSelector<IStore, AUTH_USER | undefined>(
    (state) => state.auth.authedUser
  );
  const dispatch = useDispatch();

  const [profileData, setProfileData] = useState<ProfileData>({});

  const [isLoading, setLoading] = useState<boolean>(false);

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
    }
  }, [authedUser]);

  const updateProfile = async () => {
    try {
      if (authedUser) {
        const data = { ...profileData };
        setLoading(true);
        const res = await axios.put(
          `${process.env.NEXT_PUBLIC_API}/api/users/profile`,
          data,
          {
            headers: {
              Authorization: `Bearer ${authedUser.accessToken}`,
            },
          }
        );

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
                  checked={profileData.donation}
                  onClick={() =>
                    setProfileData({
                      ...profileData,
                      donation: !profileData.donation,
                    })
                  }
                />
              </label>
            </div>
          </div>
          <div className="flex px-6 py-3 border-b border-base-content items-center justify-between">
            <label className="text-md text-white">Will you accept donations?</label>
            <button className="btn profile-setting-button text-lg rounded-xl text-white">
              Add
            </button>
          </div>
          <div className="flex px-6 py-3 border-b border-base-content items-center justify-between">
            <label className="text-md text-white">Are donations tax deducatible?</label>
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
          <div className="flex px-6 py-3 items-center justify-between">
            <label className="text-md text-white">Add your receipt details</label>
            <button className="btn profile-setting-button text-lg rounded-xl text-white">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
