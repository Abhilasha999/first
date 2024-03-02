import Image from "next/image";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import banner_fees from "/public/images/banner-fees.png";

const Banner = () => {
  return (
    <section className="banner-section inner-banner fees">
      <div className="overlay">
        <div className="shape-area">
          <Image src={banner_fees} className="shape-1" alt="image" />
        </div>
        <div className="banner-content">
          <div className="container wow fadeInUp">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-7">
                <div className="main-content">
                  <h1>Fees</h1>

                  {/* TODO: Breadcrumb */}
                  <Breadcrumb
                    breadcrumbs={[
                      ["Home", "/"],
                      ["Business", "/"],
                      ["Fees", "/"],
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
