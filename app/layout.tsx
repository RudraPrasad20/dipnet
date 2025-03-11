import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Appbar } from "@/components/appBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dipnet",
  description: "A Space to Learn, Share & Grow! Find Results & Communicate With Others",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <Appbar />
            {children}
            </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
