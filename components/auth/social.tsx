"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Social() {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button size="lg" variant="outline" onClick={() => {}} className="flex-1">
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button size="lg" variant="outline" onClick={() => {}} className="flex-1">
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
}
