import Link from "next/link";
import AllJobsTab from "./AllJobsTab";
import BackEndTab from "./BackEndTab";
import DessignerTab from "./DessignerTab";
import FrontEndTab from "./FrontEndTab";

const CurrentOpen = () => {
  return (
    <section className="current-openings">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center justify-content-between">
            <div className="col-xl-5">
              <div className="position-sticky">
                <div className="section-header">
                  <h5 className="sub-title">Join our team today!</h5>
                  <h2 className="title">Current Openings</h2>
                  <p>
                    Even if you don’t find a suitable position, you can still
                    send your resume to{" "}
                    <Link href="mailto:careers@paylio.com">
                      careers@paylio.com
                    </Link>
                  </p>
                </div>
                <div className="nav-tabs-area mb-40">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="cmn-btn active"
                        id="all-jobs-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#all-jobs"
                        type="button"
                        role="tab"
                        aria-controls="all-jobs"
                        aria-selected="true"
                      >
                        All jobs
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="cmn-btn"
                        id="dessigner-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#dessigner"
                        type="button"
                        role="tab"
                        aria-controls="dessigner"
                        aria-selected="false"
                      >
                        Product- Dessigner
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="cmn-btn"
                        id="front-end-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#front-end"
                        type="button"
                        role="tab"
                        aria-controls="front-end"
                        aria-selected="false"
                      >
                        Front- end developer
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="cmn-btn"
                        id="back-end-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#back-end"
                        type="button"
                        role="tab"
                        aria-controls="back-end"
                        aria-selected="false"
                      >
                        back- end developer
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="tab-content">
                {/* TODO: All Jobs Tab */}
                <AllJobsTab />

                {/* TODO: Dessigner Tab */}
                <DessignerTab />

                {/* TODO: Front End Tab */}
                <FrontEndTab />

                {/* TODO: Back End Tab */}
                <BackEndTab />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentOpen;
