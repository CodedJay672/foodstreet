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
      <div className="w-full h-screen lg:w-1/2 space-y-4 p-4 lg:p-10 flex flex-col">
        <Back />
        {children}
      </div>
    </main>
  );
}
