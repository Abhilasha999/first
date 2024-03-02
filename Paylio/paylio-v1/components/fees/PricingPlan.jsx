import pricingPlanData from "@/data/pricingPlanData";
import CompanyTab from "./CompanyTab";
import FreelancerTab from "./FreelancerTab";

const PricingPlan = () => {
  return (
    <section className="pricing-plan">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="section-header text-center">
                <h5 className="sub-title">
                  We Promise Low Fees and No Extra Charges
                </h5>
                <h2 className="title">
                  Start for free. Pay as you grow. Switch at any time.
                </h2>
                <p>
                  Open an account under your registered business name. You can
                  change or cancel your plan at any time. Billing is monthly.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-12">
              <div className="nav-tabs-area mb-40">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="cmn-btn active"
                      id="company-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#company"
                      type="button"
                      role="tab"
                      aria-controls="company"
                      aria-selected="true"
                    >
                      company
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="cmn-btn"
                      id="freelancer-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#freelancer"
                      type="button"
                      role="tab"
                      aria-controls="freelancer"
                      aria-selected="false"
                    >
                      freelancer
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                {/* TODO: Company Tab */}
                <CompanyTab pricingPlanData={pricingPlanData} />

                {/* TODO: Freelancer Tab */}
                <FreelancerTab pricingPlanData={pricingPlanData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
