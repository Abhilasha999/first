import Image from "next/image";
import Link from "next/link";
import features_2 from "/public/images/budgeting-analytics-features-2.png";
import features from "/public/images/budgeting-analytics-features.png";

const Features = () => {
  return (
    <section className="earn-cashback features">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row pb-120 align-items-center justify-content-between">
            <div className="col-md-6 order-md-0 order-1">
              <div className="sec-image">
                <Image src={features} alt="image" className="w-100" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="section-text">
                <h5 className="sub-title">Get pinged to stay on track</h5>
                <h2 className="title">
                  Set limits to help you stick to your budget
                </h2>
                <p>
                  We’ll calculate limits to recommend you based on your spending
                  predictions, or simply tell us how much you want to spend
                </p>
              </div>
              <div className="bottom-area d-xxl-flex">
                <Link href="/sign-up" className="cmn-btn">
                  Try it out
                </Link>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6">
              <div className="section-text">
                <h5 className="sub-title">Budgeting and beyond</h5>
                <h2 className="title">
                  Master Your Money With Smart Analytics
                </h2>
                <p>
                  Get a clear view of your spending with a breakdown by
                  merchants, categories, countries, and more
                </p>
              </div>
              <div className="bottom-area d-xxl-flex">
                <Link href="/sign-up" className="cmn-btn">
                  Check it Out
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sec-image">
                <Image src={features_2} alt="image" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
