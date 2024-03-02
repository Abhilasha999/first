import { marketingTabData } from "@/data/partnerData";
import PartnerCard from "../cards/PartnerCard";

const MarketingTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="marketing"
      role="tabpanel"
      aria-labelledby="marketing-tab"
    >
      <div className="row cus-mar">
        {marketingTabData.map((itm) => (
          <div key={itm.id} className="col-lg-4 col-md-6 col-9">
            <PartnerCard itm={itm} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketingTab;
