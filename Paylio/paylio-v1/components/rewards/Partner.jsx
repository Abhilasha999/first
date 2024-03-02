import AllTab from "./AllTab";
import CloudTab from "./CloudTab";
import EcommerceTab from "./EcommerceTab";
import FeaturedTab from "./FeaturedTab";
import FinanceTab from "./FinanceTab";
import LegalTab from "./LegalTab";
import MarketingTab from "./MarketingTab";

const Partner = () => {
  return (
    <section className="partner-perks">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-header text-center">
                <h5 className="sub-title">Partner perks</h5>
                <h2 className="title">
                  Get discounts on top services to run your company
                </h2>
                <p>
                  Paylio partner offers are worth over $50,000 in value and can
                  be redeemed anytime.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-12">
              <ul className="nav nav-tabs mb-40" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="cmn-btn active"
                    id="all-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#all"
                    type="button"
                    role="tab"
                    aria-controls="all"
                    aria-selected="true">
                    all
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="cmn-btn"
                    id="featured-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#featured"
                    type="button"
                    role="tab"
                    aria-controls="featured"
                    aria-selected="false">
                    featured
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="cmn-btn"
                    id="legal-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#legal"
                    type="button"
                    role="tab"
                    aria-controls="legal"
                    aria-selected="false">
                    legal
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="cmn-btn"
                    id="ecommerce-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#ecommerce"
                    type="button"
                    role="tab"
                    aria-controls="ecommerce"
                    aria-selected="false">
                    ecommerce
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="cmn-btn"
                    id="finance-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#finance"
                    type="button"
                    role="tab"
                    aria-controls="finance"
                    aria-selected="false">
                    finance
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="cmn-btn"
                    id="cloud-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#cloud"
                    type="button"
                    role="tab"
                    aria-controls="cloud"
                    aria-selected="false">
                    cloud
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="cmn-btn"
                    id="marketing-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#marketing"
                    type="button"
                    role="tab"
                    aria-controls="marketing"
                    aria-selected="false">
                    marketing
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                {/* TODO: All Tab */}
                <AllTab />

                {/* TODO: Featured Tab */}
                <FeaturedTab />

                {/* TODO: Legal Tab */}
                <LegalTab />

                {/* TODO: Ecommerce Tab */}
                <EcommerceTab />

                {/* TODO: Finance Tab */}
                <FinanceTab />

                {/* TODO: Cloud Tab */}
                <CloudTab />

                {/* TODO: Marketing Tab */}
                <MarketingTab />
                <div className="d-flex justify-content-center mt-5">
                  <button className="cmn-btn">Load More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
