"use client";

import { useCurrentRole } from "@/hooks/use-current-role";
import { UserRole } from "@prisma/client";
import FormError from "../form-error";

type RoleGateProps = {
  children: React.ReactNode;
  allowedRole: UserRole;
};

export default function RoleGate({ allowedRole, children }: RoleGateProps) {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return <FormError message={"You are not allowed to be here !! "} />;
  }
  return <div>{children}</div>;
}
