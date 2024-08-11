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
        size="icon"
        className="absolute right-2 top-4 rounded-full"
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
          <div className="flex-center text-sm sm:text-base">
            <Button
              variant="ghost"
              size="icon"
              className="size-6 rounded-full sm:size-10"
            >
              <MessageCircle className="size-4 sm:size-6" />
            </Button>
            {replies}
          </div>
          <div className="flex-center text-sm sm:text-base">
            <Button
              variant="ghost"
              size="icon"
              className="size-6 rounded-full sm:size-10"
            >
              <Repeat2 className="size-4 sm:size-6" />
            </Button>
            {reposts}
          </div>
          <div className="flex-center text-sm sm:text-base">
            <Button
              variant="ghost"
              size="icon"
              className="size-6 rounded-full sm:size-10"
            >
              <Heart className="size-4 sm:size-6" />
            </Button>
            {likes}
          </div>
          <div className="flex-center">
            <Button
              variant="ghost"
              size="icon"
              className="size-6 rounded-full sm:size-10"
            >
              <Bookmark className="size-4 sm:size-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="size-6 rounded-full sm:size-10"
            >
              <Share className="size-4 sm:size-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
