import Image from "next/image";
import Link from "next/link";
import aws from "/public/images/icon/aws.png";
import magento from "/public/images/icon/magento.png";
import shopify from "/public/images/icon/shopify.png";
import xero from "/public/images/icon/xero.png";

const Earn = () => {
  return (
    <section className="call-action earn-when-spend">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 text-center">
              <div className="section-text">
                <h2 className="title">Earn When You Spend</h2>
                <p>
                  Get a corporate card that gives you cash back on digital
                  spend. Issue unlimited cards to your team to manage corporate
                  expenses.
                </p>
              </div>
              <div className="btn-area">
                <Link href="/sign-up" className="cmn-btn">
                  Open a Free Account
                </Link>
                <Link href="/help-center" className="cmn-btn active">
                  Talk to an expert
                </Link>
              </div>
              <ul className="mt-60">
                <li>
                  <Image src={aws} alt="icon" />
                </li>
                <li>
                  <Image src={shopify} alt="icon" />
                </li>
                <li>
                  <Image src={magento} alt="icon" />
                </li>
                <li>
                  <Image src={xero} alt="icon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Earn;
