import Image from "next/image";
import accept_payment_img from "/public/images/accept-payment-img.png";

const PaymentMethods = () => {
  return (
    <section className="accept-payments">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-0 order-1">
              <div className="image-area d-rtl left-side">
                <Image
                  src={accept_payment_img}
                  alt="images"
                  className="max-un"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-header">
                <h5 className="sub-title">
                  The platform to help your business grow
                </h5>
                <h2 className="title">Accept Payments Everywhere</h2>
                <p>
                  Let your customers pay wherever and however they prefer. Work
                  with one provider to accept, process, and settle payments.
                </p>
              </div>
              <div className="main-content">
                <div className="single-item">
                  <h5>Online Payments ›</h5>
                  <p>
                    Accept cards, mobile wallets, and more on any digital
                    channel or device.
                  </p>
                </div>
                <div className="single-item">
                  <h5>In-person payments ›</h5>
                  <p>
                    Enhance your point of sale setup and choose a terminal for
                    any need.
                  </p>
                </div>
                <div className="single-item">
                  <h5>Unified Commerce ›</h5>
                  <p>
                    Connect your online and in-store payment data in one system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
