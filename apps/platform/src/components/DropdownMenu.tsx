import { FC } from "react";
import { Link } from "wouter";
import { useAuth } from "../context/AuthContext";
import avatar from "../temp/images/campaigns/mulgakongz-collection.png";

export const DropdownMenu: FC = () => {
  const { authUser, logout } = useAuth();

  return (
    <div className="dropdown dropdown-hover dropdown-end w-12 h-12">
      <label tabIndex={0}>
        <div className="avatar online">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="w-12 rounded-full border-2 border-grey-500 cursor-pointer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={authUser?.user.profileImage || avatar.src} alt="profile avatar" />
          </div>
        </div>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-deep-dark rounded-box w-52 rounded-t-none"
      >
        <li>
          <Link href="/profile/home">Profile</Link>
        </li>
        <li>
          <span onClick={logout}>Log out</span>
        </li>
      </ul>
    </div>
  );
};
