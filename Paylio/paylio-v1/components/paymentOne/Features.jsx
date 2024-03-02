import Image from "next/image";
import ContentCard from "../cards/ContentCard";
import global_payment_2 from "/public/images/global-payment-2.png";
import features_icon_1 from "/public/images/icon/features-icon-1.png";
import features_icon_2 from "/public/images/icon/features-icon-2.png";
import features_icon_3 from "/public/images/icon/features-icon-3.png";
import features_icon_4 from "/public/images/icon/features-icon-4.png";

const featureData = [
  {
    id: 1,
    title: "Cheaper than banks",
    desc: "Significant savings on your global payments",
    icon: features_icon_1,
  },
  {
    id: 2,
    title: "Faster than banks",
    desc: "Have payments received in as soon as one..",
    icon: features_icon_2,
  },
  {
    id: 3,
    title: "Global reach",
    desc: "Make payments across the globe to more than..",
    icon: features_icon_3,
  },
  {
    id: 4,
    title: "Get local support",
    desc: "Receive full support from our local success..",
    icon: features_icon_4,
  },
];

const Features = () => {
  return (
    <section className="global-payment features">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 order-xl-0 order-1">
              <div className="image-area d-rtl left-side">
                <Image src={global_payment_2} alt="images" className="max-un" />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-7">
              <div className="row cus-mar">
                <div className="col-lg-12">
                  <div className="section-header">
                    <h5 className="sub-title">
                      Everything You Need to Accept Online Payments
                    </h5>
                    <h2 className="title">
                      One Platform. Every Payment Possibility
                    </h2>
                    <p>
                      Making international payments and receivables, easy and
                      efficient.
                    </p>
                  </div>
                </div>
                {featureData.map((itm) => (
                  <div key={itm.id} className="col-sm-6 col-6">
                    {/* TODO: Content Card */}
                    <ContentCard itm={itm} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
