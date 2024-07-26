import { Button } from "@components/ui/button";
import { House } from "lucide-react";
import { UserRound } from "lucide-react";
import { PenTool } from "lucide-react";

const NAVIGATION_BAR = [
  {
    title: "Home",
    icon: <House />,
    href: "/",
  },
  {
    title: "Profile",
    icon: <UserRound />,
    href: "/profile",
  },
];

export default function Home() {
  return (
    <div className="flex h-full flex-1">
      {/* Sidebar */}
      <section className="flex h-full flex-col items-center gap-6 px-2 py-4">
        {NAVIGATION_BAR.map((item) => (
          <Button
            key={item.title}
            variant="outline"
            className="flex-center size-14 gap-1 rounded-full"
          >
            {item.icon}
            <span className="hidden">{item.title}</span>
          </Button>
        ))}
        <Button className="flex-center size-14 rounded-full">
          <PenTool />
          <span className="hidden">Post</span>
        </Button>
      </section>
      {/* Main Content */}
      <main className="flex-center h-full flex-1 bg-slate-600">
        &quot;MainContent&quot;
      </main>
    </div>
  );
}
