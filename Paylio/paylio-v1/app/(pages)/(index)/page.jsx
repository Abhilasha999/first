import Faqs from "@/components/common/Faqs";
import HowItWork from "@/components/common/HowItWork";
import Testimonial from "@/components/common/Testimonial";
import AppDownload from "@/components/home/AppDownload";
import Banner from "@/components/home/Banner";
import GlobalPayment from "@/components/home/GlobalPayment";
import OurSolution from "@/components/home/OurSolution";

export default function Home() {
  return (
    <>
      {/* Banner Section  */}
      <Banner />

      {/* Global Payment Section  */}
      <GlobalPayment />

      {/* Our Solution Section  */}
      <OurSolution />

      {/* How It Work Section  */}
      <HowItWork />

      {/* App Download Section  */}
      <AppDownload />

      {/* Testimonial Section  */}
      <Testimonial />

      {/* Faqs Section  */}
      <Faqs />
    </>
  );
}
