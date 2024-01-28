import { cn } from "@/lib/utils";
import Image from "next/image";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center">
      <h1 className="flex gap-x-2 items-center text-3xl font-black">
        <Image src={"/lock.png"} alt="logo" width={40} height={40} />
        <span>Auth</span>
      </h1>
      <p className="text-muted-foreground text-md">{label}</p>
    </div>
  );
};
