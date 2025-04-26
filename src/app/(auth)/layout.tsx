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
    <main className="w-full min-h-screen py-16 lg:py-24 flex-center gap-4 bg-subtle-light">
      <div className="w-full max-w-screen-sm px-4 py-6 lg:px-6 bg-light rounded-lg lg:shadow-lg space-y-4">
        <Back />
        {children}
      </div>
    </main>
  );
}
