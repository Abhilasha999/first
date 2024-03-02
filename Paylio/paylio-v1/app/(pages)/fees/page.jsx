import Banner from "@/components/fees/Banner";
import PricingPlan from "@/components/fees/PricingPlan";
import SupportedCountry from "@/components/fees/SupportedCountry";

export default function Fees() {
  return (
    <>
      {/* Banner Section */}
      <Banner />

      {/* Pricing Plan Section */}
      <PricingPlan />

      {/* Supported Country Section */}
      <SupportedCountry />
    </>
  );
}
