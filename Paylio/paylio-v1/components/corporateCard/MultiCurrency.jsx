import Image from "next/image";
import Link from "next/link";
import multi_currency_img from "/public/images/multi-currency-img.png";

const MultiCurrency = () => {
  return (
    <section className="multi-currency">
      <div className="overlay pb-120">
        <div className="container wow fadeInUp">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6">
              <div className="section-text">
                <h5 className="sub-title">Multi-currency Company Cards</h5>
                <h2 className="title">
                  Save with 5x cheaper international payments
                </h2>
                <p>
                  Spend at the visa rate, with a low transparent fee. Easy,
                  fast, transparent. Aspire gives over 10,000 business owners
                  their money and time back.
                </p>
              </div>
              <div className="btn-area">
                <Link href="/sign-up" className="cmn-btn">
                  Open Account
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sec-image">
                <Image
                  src={multi_currency_img}
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

export default MultiCurrency;
