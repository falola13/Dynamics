import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Rightsidebar from "@/components/Rightsidebar";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dynamic 365",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen flex-col overflow-hidden">
          <Header />
          <div className="flex flex-1 overflow-hidden">
            <div className="h-full">
              <Sidebar />
            </div>

            <main className="scrollable-container flex-1 overflow-y-auto">
              {children}
            </main>
            <aside>
              <Rightsidebar />
            </aside>
          </div>
        </div>
        <ToastContainer />
      </body>
    </html>
  );
}
