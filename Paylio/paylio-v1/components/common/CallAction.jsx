import Link from "next/link";

const CallAction = () => {
  return (
    <section className="call-action security">
      <div className="overlay pb-120">
        <div className="container">
          <div className="main-content">
            <div className="row">
              <div className="col-xl-5">
                <div className="section-text dark-sec">
                  <h5 className="sub-title">What are you waiting for?</h5>
                  <h2 className="title">
                    Get top tier security for your business today
                  </h2>
                </div>
                <div className="btn-area">
                  <Link href="/sign-up" className="cmn-btn active">
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

export default CallAction;
