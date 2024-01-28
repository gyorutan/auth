"use client";

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

const ClientPage = () => {
  const user = useCurrentUser();

  return <UserInfo user={user} label="💻 클라이언트 컴포넌트" />;
};

export default ClientPage;
