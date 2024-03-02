import Image from "next/image";
import business_features_1 from "/public/images/business-features-1.png";
import business_features_2 from "/public/images/business-features-2.png";
import business_features_3 from "/public/images/business-features-3.png";

const BusinessFeatures = () => {
  return (
    <section className="business-account">
      <div className="overlay pb-120">
        <div className="container wow fadeInUp">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6">
              <div className="section-area">
                <h2 className="title">
                  Send and receive money from any bank account with free local
                  transfers
                </h2>
                <p>
                  Get your own unique business account number which you can
                  share with clients to receive money.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="sec-image">
                <Image
                  src={business_features_1}
                  alt="image"
                  className="max-un"
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between pb-120 pt-120">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-5 order-md-0 order-1">
                <div className="sec-image d-rtl">
                  <Image
                    src={business_features_2}
                    alt="image"
                    className="max-un"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="section-area">
                  <h2 className="title">
                    Spend less on FX fees, more on growth
                  </h2>
                  <p>
                    Send and receive international payments* in 50+ currencies
                    with low, transparent fees. Multi-currency accounts coming
                    soon.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6">
              <div className="section-area">
                <h2 className="title">Move faster when you add your team</h2>
                <p>
                  Onboard your team in minutes, with the right level of secure
                  access. Issue cards to help with budgeting, or use our
                  transaction approval flows to keep track of trends and speed
                  up your team.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="sec-image">
                <Image
                  src={business_features_3}
                  alt="image"
                  className="max-un"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessFeatures;
