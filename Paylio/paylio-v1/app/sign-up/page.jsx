import NavBar from "@/components/navBar/NavBar";
import SignUpBody from "@/components/signUp/SignUpBody";

export default function SignUp(props) {
  props.params.getLayout = true;

  return (
    <>
      {/* NavBar */}
      <NavBar />

      {/* SignUp Body section */}
      <SignUpBody />
    </>
  );
}
