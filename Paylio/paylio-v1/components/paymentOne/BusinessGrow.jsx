import ContentCard from "../cards/ContentCard";
import more_features_icon_1 from "/public/images/icon/more-features-icon-1.png";
import more_features_icon_2 from "/public/images/icon/more-features-icon-2.png";
import more_features_icon_3 from "/public/images/icon/more-features-icon-3.png";

const businessGrowData = [
  {
    id: 1,
    title: "Global Coverage",
    desc: "Grow into international markets by accepting payments wherever your customers are - via their preferred...",
    icon: more_features_icon_1,
  },
  {
    id: 2,
    title: "Simple integration",
    desc: "Access our payments platform via an easy API integration, through your chosen shopping cart or any other",
    icon: more_features_icon_2,
  },
  {
    id: 3,
    title: "Scalable",
    desc: "We recently have built highly scalable infrastructure from the ground up for security, stability and velocity.",
    icon: more_features_icon_3,
  },
];

const BusinessGrow = () => {
  return (
    <section className="more-features">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-xl-6 text-center">
              <div className="section-header dark-sec">
                <h5 className="sub-title">Easy, Fast, and powerful</h5>
                <h2 className="title">
                  The platform to help your business grow
                </h2>
                <p>
                  One platform to accept payments, protect revenue, and control
                  your finances.
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            {businessGrowData.map((itm) => (
              <div key={itm.id} className="col-md-4 col-sm-6">
                {/* TODO: Content Card */}
                <ContentCard itm={itm} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessGrow;
