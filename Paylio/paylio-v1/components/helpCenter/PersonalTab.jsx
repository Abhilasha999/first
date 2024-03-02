import HelpCenterCard from "../cards/HelpCenterCard";
import { personalData } from "./helpCenterData";

const PersonalTab = () => {
  return (
    <div
      className="tab-pane fade show active"
      id="personal"
      role="tabpanel"
      aria-labelledby="personal-tab"
    >
      <div className="row justify-content-sm-start justify-content-center">
        {personalData.map((itm, i) => (
          <div key={itm.id} className="col-xl-3 col-lg-4 col-sm-6 col-9">
            {/* TODO: Help center Card */}
            <HelpCenterCard data={itm} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalTab;
