import ContentCard from "../cards/ContentCard";

const ourSolutionData = [
  {
    id: 1,
    title: "Payments",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio.",
    icon: "/images/icon/our-solutions-icon-1.png",
  },
  {
    id: 2,
    title: "Collections",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio.",
    icon: "/images/icon/our-solutions-icon-2.png",
  },
  {
    id: 3,
    title: "Conversions",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio.",
    icon: "/images/icon/our-solutions-icon-3.png",
  },
  {
    id: 4,
    title: "Global Account",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio.",
    icon: "/images/icon/our-solutions-icon-4.png",
  },
];

const OurSolution = () => {
  return (
    <section className="our-solutions">
      <div className="overlay pt-120 pb-120">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-header dark-sec text-center">
                <h5 className="sub-title">High speeds. Low fees. No hassle.</h5>
                <h2 className="title">All Your Payments In One Place</h2>
                <p>
                  Get used to low fees and great exchange rates on international
                  money transfers.Expand your business worldwide
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            {ourSolutionData.map((itm) => (
              <div key={itm.id} className="col-xl-3 col-6">
                {/* TODO: content card */}
                <ContentCard itm={itm} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSolution;
