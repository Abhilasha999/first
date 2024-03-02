import { financeTabData } from "@/data/partnerData";
import PartnerCard from "../cards/PartnerCard";

const FinanceTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="finance"
      role="tabpanel"
      aria-labelledby="finance-tab"
    >
      <div className="row cus-mar">
        {financeTabData.map((itm) => (
          <div key={itm.id} className="col-lg-4 col-md-6 col-9">
            <PartnerCard itm={itm} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinanceTab;
