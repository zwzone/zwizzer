import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@components/theme-provider";
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
      <body className={`${primaryFont.className} min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
