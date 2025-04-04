import CTA from "@/components/CTA";
import HeroSection from "@/components/HeroSection";
import HowToOrder from "@/components/HowToOrder";
import PartnerWithUs from "@/components/PartnerWithUs";
import QuoteSection from "@/components/QuoteSection";
import Restaurants from "@/components/Restaurants";
import Testimonials from "@/components/Testimonials";
import Vendor from "@/components/Vendor";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Vendor />
      <QuoteSection />
      <HowToOrder />
      <Restaurants />
      <PartnerWithUs />
      <Testimonials />
      <CTA />
    </>
  );
}
