import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "wouter";
import { updateAddress, updateAuthed } from "../store/actions/auth.action";
import { AUTH_USER, IStore } from "../store/reducers/auth.reducer";
import avatar from "../temp/images/campaigns/mulgakongz-collection.png";

export const DropdownMenu: FC = () => {
  const dispatch = useDispatch();
  const [, setLocation] = useLocation();

  const authedUser = useSelector<IStore, AUTH_USER | undefined>(
    (state) => state.auth.authedUser
  );

  const logout = () => {
    dispatch(updateAddress(""));
    dispatch(updateAuthed(undefined));
    localStorage.clear();
    setLocation("/");
  };

  return (
    <div className="dropdown dropdown-hover dropdown-end w-12 h-12">
      <label tabIndex={0}>
        <div className="avatar online">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="w-12 rounded-full border-2 border-grey-500 cursor-pointer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={authedUser?.user.profileImage || avatar.src} alt="profile avatar" />
          </div>
        </div>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link href="/profile/creator/home">Profile</Link>
        </li>
        <li>
          <span onClick={logout}>Log out</span>
        </li>
      </ul>
    </div>
  );
};
