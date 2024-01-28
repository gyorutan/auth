"use client";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };
  return (
    <div className="bg-white p-10 rounded-xl">
      <button
        onClick={onClick}
        className="m-4 py-2 px-5 text-white rounded-xl bg-red-500 hover:bg-red-500/90"
        type="submit"
      >
        로그아웃
      </button>
    </div>
  );
};

export default SettingsPage;
