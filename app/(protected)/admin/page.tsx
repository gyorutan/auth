"use client";

import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useCurrentRole } from "@/hooks/use-current-role";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";

const AdminPage = () => {
  const role = useCurrentRole();

  const onApiRouteClick = () => {
    fetch("/api/admin").then((res) => {
      if (res.ok) {
        toast.success("API 라우트 접근 허용됨");
      } else {
        toast.error("API 라우트 접근 금지됨");
      }
    });
  };

  const onServerActionClick = () => {};

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">관리자</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="페이지를 볼 권한이 있습니다" />
        </RoleGate>
        <div
          className="flex flex-row items-center justify-between
         rounded-lg border p-3 shadow-md"
        >
          <p className="text-sm font-medium">관리자 전용 API-라우트</p>
          <Button onClick={onApiRouteClick}>클릭하여 테스트</Button>
        </div>
        <div
          className="flex flex-row items-center justify-between
         rounded-lg border p-3 shadow-md"
        >
          <p className="text-sm font-medium">관리자 전용 서버 액션</p>
          <Button onClick={onServerActionClick}>클릭하여 테스트</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
