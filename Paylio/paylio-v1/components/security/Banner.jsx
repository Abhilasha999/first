import Image from "next/image";
import Link from "next/link";
import security_shape_1 from "/public/images/security-shape-1.png";
import security_shape_2 from "/public/images/security-shape-2.png";
import security_shape_3 from "/public/images/security-shape-3.png";

const Banner = () => {
  return (
    <section className="banner-section invoice-management security">
      <div className="overlay">
        <div className="shape-area">
          <Image src={security_shape_1} className="shape-1" alt="icon" />
          <Image src={security_shape_2} className="shape-2" alt="icon" />
          <Image src={security_shape_3} className="shape-3" alt="icon" />
        </div>
        <div className="banner-content">
          <div className="container wow fadeInUp">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-8 col-md-7">
                <div className="main-content text-center">
                  <div className="top-area section-text dark-sec">
                    <h5 className="sub-title">Security</h5>
                    <h1 className="title">Spend With Confidence</h1>
                    <p>
                      Keep your money and payments secure with our high quality
                      tech and card protections
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
