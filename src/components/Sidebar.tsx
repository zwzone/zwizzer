import { Button } from "@components/ui/button";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Avatar, AvatarImage } from "@src/components/ui/avatar";
import { Ellipsis, House, Icon } from "lucide-react";
import { UserRound } from "lucide-react";
import { PenTool } from "lucide-react";
import Link from "next/link";

const NAVIGATION_BAR = [
  {
    title: "Home",
    icon: <House />,
  },
  {
    title: "Profile",
    icon: <UserRound />,
  },
  {
    title: "Post",
    icon: <PenTool />,
  },
];

export default function Sidebar() {
  return (
    <section className="flex-between h-full flex-col px-2 py-4 lg:w-64">
      <div className="flex-center flex-col gap-6">
        {NAVIGATION_BAR.map((item) => (
          <Link key={item.title} href={"/" + item.title.toLowerCase()}>
            <Button
              variant={item.title !== "Post" ? "outline" : "default"}
              className="flex-center size-14 gap-1 rounded-full p-0"
            >
              {item.icon}
              {item.title !== "Post" && (
                <span className="hidden font-bold lg:inline">{item.title}</span>
              )}
            </Button>
          </Link>
        ))}
      </div>
      <Button
        variant="outline"
        className="flex h-14 items-center gap-2 rounded-full border-none p-2"
      >
        <Avatar className="size-10 justify-self-end">
          <AvatarImage
            src="https://lh3.googleusercontent.com/a/ACg8ocJ4mQsNMUQB2TmYtvYC0Qla9a4P_DT9h921z6Me-v1mjxbQzOZx=s96-c"
            alt="avatar"
          />
          <AvatarFallback>ZW</AvatarFallback>
        </Avatar>
        <div className="flex-center hidden gap-8 lg:flex">
          <div className="flex flex-col items-start">
            <span className="font-bold">Zakaria</span>
            <span className="opacity-50">@zwzone</span>
          </div>
          <Ellipsis />
        </div>
      </Button>
    </section>
  );
}
