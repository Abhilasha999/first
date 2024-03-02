"use client";
import CountUp from "react-countup";
const BannerCounter = () => {
  return (
    <>
      <div className="col-xl-3 col-md-3 col-sm-6">
        <div className="single-area d-flex align-items-center justify-content-center">
          <div className="text-area text-center">
            <h2>
              <span className="counter">
                <CountUp end={50} scrollSpyOnce enableScrollSpy />
              </span>
              <span>+</span>
            </h2>
            <p>Supported Currencies</p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-3 col-sm-6">
        <div className="single-area d-flex align-items-center justify-content-center">
          <div className="text-area text-center">
            <h2>
              <span className="counter">
                <CountUp end={100} scrollSpyOnce enableScrollSpy />
              </span>
              <span>+</span>
            </h2>
            <p>Available Countries</p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-3 col-sm-6">
        <div className="single-area d-flex align-items-center justify-content-center">
          <div className="text-area text-center">
            <h2>
              <span className="counter">
                <CountUp end={70} scrollSpyOnce enableScrollSpy />
              </span>
              <span>+</span>
            </h2>
            <p>Payment Methods</p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-3 col-sm-6">
        <div className="single-area d-flex align-items-center justify-content-center">
          <div className="text-area text-center">
            <h2>
              <span className="counter">
                <CountUp end={7} scrollSpyOnce enableScrollSpy />
              </span>
              <span>/</span>
              <span className="counter">
                <CountUp end={24} scrollSpyOnce enableScrollSpy />
              </span>
            </h2>
            <p>Support Team</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerCounter;
