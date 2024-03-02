"use client";

import EyeIcon from "@/public/images/svg/Eye";
import EyeOffIcon from "@/public/images/svg/EyeOffIcon";
import { useState } from "react";

const LoginForm = () => {
  const [inputPass, setInputPass] = useState(true);
  return (
    <form action="#">
      <div className="row">
        <div className="col-12">
          <div className="single-input">
            <label htmlFor="logemail">Your Email</label>
            <input
              type="text"
              id="logemail"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="single-input">
            <label htmlFor="logpassword">Your Password</label>
            <div className="password-input position-relative">
              <input
                type={inputPass ? "password" : "text"}
                id="logpassword"
                placeholder="Enter Your Password"
                required
              />
              <span
                onClick={() => setInputPass(!inputPass)}
                className="show-hide">
                {inputPass ? <EyeIcon /> : <EyeOffIcon />}
              </span>
            </div>
          </div>
          <button type={"submit"} className="cmn-btn w-100">
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
