import BottomBar from "@/components/shared/BottomBar";
import Footer from "@/components/Footer";
import AbundishTopbar from "@/components/AbundishTopbar";

export default function AbundishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AbundishTopbar />
      {children}
      <Footer />
      <BottomBar />
    </>
  );
}
