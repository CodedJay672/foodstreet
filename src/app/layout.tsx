import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import ContextProvider from "@/context/ContextProvider";

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
        <ContextProvider>{children}</ContextProvider>
        <Toaster invert mobileOffset={100} />
      </body>
    </html>
  );
}
