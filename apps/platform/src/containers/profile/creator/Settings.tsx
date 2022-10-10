import axios from "axios";
import { FC, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { SwatchesPicker, ColorResult } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_USER, IStore } from "../../../store/reducers/auth.reducer";
import { updateAuthed } from "../../../store/actions/auth.action";
import { AddIcon } from "../../../components/icons/AddIcon";

export const Settings: FC = () => {
  const authedUser = useSelector<IStore, AUTH_USER | undefined>(
    (state) => state.auth.authedUser
  );
  const dispatch = useDispatch();

  const [viewType, setViewType] = useState<"edit" | "preview">("edit");

  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    if (authedUser && authedUser.user) {
      setUserName(authedUser.user.userName || "");
      setEmail(authedUser.user.email || "");
    }
  }, [authedUser]);

  const updateProfile = async () => {
    try {
      if (authedUser) {
        const data = {
          userName,
          email,
        };

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
  };

  return (
    <div className="profile">
      <div className="profile-save-section px-8">
        <div className="flex justify-between max-w-[632px] items-center justify-end h-[51px]">
          <div className="flex-1" />
          <button
            className="btn bg-[#0075FF] text-white h-[30px] min-h-0"
            onClick={updateProfile}
          >
            Save
          </button>
        </div>
      </div>
      <div className="p-8 max-w-[700px]">
        <div className="profile-section">
          <label className="mb-1 text-md text-white">Email</label>
          <input
            readOnly
            type="email"
            className="input input-bordered profile-item mt-1 block w-full outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="mb-1 text-md text-white">Username</label>
          <input
            type="text"
            readOnly
            className="input input-bordered profile-item mt-1 block w-full outline-none"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
