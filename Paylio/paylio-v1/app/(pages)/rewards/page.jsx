import CallToAction from "@/components/common/CallToAction";
import Banner from "@/components/rewards/Banner";
import HowItWork from "@/components/rewards/HowItWork";
import Partner from "@/components/rewards/Partner";

export default function Rewards() {
  return (
    <>
      {/* Banner section */}
      <Banner />

      {/* How It Work section */}
      <HowItWork />

      {/* Partner section */}
      <Partner />

      {/* Call To Action section */}
      <CallToAction />
    </>
  );
}
