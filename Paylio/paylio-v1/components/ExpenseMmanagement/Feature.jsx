import ContentCard from "../cards/ContentCard";
import features_1 from "/public/images/icon/features-corporate-icon-1.png";
import features_2 from "/public/images/icon/features-corporate-icon-2.png";
import features_3 from "/public/images/icon/features-corporate-icon-3.png";

const featureData = [
  {
    id: 1,
    title: "Earn Cashback",
    desc: "The banks don't reward you like this. Earn 1% cashback..",
    icon: features_1,
  },
  {
    id: 2,
    title: "Track Spending",
    desc: "Get real-time notifications at your fingertips. Set budgets to avoid..",
    icon: features_2,
  },
  {
    id: 3,
    title: "Completely Free",
    desc: "No sign up, annual, or hidden fees. Get started in 5 minutes",
    icon: features_3,
  },
];

const Feature = () => {
  return (
    <section className="global-payment feature">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-header text-center">
                <h5 className="sub-title">Access your funds even faster</h5>
                <h2 className="title">
                  More Savings, More Time, More Peace of Mind
                </h2>
                <p>
                  Get everything you need to create and manage your card program
                  with our unified payments platform.
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            {featureData.map((itm) => (
              <div key={itm.id} className="col-lg-4 col-md-6">
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

export default Feature;
