import { allTabData } from "@/data/partnerData";
import PartnerCard from "../cards/PartnerCard";

const AllTab = () => {
  return (
    <div
      className="tab-pane fade show active"
      id="all"
      role="tabpanel"
      aria-labelledby="all-tab"
    >
      <div className="row cus-mar">
        {allTabData.map((itm) => (
          <div key={itm.id} className="col-lg-4 col-md-6 col-9">
            <PartnerCard itm={itm} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTab;
