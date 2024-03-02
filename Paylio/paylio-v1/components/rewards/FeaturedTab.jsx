import { featurTabData } from "@/data/partnerData";
import PartnerCard from "../cards/PartnerCard";

const FeaturedTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="featured"
      role="tabpanel"
      aria-labelledby="featured-tab"
    >
      <div className="row cus-mar">
        {featurTabData.map((itm) => (
          <div key={itm.id} className="col-lg-4 col-md-6 col-9">
            <PartnerCard itm={itm} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTab;
