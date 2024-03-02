"use client";
import { PaylioContext } from "@/context/context";
import Link from "next/link";
import { useContext } from "react";

const Footer = () => {
  const { activeLefMenu } = useContext(PaylioContext);
  return (
    <footer
      className={`dashboard-section p-0 ${
        activeLefMenu ? "body-collapse" : ""
      } pay`}>
      <div className="py-3 py-lg-4 bg-white d-flex justify-content-between align-align-items-center gap-4 flex-wrap px-4 px-xl-5">
        <span>Copyright @ Paylio - All Rights Reserveed</span>
        <ul className="d-flex gap-3 align-items-center justify-content-center justify-content-lg-end">
          <li>
            <Link href="#">Support</Link>
          </li>
          <li>
            <Link href="#">Terms of Use</Link>
          </li>
          <li>
            <Link href="#">Privary</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
