import Image from "next/image";
import team_instantly from "/public/images/team-instantly.png";

const Team = () => {
  return (
    <section className="earn-cashback team-instantly">
      <div className="overlay pb-120">
        <div className="container wow fadeInUp">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-5 order-md-0 order-1">
              <div className="sec-image d-rtl">
                <Image src={team_instantly} alt="image" className="max-un" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="section-area">
                <h5 className="sub-title">Card spending you control</h5>
                <h2 className="title">Issue Cards to Your Team Instantly</h2>
                <p>
                  Unlimited virtual cards that you can issue to each employee,
                  merchant, or use-case. Say goodbye to sharing cards or
                  one-time passwords, and hello to faster purchasing. All for
                  free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
