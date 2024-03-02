import PlatformIntegration from "@/components/common/PlatformIntegration";
import WaitingFor from "@/components/common/WaitingFor";
import Banner from "@/components/invoiceManagement/Banner";
import Features from "@/components/invoiceManagement/Features";

export default function BudgetingAnalytics() {
  return (
    <>
      {/* Banner section  */}
      <Banner />

      {/* Features section  */}
      <Features />

      {/* Platform Integration section  */}
      <PlatformIntegration />

      {/* Waiting For section  */}
      <WaitingFor />
    </>
  );
}
