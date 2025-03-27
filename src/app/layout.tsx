import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Topbar from "@/components/Topbar";
import BottomBar from "@/components/shared/BottomBar";
import ContextProvider from "@/context/ContextProvider";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const inter = localFont({
  src: [
    {
      path: "/fonts/Inter_24pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Inter_24pt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/Inter_24pt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/Inter_24pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--inter",
});

const robotoSans = localFont({
  src: [
    {
      path: "/fonts/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/Roboto-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Foodstreet | Fresh foods for everyone",
  description:
    "FoodStreet is your No 1 online store that delivers fresh food to your doorstep.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${robotoSans.className} ${inter.variable}`}>
        <Topbar />
        {children}
        <Footer />
        <div className="lg:hidden">
          <BottomBar />
        </div>
        <Toaster invert mobileOffset={100} />
      </body>
    </html>
  );
}
