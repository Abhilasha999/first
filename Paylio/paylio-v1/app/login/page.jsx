import LoginBody from "@/components/login/LoginBody";
import NavBar from "@/components/navBar/NavBar";

export default function Login(props) {
  props.params.getLayout = true;

  return (
    <>
      {/* NavBar */}
      <NavBar />

      {/* Login Body  Section */}
      <LoginBody />
    </>
  );
}
