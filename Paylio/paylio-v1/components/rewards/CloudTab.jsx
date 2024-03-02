import { cloudTabData } from "@/data/partnerData";
import PartnerCard from "../cards/PartnerCard";

const CloudTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="cloud"
      role="tabpanel"
      aria-labelledby="cloud-tab"
    >
      <div className="row cus-mar">
        {cloudTabData.map((itm) => (
          <div key={itm.id} className="col-lg-4 col-md-6 col-9">
            <PartnerCard itm={itm} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudTab;
