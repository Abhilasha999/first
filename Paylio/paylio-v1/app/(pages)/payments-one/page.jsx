import Banner from "@/components/paymentOne/Banner";
import BusinessGrow from "@/components/paymentOne/BusinessGrow";
import BusinessModel from "@/components/paymentOne/BusinessModel";
import Features from "@/components/paymentOne/Features";
import FeaturesBuilt from "@/components/paymentOne/FeaturesBuilt";
import PaymentMethods from "@/components/paymentOne/PaymentMethods";

export default function PaymentOne() {
  return (
    <>
      {/* Banner section */}
      <Banner />

      {/* Features section */}
      <Features />

      {/* Business Grow section */}
      <BusinessGrow />

      {/* Payment Methods section */}
      <PaymentMethods />

      {/* Business Model section */}
      <BusinessModel />

      {/* Features Built section */}
      <FeaturesBuilt />
    </>
  );
}
