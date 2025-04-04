import Topbar from "@/components/Topbar";
import BottomBar from "@/components/shared/BottomBar";
import Footer from "@/components/Footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Topbar />
      {children}
      <Footer />
      <BottomBar />
    </>
  );
}
