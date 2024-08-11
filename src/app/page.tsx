import Sidebar from "@components/Sidebar";
import MainContent from "@components/MainContent";

export default function Home() {
  return (
    <div className="flex min-h-screen items-stretch justify-center">
      {/* Sidebar */}
      <div>
        <Sidebar />
      </div>
      {/* Main Content */}
      <main className="min-h-screen max-w-3xl flex-grow border-x xl:max-w-[1024px]">
        <MainContent />
      </main>
    </div>
  );
}
