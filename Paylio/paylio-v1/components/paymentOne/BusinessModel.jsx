import ContentCard from "../cards/ContentCard";
import business_model_icon_1 from "/public/images/icon/business-model-icon-1.png";
import business_model_icon_2 from "/public/images/icon/business-model-icon-2.png";
import business_model_icon_3 from "/public/images/icon/business-model-icon-3.png";

const businessModelData = [
  {
    id: 1,
    title: "Open an Account",
    desc: "Get an account number and virtual card instantly upon approval. Manage it all from your..",
    icon: business_model_icon_1,
  },
  {
    id: 2,
    title: "No hidden fees",
    desc: "Enjoy the lowest transfer fees in the market with transparent pricing and no monthly fees.",
    icon: business_model_icon_2,
  },
  {
    id: 3,
    title: "All in one place",
    desc: "No need for separate accounts, cards, or software. Scale faster with a fully integrated..",
    icon: business_model_icon_3,
  },
];

const BusinessModel = () => {
  return (
    <section className="our-solutions business-model">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-header dark-sec text-center">
                <h5 className="sub-title">
                  Solutions built for your business model
                </h5>
                <h2 className="title">
                  All-in-one finance for growing businesses
                </h2>
                <p>
                  Save time and money with borderless payments, corporate cards,
                  expense management, and more. All in one account.
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            {businessModelData.map((itm) => (
              <div key={itm.id} className="col-xl-4 col-6">
                {/* TODO: Content card */}
                <ContentCard itm={itm} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
