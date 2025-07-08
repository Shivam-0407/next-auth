"use client";
import UserInfo from "@/components/ui/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

export default function ClientPage() {
  const user = useCurrentUser();

  return (
    <div>
      <UserInfo label="📱 Client component" user={user} />
    </div>
  );
}
