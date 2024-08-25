import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-center h-screen flex-col lg:flex-row">{children}</div>
  );
}
