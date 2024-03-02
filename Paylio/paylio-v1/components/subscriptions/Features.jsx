import Image from "next/image";
import Link from "next/link";
import subscriptions_2 from "/public/images/subscriptions-features-2.png";
import subscriptions from "/public/images/subscriptions-features.png";

const Features = () => {
  return (
    <section className="earn-cashback features">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row pb-5 mb-lg-3 align-items-center justify-content-between">
            <div className="col-md-6 order-md-0 order-1">
              <div className="sec-image">
                <Image src={subscriptions} alt="image" className="w-100" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="section-text">
                <h5 className="sub-title">
                  Block unwanted subscriptions easily
                </h5>
                <h2 className="title">Organise subscriptions in one place</h2>
                <p>
                  Add your scheduled payments to Paylio to track your spending
                  and see where you could save
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
                <h5 className="sub-title">
                  Subscribe to a better financial life
                </h5>
                <h2 className="title">Get reminders for upcoming payments</h2>
                <p>
                  Say goodbye to surprise charges with notifications if
                  there&#39;s not enough money to cover scheduled payments
                </p>
              </div>
              <div className="bottom-area d-xxl-flex">
                <Link href="/sign-up" className="cmn-btn">
                  Try it out
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sec-image exb-mar">
                <Image src={subscriptions_2} alt="image" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
