import React from "react";
import Textpost from "@src/components/Textpost";
import { Avatar, AvatarFallback, AvatarImage } from "@src/components/ui/avatar";
import { Button } from "@src/components/ui/button";
import Zweez from "@components/Zweez";

const Zweezs = [
  {
    id: 1,
    avatar: "https://github.com/shadcn.png",
    fullname: "Zakaria Wina",
    username: "@zwzone",
    content: "Hello, World!",
    replies: 1234,
    reposts: 1324,
    likes: 445,
  },
  {
    id: 2,
    avatar: "https://github.com/shadcn.png",
    fullname: "Achraf Ahrach",
    username: "@aachraf",
    content: "Hello, World Again!",
    replies: 1234,
    reposts: 1324,
    likes: 445,
  },
  {
    id: 3,
    avatar: "https://github.com/shadcn.png",
    fullname: "Ayoub Ayoub",
    username: "@AAYY",
    content: "What is happening here guys?",
    replies: 1234,
    reposts: 1324,
    likes: 445,
  },
  {
    id: 4,
    avatar: "https://github.com/shadcn.png",
    fullname: "Ayoub Ayoub",
    username: "@AAYY",
    content: "What is happening here guys?",
    replies: 1234,
    reposts: 1324,
    likes: 445,
  },
  {
    id: 5,
    avatar: "https://github.com/shadcn.png",
    fullname: "Ayoub Ayoub",
    username: "@AAYY",
    content: "What is happening here guys?",
    replies: 1234,
    reposts: 1324,
    likes: 445,
  },
];

export default function MainContent() {
  return (
    <section>
      {/* Post Form */}
      <div className="flex flex-col gap-4 border-b p-4 sm:flex-row sm:items-start sm:px-8">
        <Avatar className="size-12 justify-self-end">
          <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
          <AvatarFallback>ZW</AvatarFallback>
        </Avatar>
        {/* Post Input */}
        <div className="flex flex-grow flex-col gap-8">
          <Textpost />
          <Button type="submit" className="rounded-full px-8 sm:self-end">
            Post
          </Button>
        </div>
      </div>
      {/* TODO: Add Zweez components here */}
      {Zweezs.map((zweez) => (
        <Zweez key={zweez.id} {...zweez} />
      ))}
    </section>
  );
}
