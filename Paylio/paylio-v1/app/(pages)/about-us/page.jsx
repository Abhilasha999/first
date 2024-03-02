import Banner from "@/components/aboutUs/Banner";
import Location from "@/components/aboutUs/Location";
import OurTeam from "@/components/aboutUs/OurTeam";
import OurValues from "@/components/aboutUs/OurValues";

export default function BudgetingAnalytics() {
  return (
    <>
      {/* Banner Section */}
      <Banner />

      {/* Our Values Section */}
      <OurValues />

      {/* Our Team Section */}
      <OurTeam />

      {/* Location Section */}
      <Location />
    </>
  );
}
