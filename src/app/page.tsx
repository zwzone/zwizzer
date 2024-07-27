import Sidebar from "@src/components/Sidebar";

export default function Home() {
  return (
    <div className="flex h-full flex-1">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <main className="flex-center h-full flex-1 bg-primary text-center text-6xl font-bold opacity-10">
        Main Content
      </main>
    </div>
  );
}
