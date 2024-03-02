import ContentCard from "../cards/ContentCard";
import how_works_icon_1 from "/public/images/icon/how-works-icon-1.png";
import how_works_icon_2 from "/public/images/icon/how-works-icon-2.png";
import how_works_icon_3 from "/public/images/icon/how-works-icon-3.png";
import how_works_icon_4 from "/public/images/icon/how-works-icon-4.png";

const howItWorkData = [
  {
    id: 1,
    title: "Register for free",
    desc: "Simply sign up online for free and verify your identity",
    icon: how_works_icon_1,
  },
  {
    id: 2,
    title: "Set up your transfer",
    desc: "Add a recipient's details and choose which currency ...",
    icon: how_works_icon_2,
  },
  {
    id: 3,
    title: "Make your payment",
    desc: "Send us your funds with a bank transfer and we'll notify..",
    icon: how_works_icon_3,
  },
  {
    id: 4,
    title: "You're all done!",
    desc: "We inform you when the money has been sent and can also ...",
    icon: how_works_icon_4,
  },
];

const HowItWork = () => {
  return (
    <section className="how-it-works">
      <div className="overlay pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <h5 className="sub-title">How it works?</h5>
                <h2 className="title">Just few steps to start</h2>
                <p>
                  It&#39;s easier than you think. Follow 3 simple easy steps
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            {howItWorkData.map((itm, i) => (
              <div key={itm.id} className="col-xl-3 col-sm-6 col-6">
                {/* TODO: content card */}
                <ContentCard itm={itm} cls={`text-center`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
