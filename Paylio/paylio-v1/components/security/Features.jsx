import Image from "next/image";
import Link from "next/link";
import security_1 from "/public/images/security-features-1.png";
import security_2 from "/public/images/security-features-2.png";

const Features = () => {
  return (
    <section className="earn-cashback features">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row pb-120 align-items-center justify-content-between">
            <div className="col-md-6">
              <div className="section-area">
                <h5 className="sub-title">
                  Stay safe with our anti-fraud system
                </h5>
                <h2 className="title">
                  Your money is safeguarded by licensed banks
                </h2>
                <p>
                  We keep your card details safe, flag suspicious transactions,
                  and ask for extra verification to protect you. Our cards are
                  3D Secure and our contactless card limits help fight fraud
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="sec-image">
                <Image src={security_1} alt="image" className="w-100" />
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-md-5 order-md-0 order-1">
              <div className="sec-image">
                <Image src={security_2} alt="image" className="w-100" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="section-text">
                <h5 className="sub-title">
                  Stay in line with company policies
                </h5>
                <h2 className="title">
                  Set and change team permissions with a tap
                </h2>
                <p>
                  Stay in total control of your team’s spending by managing
                  their permissions and levels of access. Create custom roles
                  and choose the combination of apps and features you want them
                  to use
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
    </section>
  );
};

export default Features;
