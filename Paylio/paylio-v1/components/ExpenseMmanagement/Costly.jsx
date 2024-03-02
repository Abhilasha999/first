import Image from "next/image";
import costly_surprises from "/public/images/costly-surprises.png";

const Costly = () => {
  return (
    <section className="earn-cashback costly-surprises">
      <div className="overlay pb-120">
        <div className="container wow fadeInUp">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-5 order-md-0 order-1">
              <div className="sec-image d-rtl">
                <Image src={costly_surprises} alt="image" className="max-un" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="section-area">
                <h5 className="sub-title">Avoid Costly Surprises</h5>
                <h2 className="title">Say Goodbye to Manual Paper Expensing</h2>
                <p>
                  Have your team upload receipts via Paylio&#39;s mobile app for
                  instant reconciliation. Close your books 5x faster with our
                  direct accounting integrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Costly;
