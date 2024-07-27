import { Button } from "@components/ui/button";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Avatar, AvatarImage } from "@src/components/ui/avatar";
import { Bookmark, Ellipsis, House, Settings } from "lucide-react";
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
    title: "Bookmarks",
    icon: <Bookmark />,
  },
  {
    title: "Settings",
    icon: <Settings />,
  },
  {
    title: "Post",
    icon: <PenTool className="lg:hidden"/>,
  }
];

export default function Sidebar() {
  return (
    <section className="flex justify-between h-full flex-col px-2 py-4">
      <div className="flex items-center lg:items-start flex-col gap-2">
        {NAVIGATION_BAR.map((item) => (
          <Link className={`${item.title === "Post" && "lg:self-stretch"}`} key={item.title} href={"/" + item.title.toLowerCase()}>
            <Button
              variant={item.title !== "Post" ? "ghost" : "default"}
              className="flex-center gap-4 rounded-full px-2 lg:pr-6 w-full"
            >
              {item.icon}
              <span className="hidden font-bold lg:inline">{item.title}</span>
            </Button>
          </Link>
        ))}
      </div>
      <Button
        variant="ghost"
        className="flex h-14 items-center gap-2 rounded-full p-2"
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
