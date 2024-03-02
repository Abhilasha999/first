import Image from "next/image";
import Link from "next/link";
import invoice_1 from "/public/images/icon/invoice-icon-1.png";
import invoice_2 from "/public/images/icon/invoice-icon-2.png";
import invoice_3 from "/public/images/icon/invoice-icon-3.png";

const Banner = () => {
  return (
    <section className="banner-section invoice-management">
      <div className="overlay">
        <div className="shape-area">
          <Image src={invoice_1} className="shape-1" alt="icon" />
          <Image src={invoice_2} className="shape-2" alt="icon" />
          <Image src={invoice_3} className="shape-3" alt="icon" />
        </div>
        <div className="banner-content">
          <div className="container wow fadeInUp">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-9">
                <div className="main-content text-center">
                  <div className="top-area section-text dark-sec">
                    <h5 className="sub-title">Smarter Invoicing</h5>
                    <h1 className="title">Invoices Made Effortless</h1>
                    <p>
                      Create, send & manage invoices effortlessly. Unleash the
                      power of an integrated finance stack with Invoicing and
                      the Paylio business account.
                    </p>
                  </div>
                  <div className="btn-area">
                    <Link href="/sign-up" className="cmn-btn">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
