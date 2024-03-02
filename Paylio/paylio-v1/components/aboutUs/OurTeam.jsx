import TeamCard from "../cards/TeamCard";
import teamData from "./teamData";

const OurTeam = () => {
  return (
    <section className="our-team">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-6">
              <div className="section-header text-center">
                <h5 className="sub-title">Our team</h5>
                <h2 className="title">The amazing team behind our company</h2>
                <p>
                  We are a team of entrepreneurs, payment specialists and
                  blockchain enthusiasts.
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar align-items-center">
            {teamData.map((itm) => (
              <div key={itm.id} className="col-lg-4 col-sm-6">
                {/* TODO: Team Card */}
                <TeamCard itm={itm} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
