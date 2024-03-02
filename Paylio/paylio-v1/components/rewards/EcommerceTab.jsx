import { ecommerceTabData } from "@/data/partnerData";
import PartnerCard from "../cards/PartnerCard";

const EcommerceTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="ecommerce"
      role="tabpanel"
      aria-labelledby="ecommerce-tab"
    >
      <div className="row cus-mar">
        {ecommerceTabData.map((itm) => (
          <div key={itm.id} className="col-lg-4 col-md-6 col-9">
            <PartnerCard itm={itm} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcommerceTab;
