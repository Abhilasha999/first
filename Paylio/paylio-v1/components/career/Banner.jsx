import Image from "next/image";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import banner from "/public/images/banner-career.png";

const Banner = () => {
  return (
    <section className="banner-section inner-banner career">
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
                      ["Company", "/"],
                      ["Career", "/"],
                    ]}
                  />
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
