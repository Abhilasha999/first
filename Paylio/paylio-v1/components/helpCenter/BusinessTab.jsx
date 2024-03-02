import HelpCenterCard from "../cards/HelpCenterCard";
import { BusinessData } from "./helpCenterData";

const BusinessTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="business"
      role="tabpanel"
      aria-labelledby="business-tab"
    >
      <div className="row justify-content-center">
        {BusinessData.map((itm, i) => (
          <div key={itm.id} className="col-xl-3 col-lg-4 col-sm-6 col-9">
            {/* TODO: Help Center Card */}
            <HelpCenterCard data={itm} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessTab;
