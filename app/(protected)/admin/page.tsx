"use client";
import { admin } from "@/actions/admin";
import RoleGate from "@/components/auth/role-gate";
import FormSuccess from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";

export default function AdminPage() {
  const onAdminServerClick = () => {
    admin().then((response) => {
      if (response.success) {
        toast.success(response.success);
      } else {
        toast.error(response.error);
      }
    });
  };
  const onAPIRouteClick = () => {
    fetch("/api/admin").then((data) => {
      if (data.ok) {
        toast.success("Allowed API route for the ADMIN");
      } else {
        toast.error("Only ADMIN users are allowed");
      }
    });
  };
  return (
    <div>
      <Card className="w-[600px]">
        <CardHeader className="text-2xl font-semibold text-center">
          <p>🔑 Admin</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <RoleGate allowedRole={UserRole.ADMIN}>
            <FormSuccess message="Hi there admin" />
          </RoleGate>
          <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
            <p>Admin Only API route</p>
            <Button onClick={onAPIRouteClick}>Click here</Button>
          </div>

          <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
            <p>Admin Only Server route</p>
            <Button onClick={onAdminServerClick}>Click here</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
