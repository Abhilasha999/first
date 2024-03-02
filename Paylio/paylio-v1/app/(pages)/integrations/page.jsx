import PlatformIntegration from "@/components/common/PlatformIntegration";
import WaitingFor from "@/components/common/WaitingFor";
import Banner from "@/components/integrations/Banner";
import Features from "@/components/integrations/Features";

export default function BudgetingAnalytics() {
  return (
    <>
      {/* Banner Section  */}
      <Banner />

      {/* Features Section  */}
      <Features />

      {/* Platform Integration Section  */}
      <PlatformIntegration />

      {/* Waiting For Section  */}
      <WaitingFor />
    </>
  );
}
