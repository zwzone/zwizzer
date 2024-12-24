import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex h-screen max-w-7xl flex-col items-center justify-around sm:flex-row">
      {children}
    </div>
  );
}
