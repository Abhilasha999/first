import Link from "next/link";

const Banner = () => {
  return (
    <section className="banner-section corporate-card subscriptions">
      <div className="overlay">
        <div className="banner-content">
          <div className="container wow fadeInUp">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="main-content">
                  <div className="top-area section-text">
                    <h5 className="sub-title">Scheduled Payments</h5>
                    <h1 className="title">Manage Subscriptions Smarter</h1>
                    <p className="xlr">
                      One place for all your recurring payments
                    </p>
                  </div>
                  <div className="bottom-area d-xxl-flex">
                    <Link href="/sign-up" className="cmn-btn">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
