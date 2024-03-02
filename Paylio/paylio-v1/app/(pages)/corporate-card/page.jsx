import CallToAction from "@/components/common/CallToAction";
import StayControl from "@/components/common/StayControl";
import Testimonial from "@/components/common/Testimonial";
import Banner from "@/components/corporateCard/Banner";
import EarnCashback from "@/components/corporateCard/EarnCashback";
import Feature from "@/components/corporateCard/Feature";
import MultiCurrency from "@/components/corporateCard/MultiCurrency";
import Secure from "@/components/corporateCard/Secure";

export default function CorporateCard() {
  return (
    <>
      {/* Banner Section */}
      <Banner />

      {/* Feature Section */}
      <Feature />

      {/* Multi Currency Section */}
      <MultiCurrency />

      {/* Earn Cashback Section */}
      <EarnCashback />

      {/* Stay Control Section */}
      <StayControl />

      {/* Secure Section */}
      <Secure />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Call To Action Section */}
      <CallToAction />
    </>
  );
}
