import Back from "@/components/shared/Back";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | Foodstreet",
  description:
    "FoodStreet is your No 1 online store that delivers fresh food to your doorstep.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full flex gap-4 bg-light">
      <div className="w-1/2 space-y-4 p-10">
        <Back />
        {children}
      </div>
      <div className="w-1/2 h-screen sticky top-0 right-0 bg-primary-light"></div>
    </main>
  );
}
