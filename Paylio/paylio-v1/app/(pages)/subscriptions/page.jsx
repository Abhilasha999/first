import Testimonial from "@/components/common/Testimonial";
import WaitingFor from "@/components/common/WaitingFor";
import Banner from "@/components/subscriptions/Banner";
import Features from "@/components/subscriptions/Features";

export default function Subscriptions() {
  return (
    <>
      {/* Banner section */}
      <Banner />

      {/* Features section */}
      <Features />

      {/* Testimonial section */}
      <Testimonial />

      {/* Waiting For section */}
      <WaitingFor />
    </>
  );
}
