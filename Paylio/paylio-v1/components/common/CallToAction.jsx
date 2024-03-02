import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="call-action">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="main-content">
            <div className="row justify-content-center">
              <div className="col-xl-5">
                <div className="section-text text-center">
                  <h2 className="title">Get Started Today</h2>
                  <p>
                    East, fast, transparent. Paylio gives over 10,000 business
                    owners their money and time back.
                  </p>
                </div>
                <div className="btn-area text-center">
                  <Link href="/sign-up" className="cmn-btn">
                    Sign up in minutes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
