import StayControl from "@/components/common/StayControl";
import Testimonial from "@/components/common/Testimonial";
import WaitingFor from "@/components/common/WaitingFor";
import Banner from "@/components/ExpenseMmanagement/Banner";
import Costly from "@/components/ExpenseMmanagement/Costly";
import Feature from "@/components/ExpenseMmanagement/Feature";
import Team from "@/components/ExpenseMmanagement/Team";

export default function ExpenseManagement() {
  return (
    <>
      {/* Banner Section */}
      <Banner />

      {/* Feature Section */}
      <Feature />

      {/* Team Section */}
      <Team />

      {/* Stay Control Section */}
      <StayControl />

      {/* Costly Section */}
      <Costly />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Waiting For Section */}
      <WaitingFor />
    </>
  );
}
