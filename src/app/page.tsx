import Sidebar from "@src/components/Sidebar";
import Textpost from "@src/components/Textpost";
import { Avatar, AvatarFallback, AvatarImage } from "@src/components/ui/avatar";
import { Button } from "@src/components/ui/button";

export default function Home() {
  return (
    <div className="flex-center size-full">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <main className="h-full max-w-[768px] flex-grow xl:max-w-[1024px]">
        <section className="min-h-full border-x">
          {/* Post Form */}
          <div className="flex flex-col gap-4 border-b px-2 py-4 sm:flex-row sm:items-start">
            <div>
              <Avatar className="size-10 justify-self-end">
                <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
                <AvatarFallback>ZW</AvatarFallback>
              </Avatar>
            </div>
            {/* Post Input */}
            <div className="flex flex-grow flex-col gap-8">
              <Textpost />
              <Button type="submit" className="self-end rounded-full">
                Post
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
