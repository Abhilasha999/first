import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import SignUpForm from "./SignUpForm";
import login_reg_bg from "/public/images/login-reg-bg.png";

const SignUpBody = () => {
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
                <h2 className="title">Welcome to Paylio</h2>
                <p className="dont-acc">
                  Already have an account? <Link href="/login">Login</Link>
                </p>
                <div className="reg-google">
                  <Link href="#">
                    <FaGoogle />
                    Log in with Google
                  </Link>
                </div>
                <span className="or">Or Continue With</span>
              </div>

              {/* TODO: Sign Up Form */}
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpBody;
