import BusinessTab from "./BusinessTab";
import PersonalTab from "./PersonalTab";

const Details = () => {
  return (
    <section className="help-center-section">
      <div className="overlay pb-120">
        <div className="container wow fadeInUp">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-12">
              <div className="nav-tabs-area">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="cmn-btn active"
                      id="personal-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#personal"
                      type="button"
                      role="tab"
                      aria-controls="personal"
                      aria-selected="true"
                    >
                      personal
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="cmn-btn"
                      id="business-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#business"
                      type="button"
                      role="tab"
                      aria-controls="business"
                      aria-selected="false"
                    >
                      business
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content mt-40">
                {/* TODO: Personal Tab */}
                <PersonalTab />

                {/* TODO: Business Tab */}
                <BusinessTab />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
