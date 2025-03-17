import CTA from "@/components/CTA";
import Delicacies from "@/components/Delicacies";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Operations from "@/components/Operations";
import OurMenu from "@/components/OurMenu";
import Testimonials from "@/components/Testimonials";
import Vendor from "@/components/Vendor";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Vendor />
      <Delicacies />
      <OurMenu />
      <Testimonials />
      <Operations />
      <CTA />
      <Footer />
    </>
  );
}
