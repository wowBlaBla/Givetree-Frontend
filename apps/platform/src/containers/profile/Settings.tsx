import { FC, useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

export const Settings: FC = () => {
  const { authUser } = useAuth();

  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    if (authUser && authUser.user) {
      setUserName(authUser.user.userName || "");
      setEmail(authUser.user.email || "");
    }
  }, [authUser]);

  return (
    <div className="profile">
      <div className="p-8 max-w-layout-xl">
        <h1 className="font-bold text-black text-[24px] mb-2">Settings</h1>
        <div className="profile-section">
          <label className="mb-1 text-md text-white">Email</label>
          <input
            readOnly
            type="email"
            className="input input-bordered border-base-content profile-item mt-1 block w-full outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="mb-1 text-md text-white">Username</label>
          <input
            type="text"
            readOnly
            className="input input-bordered border-base-content profile-item mt-1 block w-full outline-none"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
