import Breadcrumb from "../breadcrumb/Breadcrumb";

const Banner = () => {
  return (
    <section className="banner-section inner-banner privacy-content">
      <div className="overlay">
        <div className="banner-content d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-lg-7 col-md-10">
                <div className="main-content">
                  <h1>Privacy Policy</h1>

                  <Breadcrumb
                    breadcrumbs={[
                      ["Home", "/"],
                      ["Company", "/"],
                      ["Privacy Policy", "/"],
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
