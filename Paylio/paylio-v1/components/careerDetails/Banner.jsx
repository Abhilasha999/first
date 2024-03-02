import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import banner from "/public/images/banner-career.png";

const Banner = () => {
  return (
    <section className="banner-section inner-banner career career-details">
      <div className="overlay">
        <div className="shape-area">
          <Image src={banner} className="shape-1" alt="image" />
        </div>
        <div className="banner-content">
          <div className="container wow fadeInUp">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-7">
                <div className="main-content">
                  <h1>Career</h1>

                  {/* TODO: Breadcrumb */}
                  <Breadcrumb
                    breadcrumbs={[
                      ["Home", "/"],
                      ["Career", "/career"],
                      ["Career-detials", "/"],
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-bottom pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="top-box d-flex align-items-center justify-content-between">
                <div className="left-box">
                  <div className="section-text">
                    <h5 className="sub-title">Product-designer</h5>
                    <h2 className="title">Digital Designer</h2>
                    <p>
                      As a Digital Designer, you&#39;ll be responsible for
                      making exceptional UI/UX work.
                    </p>
                  </div>
                  <ul>
                    <li>Sydney, Australia</li>
                    <li>Full time</li>
                    <li>Entry-Level</li>
                  </ul>
                </div>
                <div className="right-box">
                  <Link href="{id}" className="cmn-btn">
                    Apply Now
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

export default Banner;
