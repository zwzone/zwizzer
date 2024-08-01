import Sidebar from "@src/components/Sidebar";
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
];

export default function Home() {
  return (
    <div className="flex-center size-full">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <main className="h-full max-w-[768px] flex-grow xl:max-w-[1024px]">
        <section className="min-h-full border-x">
          {/* Post Form */}
          <div className="flex flex-col gap-4 border-b p-4 sm:flex-row sm:items-start sm:px-8">
            <Avatar className="size-12 justify-self-end">
              <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
              <AvatarFallback>ZW</AvatarFallback>
            </Avatar>
            {/* Post Input */}
            <div className="flex flex-grow flex-col gap-8">
              <Textpost />
              <Button type="submit" className="sm:self-end rounded-full px-8">
                Post
              </Button>
            </div>
          </div>
          {/* TODO: Add Zweez components here */}
          {Zweezs.map((zweez) => (
            <Zweez key={zweez.id} {...zweez} />
          ))}
        </section>
      </main>
    </div>
  );
}
