"use client";

import { logOut } from "@/actions/logout";

type LogoutButtonProps = {
  children?: React.ReactNode;
};

export default function LogoutButton({ children }: LogoutButtonProps) {
  const onClick = () => {
    logOut();
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
}
