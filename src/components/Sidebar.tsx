import { Button } from "@components/ui/button";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Avatar, AvatarImage } from "@src/components/ui/avatar";
import { Bookmark, Ellipsis, House, Origami, Settings } from "lucide-react";
import { UserRound } from "lucide-react";
import { PenTool } from "lucide-react";
import Link from "next/link";

const NAVIGATION_BAR = [
  {
    title: "",
    icon: <Origami />,
  },
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
    icon: <PenTool className="lg:hidden" />,
  },
];

export default function Sidebar() {
  return (
    <section className="flex-between sticky top-0 h-screen flex-col gap-4 self-stretch px-2 py-4">
      <div className="flex flex-col items-center gap-2 lg:items-start">
        {NAVIGATION_BAR.map((item) => (
          <Link
            className={`${item.title === "Post" && "lg:self-stretch"}`}
            key={item.title}
            href={"/" + item.title.toLowerCase()}
          >
            <Button
              variant={item.title !== "Post" ? "ghost" : "default"}
              className="flex-center w-full gap-4 rounded-full px-2"
            >
              {item.icon}
              {item.title && (
                <span
                  className={`hidden lg:inline ${item.title !== "Post" && "lg:pr-4"}`}
                >
                  {item.title}
                </span>
              )}
            </Button>
          </Link>
        ))}
      </div>
      <Button
        variant="ghost"
        className="flex h-14 items-center gap-2 rounded-full p-2"
      >
        <Avatar className="size-10 justify-self-end">
          <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
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
