import Banner from "@/components/businessAccount/Banner";
import BusinessFeatures from "@/components/businessAccount/BusinessFeatures";
import Earn from "@/components/businessAccount/Earn";
import Testimonial from "@/components/common/Testimonial";

export default function BusinessAccount() {
  return (
    <>
      {/* Banner Section */}
      <Banner />

      {/* Business Features Section */}
      <BusinessFeatures />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Earn Section */}
      <Earn />
    </>
  );
}
