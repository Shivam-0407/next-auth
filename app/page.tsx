import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[linear-gradient(90deg,_rgba(131,58,180,1)_0%,_rgba(253,29,29,1)_50%,_rgba(252,176,69,1)_100%)]">
      <div className="space-y-6 text-center">
        <div
          className={cn(
            "text-6xl font-semibold drop-shadow-md text-white",
            font.className
          )}
        >
          🔒 Auth
        </div>
        <p className="text-white text-lg">A simple authentication service</p>
        <LoginButton asChild>
          <Button variant="secondary" size={"lg"}>
            Sign In
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
