import Image from "next/image";
import check from "/public/images/icon/check-3.png";
import secure_integrated_illu from "/public/images/secure-integrated-illu.png";

const Secure = () => {
  return (
    <section className="secure-integrated">
      <div className="overlay pb-120">
        <div className="container wow fadeInUp">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-5 order-md-0 order-1">
              <div className="sec-image d-rtl">
                <Image
                  src={secure_integrated_illu}
                  alt="image"
                  className="max-un"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="section-text">
                <h5 className="sub-title">Secure and integrated</h5>
                <h2 className="title">
                  Control the security of your company cards
                </h2>
                <p>
                  Cancel or freeze cards anytime, with advanced fraud
                  protection. All your transactions are automatically synced
                  with your accounting software.
                </p>
              </div>
              <div className="section-bottom">
                <ul>
                  <li>
                    <Image src={check} alt="icon" />
                    Temporarily freeze missing cards in your app or web
                    dashboard
                  </li>
                  <li>
                    <Image src={check} alt="icon" />
                    Enable location-based security to reduce fraudulent
                    transactions
                  </li>
                  <li>
                    <Image src={check} alt="icon" />
                    Disable contactless, online or swipe payments when necessary
                    to ensure your card’s safety
                  </li>
                  <li>
                    <Image src={check} alt="icon" />
                    Toggle the ability to make cash withdrawals from ATMs for
                    extra security
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Secure;
