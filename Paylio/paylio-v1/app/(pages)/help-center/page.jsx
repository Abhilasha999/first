import CallToAction from "@/components/common/CallToAction";
import Faqs from "@/components/common/Faqs";
import Banner from "@/components/helpCenter/Banner";
import Details from "@/components/helpCenter/Details";

export default function HelpCenter() {
  return (
    <>
      {/* Banner Section  */}
      <Banner />

      {/* Details Section  */}
      <Details />

      {/* Faqs Section  */}
      <Faqs cls="help-center" />

      {/* Call To Action Section  */}
      <CallToAction />
    </>
  );
}
