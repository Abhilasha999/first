import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import LoginForm from "./LoginForm";
import login_reg_bg from "/public/images/login-reg-bg.png";

const LoginBody = () => {
  return (
    <section className="login-reg">
      <div className="overlay pt-120">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-6 order-xl-0 order-1">
              <div className="sec-img d-rtl">
                <Image src={login_reg_bg} className="max-un" alt="image" />
              </div>
            </div>
            <div className="col-xl-5">
              <div className="section-text text-center">
                <h5 className="sub-title">Account</h5>
                <h2 className="title">Log in to Continue</h2>
                <p className="dont-acc">
                  Don’t have an account? <Link href="/sign-up">Sign up</Link>
                </p>
                <div className="reg-google">
                  <Link href="#">
                    <FaGoogle />
                    Log in with Google
                  </Link>
                </div>
                <span className="or">Or Continue With</span>
              </div>

              {/* TODO: Login Form */}
              <LoginForm />

              <div className="forgot-pass mt-30 text-center">
                <Link href="#">Forgot Password</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginBody;
