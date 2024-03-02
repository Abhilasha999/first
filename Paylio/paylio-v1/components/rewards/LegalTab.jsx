import { legalTabData } from "@/data/partnerData";
import PartnerCard from "../cards/PartnerCard";

const LegalTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="legal"
      role="tabpanel"
      aria-labelledby="legal-tab"
    >
      <div className="row cus-mar">
        {legalTabData.map((itm) => (
          <div key={itm.id} className="col-lg-4 col-md-6 col-9">
            <PartnerCard itm={itm} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegalTab;
