import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import {
  Ellipsis,
  MessageCircle,
  Repeat2,
  Heart,
  Bookmark,
  Share,
} from "lucide-react";
import { Button } from "@components/ui/button";

export default function Zweez({
  avatar,
  fullname,
  username,
  content,
  replies,
  reposts,
  likes,
}: {
  avatar: string;
  fullname: string;
  username: string;
  content: string;
  replies: number;
  reposts: number;
  likes: number;
}) {
  return (
    <div className="relative flex flex-col gap-4 border-b p-4 sm:flex-row sm:items-start sm:px-8">
      <Button
        variant="ghost"
        className="absolute right-2 top-4 rounded-full px-2"
      >
        <Ellipsis className="size-6" />
      </Button>
      <Avatar className="size-8 justify-self-end">
        <AvatarImage src={avatar} alt="avatar" />
        <AvatarFallback>ZW</AvatarFallback>
      </Avatar>
      <div className="flex flex-grow flex-col gap-4">
        <div className="flex flex-wrap gap-x-2">
          <span className="font-bold leading-none">{fullname}</span>
          <span className="leading-none text-gray-500">{username}</span>
        </div>
        <div>{content}</div>
        <div className="flex-between">
          <div className="flex-center gap-1">
            <Button variant="ghost" className="rounded-full px-2">
              <MessageCircle />
            </Button>
            {replies}
          </div>
          <div className="flex-center gap-1">
            <Button variant="ghost" className="rounded-full px-2">
              <Repeat2 />
            </Button>
            {reposts}
          </div>
          <div className="flex-center gap-1">
            <Button variant="ghost" className="rounded-full px-2">
              <Heart />
            </Button>
            {likes}
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" className="rounded-full px-2">
              <Bookmark />
            </Button>
            <Button variant="ghost" className="rounded-full px-2">
              <Share />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
