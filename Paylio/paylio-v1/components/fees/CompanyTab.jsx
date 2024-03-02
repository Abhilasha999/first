import PricingSingleCard from "../cards/PricingSingleCard";

const CompanyTab = ({ pricingPlanData }) => {
  return (
    <div
      className="tab-pane fade show active"
      id="company"
      role="tabpanel"
      aria-labelledby="company-tab"
    >
      <div className="row justify-content-center">
        {pricingPlanData.map((itm) => (
          <div key={itm.id} className="col-xxl-4 col-md-6 col-9">
            <PricingSingleCard itm={itm} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyTab;
