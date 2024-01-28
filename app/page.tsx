import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="
    flex 
    h-full 
    flex-col 
    items-center 
    justify-center
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800"
    >
      <div className="space-y-6 text-center">
        <h1 className="flex gap-x-4 items-center text-6xl font-black text-white drop-shadow-md">
          <Image src={"/lock.png"} alt="logo" width={60} height={60} />
          <span>Auth</span>
        </h1>
        <p className="text-white text-lg">사용자 인증・인가 튜토리얼</p>
        <div>
          <LoginButton>
            <Button variant={"secondary"} size={"lg"}>
              로그인
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
