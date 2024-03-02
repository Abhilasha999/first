import Image from "next/image";
import features_built_frame from "/public/images/features-built-frame.png";
import features_built_icon_1 from "/public/images/icon/features-built-icon-1.png";
import features_built_icon_2 from "/public/images/icon/features-built-icon-2.png";
import features_built_icon_3 from "/public/images/icon/features-built-icon-3.png";

const FeaturesBuilt = () => {
  return (
    <section className="features-built">
      <div className="overlay pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-header text-center">
                <h5 className="sub-title">Features built for business</h5>
                <h2 className="title">Do Business With Confidence</h2>
                <p>
                  Make Money Mover the hub of your cross-border and
                  cross-currency payments and collections and benefit from our
                  intuitive user interface and payment tracking.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-6 cus-mar">
              <div className="single-area">
                <div className="icon-area">
                  <Image src={features_built_icon_1} alt="icon" />
                </div>
                <div className="text-area">
                  <h5>Security is at our core</h5>
                  <p>
                    All our accounts are enabled with two factor authentication
                    to ensure extra-secure transactions.
                  </p>
                </div>
              </div>
              <div className="single-area">
                <div className="icon-area">
                  <Image src={features_built_icon_2} alt="icon" />
                </div>
                <div className="text-area">
                  <h5>Your data is protected</h5>
                  <p>
                    All our accounts are enabled with two factor authentication
                    to ensure extra-secure transactions.
                  </p>
                </div>
              </div>
              <div className="single-area">
                <div className="icon-area">
                  <Image src={features_built_icon_3} alt="icon" />
                </div>
                <div className="text-area">
                  <h5>Customer service is our priority</h5>
                  <p>
                    All our accounts are enabled with two factor authentication
                    to ensure extra-secure transactions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 text-center">
              <div className="image-area">
                <Image
                  src={features_built_frame}
                  alt="images"
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

export default FeaturesBuilt;
