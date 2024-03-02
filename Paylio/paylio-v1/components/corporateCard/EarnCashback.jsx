import Image from "next/image";
import Link from "next/link";
import earn_cashback_image from "/public/images/earn-cashback-image.png";

const EarnCashback = () => {
  return (
    <section className="earn-cashback">
      <div className="overlay pb-120">
        <div className="container wow fadeInUp">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-5 order-md-0 order-1">
              <div className="sec-image d-rtl">
                <Image
                  src={earn_cashback_image}
                  alt="image"
                  className="max-un"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="section-text">
                <h5 className="sub-title">Radically better company cards</h5>
                <h2 className="title">Earn cashback on your digital spend</h2>
                <p>
                  Earn 1% cashback on digital marketing and SaaS spend with the
                  biggest names in business tech.
                </p>
              </div>
              <div className="btn-area">
                <Link href="/sign-up" className="cmn-btn">
                  Open Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarnCashback;
