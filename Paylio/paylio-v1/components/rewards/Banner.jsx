import Image from "next/image";
import Link from "next/link";
import rewards_1 from "/public/images/rewards-banner-1.png";
import rewards_2 from "/public/images/rewards-banner-2.png";

const Banner = () => {
  return (
    <section className="banner-section invoice-management rewards">
      <div className="overlay">
        <div className="shape-area">
          <Image src={rewards_1} className="obj-1" alt="icon" />
          <Image src={rewards_2} className="obj-2" alt="icon" />
        </div>
        <div className="banner-content">
          <div className="container wow fadeInUp">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-8">
                <div className="main-content text-center">
                  <div className="top-area section-text dark-sec">
                    <h5 className="sub-title">Rewards that matter</h5>
                    <h1 className="title">
                      Boost Your Business and growth with unlimited rewards
                    </h1>
                    <p>
                      Open an Paylio account and gain access to over S$50,000
                      worth of exclusive benefits from our platform partners.
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
