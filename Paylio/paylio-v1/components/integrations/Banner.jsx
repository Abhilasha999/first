import Image from "next/image";
import integration from "/public/images/integrations-banner.png";

const Banner = () => {
  return (
    <section className="banner-section business-account integrations">
      <div className="overlay">
        <div className="banner-content">
          <div className="container wow fadeInUp">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-10">
                <div className="main-content text-center">
                  <div className="top-area section-text dark-sec">
                    <h5 className="sub-title">Budgeting and Analytics</h5>
                    <h1 className="title">
                      Automate Your Workflows With Direct Integrations
                    </h1>
                    <p>Close the books faster, without errors.</p>
                  </div>
                  <form action="#">
                    <div className="form-group mb-40 d-flex align-items-center">
                      <input
                        type="text"
                        placeholder="Enter Your Email Address"
                        required
                      />
                      <button type={"submit"} className="cmn-btn">
                        Get Started
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-img-bottom pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="img-area">
                <Image src={integration} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
