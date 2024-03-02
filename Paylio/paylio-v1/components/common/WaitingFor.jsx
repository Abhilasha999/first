import Link from "next/link";

const WaitingFor = () => {
  return (
    <section className="call-action">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 text-center">
              <div className="section-text">
                <h5 className="sub-title">What are you waiting for?</h5>
                <h2 className="title">
                  Start Taking Control of Your Money Today
                </h2>
                <p>
                  No-fuss company cards for team members, instant virtual cards
                  for security and flexibility — all set up with our easy
                  expense management
                </p>
              </div>
              <div className="btn-area">
                <Link href="/sign-up" className="cmn-btn">
                  Sign up in minutes
                </Link>
                <Link href="/help-center" className="cmn-btn active">
                  Talk to an expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitingFor;
