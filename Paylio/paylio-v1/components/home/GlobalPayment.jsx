import Image from "next/image";
import ContentCard from "../cards/ContentCard";
import global_payment_img from "/public/images/global-payment-img.png";
import global_payment_icon_1 from "/public/images/icon/global-payment-icon-1.png";
import global_payment_icon_2 from "/public/images/icon/global-payment-icon-2.png";
import global_payment_icon_3 from "/public/images/icon/global-payment-icon-3.png";
import global_payment_icon_4 from "/public/images/icon/global-payment-icon-4.png";

const globalData = [
  {
    id: 1,
    title: "Peace of Mind",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio.",
    icon: global_payment_icon_1,
  },
  {
    id: 2,
    title: "Business-Ready",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio.",
    icon: global_payment_icon_2,
  },
  {
    id: 3,
    title: "100% Transparent",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio.",
    icon: global_payment_icon_3,
  },
  {
    id: 4,
    title: "International Network",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio.",
    icon: global_payment_icon_4,
  },
];

const GlobalPayment = () => {
  return (
    <section className="global-payment">
      <div className="overlay pt-120 pb-120">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-header text-center">
                <h5 className="sub-title">Send money in a heartbeat</h5>
                <h2 className="title">The World At Your Fingertips</h2>
                <p>
                  Sign up to start saving on international money transfers and
                  currency exchange.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-6 col-xl-5 order-xl-0 order-1">
              <div className="image-area d-rtl left-side">
                <Image
                  src={global_payment_img}
                  alt="images"
                  className="max-un"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-7">
              <div className="row cus-mar">
                {globalData.map((itm) => (
                  <div key={itm.id} className="col-sm-6 col-6">
                    {/* TODO: content card */}
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

export default GlobalPayment;
