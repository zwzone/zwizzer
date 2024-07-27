import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@components/theme-provider";
import { ModeToggle } from "@components/mode-toggle";
import { Origami } from "lucide-react";
import "./globals.css";

const primaryFont = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zwizzer",
  description: "A simple social media platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${primaryFont.className} flex h-screen flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="flex-between px-2 py-4">
            <div className="flex-center flex-1">
              <div className="flex items-center justify-center gap-4 rounded-full bg-primary px-3 py-2">
                <Origami
                  size={32}
                  className="rounded-full bg-primary-foreground p-1 text-primary"
                />
                <h3 className="text-xl font-bold text-primary-foreground">
                  Zwizzer
                </h3>
              </div>
            </div>
            <ModeToggle />
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
